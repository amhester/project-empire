var Empire = Empire || {};

Empire.Views = Empire.Views || {};

Empire.Views.Login = (function () {
    return function init() {
        $('#SignInButton').on('click', function () {
            var username = $('UsernameField').val();
            var password = $('PasswordField').val();

            AuthService.signIn(username, password);
        });
    }
})();