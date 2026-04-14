import { test as base, Page } from '@playwright/test';
import { SAUCEDEMO_URL, SAUCEDEMO_USERS, SAUCEDEMO_PASSWORD } from '../config/environment.js';

export type AuthFixtures = {
  /** Page already logged in as standard_user on SauceDemo */
  authenticatedPage: Page;
  /** Log in with any SauceDemo username + password combination */
  loginAsUser: (username: string, password: string) => Promise<void>;
};

/**
 * Fixture: authenticatedPage
 * Navigates to SauceDemo and logs in as standard_user before the test starts.
 *
 * Usage:
 *   test('my test', async ({ authenticatedPage }) => {
 *     await authenticatedPage.goto('/inventory.html');
 *   });
 *
 * @author abhishek.dwivedi
 */
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await page.goto(SAUCEDEMO_URL);
    await page.fill('[data-test="username"]', SAUCEDEMO_USERS.STANDARD);
    await page.fill('[data-test="password"]', SAUCEDEMO_PASSWORD);
    await page.click('[data-test="login-button"]');
    await page.waitForURL('**/inventory.html');
    await use(page);
  },

  loginAsUser: async ({ page }, use) => {
    const login = async (username: string, password: string) => {
      await page.goto(SAUCEDEMO_URL);
      await page.fill('[data-test="username"]', username);
      await page.fill('[data-test="password"]', password);
      await page.click('[data-test="login-button"]');
      await page.waitForLoadState('networkidle');
    };
    await use(login);
  }
});

export { expect } from '@playwright/test';
