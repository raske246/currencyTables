class LoginPage {
    
    get inputUsername () {
        return $('//*[@id="user-name"]');
    }

    get inputPassword () {
        return $('//*[@id="password"]');
    }

    get btnLogin () {
        return $('//*[@id="login-button"]');
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
