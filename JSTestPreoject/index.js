const { Builder, By, Key, until, WebElement } = require("selenium-webdriver");
const { Actions } = require("selenium-webdriver/lib/input");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get(
            "https://the-internet.herokuapp.com/notification_message_rendered"
        );

        // Link metnini içeren bir bağlantıyı bulma
        const tiklamaYeri = await driver.findElement(By.linkText("Click here"));
        await tiklamaYeri.click();

        const bildirim = await driver.findElement(By.id("flash"));

        if (bildirim) {
            console.log("Test başarılı!");
        } else {
            console.error("Test başarısız!");
        }
    } catch (error) {
        console.error("Hata:", error);
    } finally {
        //await driver.quit();
    }

    try {
        await driver.get('https://the-internet.herokuapp.com/horizontal_slider');

        
        const horizontalSlider = await driver.findElement(By.css('input[type="range"]'));
        
        
        for (let i = 0; i < 10; i++) {
            
            const currentValue = await driver.findElement(By.id('range')).getText();
            console.log('Current Value:', currentValue);

            // Eğer istenen değere ulaşıldıysa testi geç
            if (currentValue === '4.5') {
                console.log('Test başarılı!');
                assert.ok(true);
                break;
            }

            
            await horizontalSlider.sendKeys(Key.ARROW_RIGHT);

            
            await driver.sleep(500);
        }
    } catch (error) {
        console.error('Hata:', error);
        assert.ok(false, error.message); // Testi hemen başarısız yap
    } finally {
        console.log("Test başarılı!");
        await driver.quit();
    }


}

example();
