$(() => {
    Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', utils.displayHome);
        this.get('#/home', utils.displayHome);
        this.get('#/login', utils.displayHome);
        this.get('#/register', function (ctx) {
            this.loadPartials({
                header: '../html/common/header.hbs',
                footer: '../html/common/footer.hbs'
            }).then(function () {
                this.partial('../html/register/registerPage.hbs');
            });

        })

    }).run();
});