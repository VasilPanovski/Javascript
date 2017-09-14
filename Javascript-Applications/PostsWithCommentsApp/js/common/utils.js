let utils = (() => {

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function validateUserData(username, password) {
        if (!/^[a-zA-Z]{3,}$/g.test(username)) {
            utils.showError('Invalid username. It must be at least 3 symbols long and contains only english alphabetical words.');
            return false;
        }

        if (!/^[a-zA-Z0-9]{6,}$/g.test(password)) {
            utils.showError('Invalid password. It must be at least 6 symbols long and contains only english alphabetical words and digits.');
            return false;
        }
    }

    function displayHome(ctx) {
        let isLoggedUser = sessionStorage.getItem('username') !== null;
        if (!isLoggedUser) {
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                navigation: 'templates/common/navigation.hbs',
                loginForm: 'templates/home/loginForm.hbs',
                registerForm: 'templates/home/registerForm.hbs'
            }).then(function () {
                this.partial('templates/home/home.hbs');
            });
        } else {
            postService.loadAllPosts(ctx)
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
        showInfo,
        showError,
        displayHome,
        validateUserData,
        calcTime
    }
})();
