
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { users } from '../../utils/test-data';

test('User can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

 await loginPage.navigate('/');
 await loginPage.login(users.validUser.username, users.validUser.password);

  await expect(page).toHaveURL(/dashboard/);
});
