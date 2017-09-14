$(() => {
    Sammy('.content', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', utils.displayHome);
        // this.get('#/home', utils.displayHome);

    }).run()
});
