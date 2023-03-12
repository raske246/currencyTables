class LoginPage {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get menuBtn () {
        return $('#menu_button_container');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

    open (path) {
        return browser.url(`https://saucedemo.com/${path}`)
    }

}

export default new LoginPage();
