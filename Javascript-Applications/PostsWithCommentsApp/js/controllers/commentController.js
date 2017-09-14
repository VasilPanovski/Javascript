$(() => {
    Sammy('.content', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/comments/:id', commentService.loadPostComments);

        this.post('#/addComment', commentService.addComment);

        this.get('#/deleteComment', commentService.deleteComment)

    }).run()
});
