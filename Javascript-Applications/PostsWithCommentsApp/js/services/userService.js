let userService = (() => {

    function registerUser(ctx) {
        let {username, password, repeatPass} = ctx.params;
        if (password !== repeatPass) {
            utils.showInfo('Passwords does not match.');
            return;
        }

        utils.validateUserData(username, password);
        auth.register(username, password).then(function (userInfo) {
            auth.saveSession(userInfo);
            utils.showInfo('Registration successfull.');
            utils.displayHome(ctx);
        }).catch(auth.handleError)
    }

    function login(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        utils.validateUserData(username, password);
        auth.login(username, password)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                utils.showInfo('Login successful.');
                utils.displayHome(ctx);
            }).catch(auth.handleError);
    }


    return {
        registerUser,
        login
    }
})();
