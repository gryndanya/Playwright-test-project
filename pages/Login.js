exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_field = page.getByPlaceholder('Username')
        this.password_field = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async login(username, password){

        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click()
    }

    async clickBySelector(selector){
        await this.page.click(selector)
    }

    async clickByLocator(selector){
        await this.page.locator(selector).click()
    }
}