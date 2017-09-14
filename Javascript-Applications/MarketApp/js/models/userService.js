let userService = (() => {

    function registerUser(ctx) {
        let {username, password, name} = ctx.params;
        auth.register(username, password, name).then(function (userInfo) {
            ctx.username = userInfo.username;
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                home: 'templates/home/home.hbs'
            }).then(function () {
                this.partial('templates/home/homePage.hbs');
            }).then(function () {
                auth.saveSession(userInfo);
                utils.showInfo('User registration successful.');
                ctx.redirect('#/home');
            })

        }).catch(utils.handleError);
    }

    function loginUser(ctx) {
        utils.getUser(ctx);
        let {username, password} = ctx.params;
        auth.login(username, password).then(function (userInfo) {
            auth.saveSession(userInfo);
            utils.showInfo('Login successful.');
            utils.displayHomePage(ctx);
        })
    }

    function addProductToUserCart(productId) {
        productService.getProduct(productId).then(function (product) {
            requester.get('user', sessionStorage.getItem('id')).then(function (userInfo) {
                let cart = userInfo['cart'] === undefined ? {} : userInfo['cart'];
                if (cart.hasOwnProperty(productId)) {
                    cart[productId] = {
                        quantity: Number(cart[productId]['quantity']) + 1,
                        product: product
                    }
                } else {
                    cart[productId] = {
                        quantity: 1,
                        product: product
                    }
                }
                userInfo.cart = cart;
                requester.update('user', sessionStorage.getItem('id'), userInfo).then(function (userInfo) {
                    utils.showInfo('Product has been purchased')
                });
            });
        });
    }

    function loadCartProducts(ctx) {
        utils.getUser(ctx);
        let userId = sessionStorage.getItem('id');
        requester.get('user', userId).then(function (user) {
            let cart = user.cart;
            let products = [];
            let productIds = Object.keys(cart);
            for (let productId of productIds) {
                let product = {
                    _id: productId,
                    name: cart[productId]['product']['name'],
                    description: cart[productId]['product']['description'],
                    quantity: cart[productId]['quantity'],
                    totalPrice: Number(cart[productId]['quantity']) * Number(cart[productId]['product']['price'])
                };
                products.push(product);
            }

            ctx.products = products;
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                product: 'templates/card/product.hbs'
            }).then(function () {
                this.partial('templates/card/cardPage.hbs').then(function () {
                    let button = $('button');
                    button.click(function () {
                        let productId = $(this).attr('data-id');
                        let quantity = Number(cart[productId]['quantity']) - 1;
                        if (quantity === 0) {
                            delete cart[productId];
                            $(this).parent().parent().remove();
                        } else {
                            cart[productId]['quantity'] = quantity;
                        }

                        user['cart'] = cart;

                        requester.update('user', userId, user).then(function () {
                            utils.showInfo('Product has been discard')
                        });
                    })
                })
            })
        }).catch(utils.handleError);
    }

    return {
        registerUser,
        loginUser,
        addProductToUserCart,
        loadCartProducts
    }

})();
