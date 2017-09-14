function attachEvents() {
    const appKey = 'kid_HyN1z1AUW';
    const kinveyCollection = 'posts';
    const baseUrl = 'https://baas.kinvey.com/appdata/' + appKey;
    const username = 'Peter';
    const password = 'p';

    const headers = {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Content-Type': 'application/json'
    };

    $('#btnLoadPosts').click(function () {
        $.ajax({
            type: 'GET',
            url: baseUrl + '/posts',
            headers: headers,
            success: displayPosts,
            error: displayError
        });
    });
    
    $('#btnViewPost').click(function () {
        let postId = $('#posts').val();
        $.ajax({
            type: 'GET',
            url: baseUrl + `/comments?query={"post_id":"${postId}"}`,
            headers: headers,
            success: viewPostWithComments,
            error: displayError
        })
    });
    
    function viewPostWithComments() {
        let selectedPostId = $('#posts').val();
        if (!selectedPostId) return;
        let requestPosts = $.ajax({
            url: baseUrl + "/posts/" + selectedPostId,
            headers: headers });
        let requestComments = $.ajax({ url: baseUrl + `/comments?query={"post_id":"${selectedPostId}"}`,
            headers: headers });
        Promise.all([requestPosts, requestComments])
            .then(displayPostWithComments)
            .catch(displayError);

    }

    function displayPostWithComments([post, comments]) {
        let postComments = $("#post-comments");
        postComments.empty();
        $("#post-title").text(post.title);
        $("#post-body").text(post.body);

        for (let postComment of comments) {
            $('<li>').text(postComment.text).appendTo(postComments);
        }
    }

    function displayPosts(posts) {
        for (let post of posts) {
            let option = $('<option>').val(`${post._id}`).text(post.title);
            $('#posts').append(option);
        }
    }

    function displayError(error) {
        let errorDiv = $("<div>").text(`Error: ${error.status} (${error.statusText})`);
        $(document.body).prepend(errorDiv);
        setTimeout(function() {
            $(errorDiv).fadeOut(function() {
                $(errorDiv).remove();
            });
        }, 3000);
    }
}
