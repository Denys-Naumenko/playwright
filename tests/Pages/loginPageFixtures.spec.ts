import { test } from '../../src/fixtures/baseFixtures';

  test('Check login', async ({login}) => {
    await login.visitLoginPage();
    await login.typeUserName();
    await login.typePassword();
    await login.clickLoginButton();
    await login.validatelogin();
});