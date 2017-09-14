(() => {
    
    let app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');
        this.get('index.html', displayHomePage);
        // this.get('#/home', displayHomePage);

        this.get('#/login', function (ctx) {
            ctx.loadPartials(utils.setPartials('users/loginForm.hbs')).then(function () {
                this.partial('templates/common/main.hbs')
            })
        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            console.log(username)
            auth.login(username, password).then(function (userInfo) {
                console.log(userInfo)
                auth.saveSession(userInfo);
                utils.showInfo('Login successful.');
                displayHomePage(ctx);
            }).catch(utils.handleError)
        });

        this.get('#/register', function (ctx) {
            this.loadPartials(utils.setPartials('users/registerForm.hbs')).then(function () {
                this.partial('templates/common/main.hbs')
            })
        });
        
        this.post('#/register', function (ctx) {
            let {username, password, name} = ctx.params;
            alert(ctx)
            auth.register(username, password, name).then((userInfo) => {
                auth.saveSession(userInfo);
                utils.showInfo('User registration successful.');
                displayHomePage(ctx);
            }).catch(utils.handleError)
        });


        function displayHomePage(ctx) {
            if (!auth.isAuthed()) {
                ctx.loadPartials(utils.setPartials('home.hbs')).then(function () {
                    this.partial('templates/home.hbs')
                });
            } else {
                ctx.params.name = sessionStorage.getItem('name');
                ctx.params.username = sessionStorage.getItem('username');
                ctx.loadPartials(utils.setPartials('users/userHome.hbs'))
            }
        }

    });

    app.run();
})();
