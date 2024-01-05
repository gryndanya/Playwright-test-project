import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/login.js';

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
test.describe('Login', () => {
    test('Login Test', async ({page}) => {

        const login = new LoginPage(page)
        await login.login('Admin', 'admin123')

        expect(login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });
});

test.describe('Recruitment', () => {
    test('should return Recruitment Test', async ({page}) => {

        const login = new LoginPage(page)
        await login.login('Admin', 'admin123')

        await login.page.click('span:has-text("Recruitment")');

        expect(login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    });
});

test.describe('Dashboard', () => {
    test('should return Attendance page', async ({page}) => {

        const login = new LoginPage(page)
        await login.gotoLoginPage()
        await login.login('Admin', 'admin123')

        await login.page.locator('.orangehrm-attendance-card-action').click();

        await login.page.click('li:has-text("Timesheets")');
        await login.page.click('a:has-text("My Timesheets")');

        expect(login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet')
    });
});