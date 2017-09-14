let postService = (() => {

    function getPostById(postId) {
        return requester.get('appdata', 'posts/' + postId, 'kinvey');
    }

    function loadAllPosts(ctx) {
       getAllPosts().then(function (posts) {
           auth.getUser(ctx);
            ctx.posts = posts;
            ctx.isMyPosts = false;
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                navigation: 'templates/common/navigation.hbs',
                post: 'templates/common/post.hbs'
            }).then(function () {
                this.partial('templates/posts/postsList.hbs')
            })
        })
    }

    function getAllPosts() {
        return  requester.get('appdata', 'posts', 'kinvey');
    }

    Handlebars.registerHelper("inc", function(value, options) {
        return parseInt(value) + 1;
    });

    return {
        getPostById,
        getAllPosts,
        loadAllPosts
    }
})();
