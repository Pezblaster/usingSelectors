// const KeyPressesPage = require('../pageobjects/key_press.page');
import KeyPressesPage from '../pageobjects/key_press.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

describe('My Key Press application', () => {
    it('should display what is entered into the input', async () => {
        await KeyPressesPage.open();

        await KeyPressesPage.pressAkey('C');

        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining(
            'You entered: D');
    });
});
