import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/Login.js';

test.describe('Orangehrmlive Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Login Test', async ({page}) => {

        const login = new LoginPage(page)
        await login.login('Admin', 'admin123')

        expect(login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });

    test('should return Recruitment Test', async ({page}) => {

        const login = new LoginPage(page)
        await login.login('Admin', 'admin123')

        await login.clickBySelector('span:has-text("Recruitment")');

        expect(login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    });

    test('should return Attendance page', async ({page}) => {

        const login = new LoginPage(page)
        await login.login('Admin', 'admin123')

        await login.page.locator('.orangehrm-attendance-card-action').click();

        await login.clickBySelector('li:has-text("Timesheets")');
        await login.clickBySelector('a:has-text("My Timesheets")');

        expect(login.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet')
    });
});