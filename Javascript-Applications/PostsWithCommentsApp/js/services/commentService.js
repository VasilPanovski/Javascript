let commentService = (() => {

    function loadPostComments(ctx) {
        let postId = ctx.params.id.substring(1);
        sessionStorage.setItem('postId', postId);
        let url = `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;
        requester.get('appdata', url, 'kinvey').then(function (comments) {
            coments = comments.forEach(c => c.commentDate = utils.calcTime(c._kmd.ect));
            ctx.comments = comments;
            postService.getPostById(postId).then(function (postInfo) {
                ctx.url = postInfo.url;
                ctx.imageUrl = postInfo.imageUrl;
                ctx.title = postInfo.title;
                ctx.description = postInfo.description;
                ctx.author = postInfo.author;
                ctx.postedDate = utils.calcTime(postInfo._kmd.ect);
                ctx.loadPartials({
                    header: 'templates/common/header.hbs',
                    footer: 'templates/common/footer.hbs',
                    navigation: 'templates/common/navigation.hbs',
                    comment: 'templates/common/comment.hbs',
                    commentForm: 'templates/comments/commentForm.hbs'
                }).then(function () {
                    this.partial('templates/comments/postComments.hbs')
                })
            })
        })
    }

    function addComment(ctx) {
        let commentData = {
            author: sessionStorage.getItem('username'),
            content: ctx.params.content,
            postId: sessionStorage.getItem('postId')
        };

        requester.post('appdata', 'comments', 'kinvey', commentData).then(function (comment) {
            loadPostComments(ctx)
        })
    }

    function deleteComment(ctx) {
        let commentId = ctx.params.id;
        console.log(commentId)
    }

    return {
        loadPostComments,
        addComment,
        deleteComment
    }
})();
