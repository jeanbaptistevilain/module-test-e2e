const timeout = 15000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page;

    test('add to cart', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('my_login_selector');
        await page.type('my_login_selector', process.env.TEST_LOGIN);
        await page.type('my_password_selector', process.env.TEST_PASSWORD);

        // à compléter

    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
