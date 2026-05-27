import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/secure/);
});