$(() => {
    Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.post('#/addPost', chirpService.addPost);
        this.get('#/profile', chirpService.loadPersonalPosts);

    }).run();
});
