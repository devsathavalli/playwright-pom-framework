
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test('User can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate('/');
  await loginPage.login('demo','demo');

  await expect(page).toHaveURL(/dashboard/);
});
