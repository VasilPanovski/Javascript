let userService = (() => {

    function registerUser(context) {
        let username = context.params.username;
        let password = context.params.password;
        let repeatPass = context.params.repeatPass;
        let subscriptions = [];
        auth.getUser(context);

        utils.validateData(username, password);
        if (password !== repeatPass) {
            utils.showInfo('The passwords does no match.');
            return;
        }

        utils.showLoading();
        auth.register(username, password, subscriptions)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                utils.showInfo('User registration successful.');
                userService.getFollowing().then(function (following) {
                    sessionStorage.setItem("subscriptions", JSON.stringify(following));
                    utils.displayHome(context);
                });
            }).catch(auth.handleError)
    }

    function loginUser(context) {
        let username = context.params.username;
        let password = context.params.password;

        utils.validateData(username, password);
        utils.showLoading();

        auth.login(username, password)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                utils.showInfo('Login successful.');
                userService.getFollowing().then(function (following) {
                    sessionStorage.setItem("subscriptions", JSON.stringify(following));
                    utils.displayHome(context);
                });
            }).catch(auth.handleError);
    }
    
    function getFollowing() {
        return requester.get('user', `?query={"username":"${sessionStorage.getItem('username')}"}`);
    }

    function getFollowers() {
        return requester.get('user', `?query={"subscriptions":"${sessionStorage.getItem('username')}"}`);
    }

    function loadAllUsers(ctx) {
        requester.get('user', '', 'kinvey').then(function (users) {
            ctx.users = users;
            for (let user of users) {
                if (user !== sessionStorage.getItem('username')) {
                    requester.get('user', `?query={"subscriptions":"${user.username}"}`).then(function (followers) {
                        ctx.followersCount = followers.length;
                        ctx.loadPartials({
                            header: '../html/common/header.hbs',
                            footer: '../html/common/footer.hbs',
                            navbar: '../html/common/navbar.hbs',
                            user: '../html/common/user.hbs',
                        }).then(function () {
                            this.partial('../html/user/discover.hbs');
                        })
                    }).catch(auth.handleError);
                }
            }

        }).then(auth.handleError)
    }

    function followUser(ctx) {
        requester.update('user', sessionStorage.getItem('id')).then(function () {
            utils.showInfo('Following success.')
            ctx.redirect('#/home');
        })
    }

    return {
        registerUser,
        loginUser,
        getFollowing,
        getFollowers,
        loadAllUsers,
        followUser
    }
})();
