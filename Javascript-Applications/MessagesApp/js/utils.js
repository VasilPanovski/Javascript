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

    function setPartials(url) {
        return {
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            page: 'templates/' + url
        }
    }

    return {
        handleError,
        showInfo,
        showError,
        setPartials
    }
})();
