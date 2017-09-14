$(() => {
    Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.post('#/register', userService.registerUser);
        this.post('#/login', userService.loginUser);
        this.get('#/discover', userService.loadAllUsers);

        this.get('#/follow', userService.followUser);

        this.get('#/logout', function (context) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    utils.showInfo('Logout successful.');

                    context.redirect('#/home');
                }).catch(auth.handleError);
        });
    }).run();
});