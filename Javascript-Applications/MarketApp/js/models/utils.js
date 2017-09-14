let utils = (() => {
    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

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

    function getUser(context) {
        let loggedUser = sessionStorage.getItem('username');
        context.isAnonymous = loggedUser === null;
        context.username = loggedUser;
    }

    function displayHomePage(ctx) {
        utils.getUser(ctx);
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            home: 'templates/home/home.hbs'
        }).then(function () {
            this.partial('templates/home/homePage.hbs');
        })
    }

    return {
        handleError,
        showInfo,
        showError,
        getUser,
        displayHomePage
    }
})();
