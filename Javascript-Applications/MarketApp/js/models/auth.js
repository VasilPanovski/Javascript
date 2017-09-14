let auth = (() => {
    function isAuthed() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(data) {
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('id', data._id);
        sessionStorage.setItem('authtoken', data._kmd.authtoken);
    }

    function login(username, password) {
        return requester.post('user', 'login', {username, password}, 'basic');
    }

    async function register(username, password, name) {
        return requester.post('user', '', {username, password, name}, 'basic');
    }

    async function logout() {
        return requester.post('user', '_logout', {authtoken: sessionStorage.getItem('authtoken')}, 'kinvey');
    }

    return {
        saveSession, login, register, logout, isAuthed
    }
})();