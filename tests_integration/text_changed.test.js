const { By, Builder, until } = require('selenium-webdriver');
const proxy = require('selenium-webdriver/proxy');
const firefox = require('selenium-webdriver/firefox');

test('Text is changed to greeting', async () => {
    const proxyAddress = '127.0.0.1:3100';
    const options = new firefox.Options().setPreference('network.proxy.allow_hijacking_localhost', true);

    let driver = new Builder().forBrowser('firefox')
                                .setProxy(proxy.manual({http: proxyAddress}))
                                .setFirefoxOptions(options)
                                .build();

    await driver.get('http://127.0.0.1:3000/');
    const paragraph = await driver.findElement(By.id('textToChange'));
    await driver.wait(until.elementTextIs(paragraph, 'mocked greeting', 10000));
    await driver.quit();
}, 20000);