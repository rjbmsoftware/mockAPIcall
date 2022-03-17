const { By, Builder, until } = require('selenium-webdriver');

test('Text is changed to greeting', async () => {
    let driver = new Builder().forBrowser('firefox').build();
    await driver.get('http://127.0.0.1:3000/');
    const paragraph = await driver.findElement(By.id('textToChange'));
    await driver.wait(until.elementTextIs(paragraph, 'Hello World!', 10000));
    await driver.quit();
}, 20000);