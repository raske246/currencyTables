import LoginPage from '../pageObjects/login.page.js'
import SecurePage from '../pageObjects/secure.page.js'

describe('Login to the website', () => {
    it('should not open other pages without loging in', async () => {
        await LoginPage.open('')
        await LoginPage.open('inventory.html')
        await expect(SecurePage.errorMessage).toHaveText(
            "Epic sadface: You can only access '/inventory.html' when you are logged in.")
    })

    it('should not login with invalid credentials', async () => {
        await LoginPage.open('')
        await LoginPage.login('standard_user', 'secret_sace')
        await expect(SecurePage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service')
    })

    it('should login with valid credentials', async () => {
        await LoginPage.open('')
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.inventoryPage).toHaveUrl(
            'https://www.saucedemo.com/inventory.html')
    })

    it('should not login without credentials', async () => {
        await LoginPage.open('')
        await LoginPage.login('', '')
        await expect(SecurePage.errorMessage).toHaveText(
            'Epic sadface: Username is required')
    })
})