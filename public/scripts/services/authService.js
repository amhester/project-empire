var AuthService = {};

AuthService.signIn = function (username, password) {
    $.ajax({
        url: '/authenticate',
        method: 'POST',
        data: { username: username, password: password },
        success: function (data) {
            ///TODO: get jwt and store it in localstorage
            location.href = '/home';
        },
        error: function (xhr) {

        }
    });
};