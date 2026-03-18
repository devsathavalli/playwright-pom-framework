import { BasePage } from './base.page';

export class LoginPage extends BasePage {

  username = this.page.getByLabel('Username');
  password = this.page.getByLabel('Password');
  loginBtn = this.page.getByRole('button', { name: 'Login' });

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
