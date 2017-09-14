let chirpService = (() => {

    function getAllChirps() {
        return requester.get('appdata', 'chirps', 'kinvey');
    }

    function addPost(ctx) {
        let message = ctx.params.text;
        if (message === undefined || message.length === 0 || message.length > 150) {
            utils.showInfo('The message cannot be empty or most than 150 symbols.');
            return;
        }

        let data = {
            text: message,
            author: sessionStorage.getItem('username')
        };

        requester.post('appdata', 'chirps', 'kinvey', data).then(function (chirpInfo) {
            utils.showInfo('Chirp published');
            utils.displayHome(ctx);
        })
    }

    function loadPersonalPosts(ctx) {
        chirpService.getAllChirps().then(function (chirps) {
            let loggedUser = sessionStorage.getItem('username');
            chirps = chirps.filter(ch => ch.author === loggedUser);
            ctx.chirps = chirps;
            ctx.chirpsCount = chirps.length;
            userService.getFollowers().then(function (followersInfo) {
                ctx.followersCount = followersInfo.length;
                userService.getFollowing().then(function (followingInfo) {
                    ctx.followingCount = followingInfo.length;
                    ctx.chirps = chirps;
                    ctx.author = sessionStorage.getItem('username');
                    console.log(ctx.followingCount)
                    ctx.loadPartials({
                        header: '../html/common/header.hbs',
                        footer: '../html/common/footer.hbs',
                        navbar: '../html/common/navbar.hbs',
                        chirp: '../html/common/chirp.hbs',
                        profile: '../html/user/profile.hbs'
                    }).then(function () {
                        this.partial('../html/user/profilePage.hbs');
                    })
                })

            })
        }).catch(auth.handleError)
    }

    return {
        getAllChirps,
        addPost,
        loadPersonalPosts
    }
})();
