function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_HyUk5myvZ/biggestCatches';
    const base64Auth = 'Basic ' + btoa('guest:guest');
    const headers = {
        'Authorization': base64Auth,
        'Content-Type': 'application/json'
    };

    let asideHtml =
        '<button class="load">Load</button>' +
        '<fieldset id="addForm">' +
            '<legend>Add Catch</legend>' +
            '<label>Angler</label>' +
            '<input type="text" class="angler"/>' +
            '<label>Weight</label>' +
            '<input type="number" class="weight"/>' +
            '<label>Species</label>' +
           '<input type="text" class="species"/>' +
           '<label>Location</label>' +
           '<input type="text" class="location"/>' +
           '<label>Bait</label>' +
           '<input type="text" class="bait"/>' +
           '<label>Capture Time</label>' +
        '<input type="number" class="captureTime"/>' +
        '<button class="add">Add</button>' +
        '</fieldset>';

    $('#aside').html(asideHtml);

    $('.load').click(loadingCatchesRequest);

    function loadingCatchesRequest() {
        $.ajax({
            type: 'GET',
            url: baseUrl,
            headers: headers,
            success: loadCatches,
            error:handleError
        })
    }

    function loadCatches(data) {
        clearInputs();
        let main = $('#main');
        main.empty();
        main.append($('<legend>Catches</legend>'));
        let catchesDiv = $('<div id="catches"></div>');
        for (let el of data) {
             catchesDiv.append($('<div class="catch"></div>').attr('data-id', `${el._id}`)
                     .append($('<label>Angler</label>'))
                     .append($(`<input type="text" class="angler" value="${el['angler']}"/>`))
                     .append($('<label>Weight</label>'))
                     .append($(`<input type="number" class="weight" value="${+el['weight']}"/>`))
                     .append($('<label>Species</label>'))
                     .append($(`<input type="text" class="species" value="${el['species']}"/>`))
                     .append($('<label>Location</label>'))
                     .append($(`<input type="text" class="location" value="${el['location']}"/>`))
                     .append($('<label>Bait</label>'))
                     .append($(`<input type="text" class="bait" value="${el['bait']}"/>`))
                     .append($('<label>Capture Time</label>'))
                     .append($(`<input type="number" class="captureTime" value="${+el['captureTime']}"/>`))
                     .append($(`<button class="delete">Delete</button>`).click(deleteCatch))
                     .append($(`<button class="update">Update</button>`).click(updateCatch)));
        }

        main.append(catchesDiv)
    }

    $('.add').click(addCatch);

    function addCatch() {
        let kinveyObj = {
            angler: $('.angler').val(),
            weight: Number($('.weight').val()),
            species: $('.species').val(),
            location: $('.location').val(),
            bait: $('.bait').val(),
            captureTime: Number($('.captureTime').val())
        };

        $.ajax({
            type: 'POST',
            url: baseUrl,
            data: JSON.stringify(kinveyObj),
            headers: headers,
            success: loadingCatchesRequest,
            error: handleError
        });
    }

    function updateCatch() {
        let catchId = $(this).parent().attr('data-id');
        let kinveyObj = {
            angler: $(this).parent().find('.angler').val(),
            weight:  Number($(this).parent().find('.weight').val()),
            species:  $(this).parent().find('.species').val(),
            location:  $(this).parent().find('.location').val(),
            bait:  $(this).parent().find('.bait').val(),
            captureTime:  Number($(this).parent().find('.captureTime').val())
        };

        $.ajax({
            type: 'PUT',
            url: baseUrl + `/${catchId}`,
            headers: headers,
            data: JSON.stringify(kinveyObj),
            success: loadingCatchesRequest,
            error: handleError()
        })
    }

    function deleteCatch() {
        let catchId = $(this).parent().attr('data-id');

        $.ajax({
            type: 'DELETE',
            url: baseUrl + `/${catchId}`,
            headers: headers,
            success: loadingCatchesRequest,
            error: handleError
        })
    }

    function handleError(error) {

    }

    function clearInputs() {
        $('.angler').val('');
        $('.weight').val('');
        $('.species').val('');
        $('.location').val('');
        $('.bait').val('');
        $('.captureTime').val('');
    }
}
