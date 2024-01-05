import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/login.js';

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
test.describe('Login', () => {
    test('Login Test', async ({page}) => {

        const Login = new LoginPage(page)
        await Login.login('Admin', 'admin123')
        await Login.page.waitForTimeout(3000);

        expect(Login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });
});

test.describe('Recruitment', () => {
    test('should return Recruitment Test', async ({page}) => {

        const Login = new LoginPage(page)
        await Login.login('Admin', 'admin123')
        await Login.page.waitForTimeout(3000);

        await Login.page.click('span:has-text("Recruitment")');
        await Login.page.waitForTimeout(2000);

        expect(Login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    });
});

test.describe('Dashboard', () => {
    test('should return Attendance page', async ({page}) => {

        const Login = new LoginPage(page)
        await Login.gotoLoginPage()
        await Login.login('Admin', 'admin123')
        await Login.page.waitForTimeout(2000);

        await Login.page.locator('.orangehrm-attendance-card-action').click();
        await Login.page.waitForTimeout(2000);

        await Login.page.click('li:has-text("Timesheets")');
        await Login.page.waitForTimeout(1000);
        await Login.page.click('a:has-text("My Timesheets")');
        await Login.page.waitForTimeout(1000);

        expect(Login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet')
    });
});