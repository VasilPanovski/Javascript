function attachEvents() {

    let baseUrl = 'https://judgetests.firebaseio.com/';

    function request(endpoint) {
        return $.ajax({
            type: 'GET',
            url: baseUrl + endpoint
        });
    }

    $('#submit').click(makeRequestToLocations);
    
    function makeRequestToLocations() {
        request('locations.json')
            .then(getLocationCode)
            .catch(errorHandler);

    }

    function getLocationCode(data) {
        let wantedLocationName = $('#location').val();
        if (!wantedLocationName) return errorHandler;

        let code = data.filter(obj => obj['name'] === wantedLocationName)[0].code;
        let todayWeather = request(`forecast/today/${code}.json`);
        let upcomingWeather = request(`forecast/upcoming/${code}.json`);
        Promise.all([todayWeather, upcomingWeather]).then(displayForecast).catch(errorHandler)
    }


    function displayForecast([todayWeatherData, upcomingWeatherData]) {
        let weather = {
            'Sunny': '&#x2600;',
            'Partly sunny':	'&#x26C5;',
            'Overcast':'&#x2601;',
            'Rain': '&#x2614;',
            'Degrees': '&#176;'
        };

        displayTodayWeather(todayWeatherData, weather);
        displayUpcomingWeather(upcomingWeatherData, weather);
    }

    function displayTodayWeather(data, weather) {
        $('#forecast').css('display', 'block');
        let firstSpan = $('<div class="label">Current conditions</div>');
        let current = $('#current');
        current.empty();

        let temperature = `${data.forecast.low}${weather['Degrees']}/${data.forecast.high}${weather['Degrees']}`;
        let symbolSpan = $(`<span class="condition symbol">${weather[data.forecast.condition]}</span>`);
        let conditionSpan = $('<span class="condition"></span>')
            .append($(`<span class="forecast-data">${data.name}</span>`))
            .append($(`<span class="forecast-data">${temperature}</span>`))
            .append($(`<span class="forecast-data">${data.forecast.condition}</span>`));

        current.append(firstSpan, symbolSpan, conditionSpan);
    }
    
    function displayUpcomingWeather(data, weather) {
        let upcoming = $('#upcoming');
        upcoming.empty();
        let threeDaysWeather = data.forecast;
        for (let dayWeather of threeDaysWeather) {
            let temperature = `${dayWeather.low}${weather['Degrees']}/${dayWeather.high}${weather['Degrees']}`;
            let symbolSpan = $(`<span class="symbol">${weather[dayWeather.condition]}</span>`);
            let tempSpan = $(`<span class="forecast-data">${temperature}</span>`);
            let textSpan = $(`<span class="forecast-data">${dayWeather.condition}</span>`);
            let upcomingSpan = $('<span class="upcoming"></span>').append(symbolSpan, tempSpan, textSpan);
            upcoming.append(upcomingSpan);
        }

        upcoming.prepend('<div class="label">Three-day forecast</div>');
    }

    function errorHandler(err) {
        $('#forecast').empty().text('Error').css('display', 'block');
    }
}
