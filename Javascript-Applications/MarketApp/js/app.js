$(() => {
    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        this.get('market.html', utils.displayHomePage);
        this.get('#/home', utils.displayHomePage);

        this.get('#/register', function (ctx) {
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                registerForm: 'templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('templates/register/registerPage.hbs')
            })
        });
        this.post('#/register', userService.registerUser);

        this.get('#/login', function (ctx) {
            utils.getUser(ctx);
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                loginForm: 'templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('templates/login/loginPage.hbs')
            })
        });
        this.post('#/login', userService.loginUser);

        this.get('#/shop', function (ctx) {
            utils.getUser(ctx);
            productService.getAllProducts().then(function (products) {
                products.forEach(p => p.price = Number(p.price).toFixed(2));
                ctx.products = products;
                ctx.loadPartials({
                    header: 'templates/common/header.hbs',
                    footer: 'templates/common/footer.hbs',
                    product: 'templates/products/product.hbs'
                }).then(function () {
                    this.partial('templates/products/shopPage.hbs').then(function () {
                        let button = $('button');
                        button.click(function () {
                            let productId = $(this).attr('data-id');
                            userService.addProductToUserCart(productId);
                        })
                    })
                })
            }).catch(utils.handleError);
        });

        this.get('#/cart', userService.loadCartProducts);

        this.get('#/logout', function (ctx) {
            auth.logout().then(function () {
                utils.showInfo('Logout successful.');
                sessionStorage.clear();
                utils.displayHomePage(ctx);
            }).catch(utils.handleError)
        });


    });

    app.run()
});
