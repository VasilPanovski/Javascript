$(() => {
    Sammy('.content', function () {
        this.use('Handlebars', 'hbs');

        this.post('#/register', userService.registerUser);

        this.post('#/login', userService.login);

        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    utils.showInfo('Logout successful.');
                    utils.displayHome(ctx)
                }).catch(auth.handleError);
        });

    }).run()
});
