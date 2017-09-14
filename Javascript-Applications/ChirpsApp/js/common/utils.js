let utils = (() => {

    function displayHome(ctx) {
        if (sessionStorage.getItem('username') === null) {
            ctx.loadPartials({
                header: '../html/common/header.hbs',
                footer: '../html/common/footer.hbs',
                navbar: '../html/common/navbar.hbs',
                loginPage: '../html/login/loginPage.hbs',
                userHome: '../html/user/userHome.hbs',
            }).then(function () {
                this.partial('../html/home/homePage.hbs');
            })
        } else {
            chirpService.getAllChirps().then(function (chirps) {
                chirps.forEach(ch => ch.chirpDate = utils.calcTime(ch._kmd.ect));
                chirps.sort((a,b) => new Date(b._kmd.ect.toString()) - new Date(a._kmd.ect.toString()));
                ctx.chirpsCount = chirps.length;
                userService.getFollowers().then(function (followersInfo) {
                    ctx.followersCount = followersInfo.length;
                    // console.log(JSON.parse(sessionStorage.getItem('subscriptions')));
                    let subscribers = Array.from(JSON.parse(sessionStorage.getItem('subscriptions'))).map(s => s['username']);

                    for (let subscriber of subscribers) {
                        chirps = chirps.filter(ch => ch.author !== subscriber)
                    }

                    ctx.chirps = chirps;
                    auth.getUser(ctx);
                    ctx.loadPartials({
                        header: '../html/common/header.hbs',
                        footer: '../html/common/footer.hbs',
                        navbar: '../html/common/navbar.hbs',
                        loginPage: '../html/login/loginPage.hbs',
                        userHome: '../html/user/userHome.hbs',
                        chirp: '../html/common/chirp.hbs'
                    }).then(function () {
                        this.partial('../html/home/homePage.hbs');
                    })
                })
            }).catch(auth.handleError);

        }

    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showLoading() {
        let infoBox = $('#loadingBox');
        infoBox.text('Loading...');
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function validateData(username, password) {
        if (username !== undefined && username.length > 5) {
            utils.showInfo('Invalid username. It must be at least 5 symbols long.');
            return;
        }

        if (password !== undefined && password.length > 0) {
            utils.showInfo('Invalid password. It cannot be empty.');
            return;
        }
    }

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }


    return {
        displayHome,
        showInfo,
        showLoading,
        showError,
        validateData,
        calcTime
    }
})();
