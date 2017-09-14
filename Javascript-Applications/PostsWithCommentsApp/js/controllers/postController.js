$(() => {
    Sammy('.content', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/catalog', utils.displayHome)

    }).run()
});
