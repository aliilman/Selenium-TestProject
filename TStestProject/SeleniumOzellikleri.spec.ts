import { Builder, By, Key, until, WebDriver, WebElement, Actions ,locateWith,RelativeBy, Button } from 'selenium-webdriver';


const Chrome = require('selenium-webdriver/chrome');
import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';
import path from 'path';

describe('SeleniumOzellikleri', function () {
  // this.timeout(30000);
  let driver: WebDriver;
  let vars: any;

  // beforeEach(async function(env  :Environment ) { chrome options özellikler eklerken sorun oluştu

  //   const Options = new Chrome.Options();
  //   let driver = await env
  //     .builder()
  //     .setChromeOptions(Options.addArguments('--start-maximized'))//https://github.com/GoogleChrome/chrome-launcher/blob/main/docs/chrome-flags-for-tools.md
  //     .build();

  //   driver = await new Builder().forBrowser('chrome').build(); //Tarayıcı oluşturma
  //   vars = {};
  // });

  beforeEach(async function () { // test ön koşulları
    driver = await new Builder().forBrowser('chrome').build(); //Tarayıcı oluşturma

        //implicit
        await driver.manage().setTimeouts({ implicit: 2000 }); //hatayı döndürmeden önce sağlanan değerin süresi kadar bekleyecektir. 

    // //Explicit waits
    // let revealed = await driver.findElement(By.id("revealed")); //bulana kadar bekle (döngü mantığı)
    // await driver.findElement(By.id("reveal")).click();
    // await driver.wait(until.elementIsVisible(revealed), 2000);
    // await revealed.sendKeys("Displayed");
        
    vars = {};
  });

  afterEach(async function () { // test sonrası yapılacakalr
    await driver.quit();
  });

  it('SeleniumOzellikleri', async function () {

    await driver.get("https://www.selenium.dev/selenium/web/inputs.html"); //urlye git 
    
    let title : string = await driver.getTitle();// tarayıcı bilgileri al
    console.log("Current url: ", await driver.getCurrentUrl())
    console.log("Title: ", title)

    
    
    let button_input : WebElement= await driver.findElement(By.name('button_input')); //find element //name
    let submitButton : WebElement= await driver.findElement(By.name('submit_input')); //find element //css
    await submitButton.click(); // tıklama

    //let submitButton : WebElement= await driver.findElement(By.css('button')); //find element //css
    // let submitButton = await driver.findElement(By.className('button')); 
    // let submitButton = await driver.findElement(By.id('button')); 
    // let submitButton = await driver.findElement(By.name('button')); 
    // let submitButton = await driver.findElement(By.linkText('button')); 
    // let submitButton = await driver.findElement(By.partialLinkText('button')); 
    // let submitButton = await driver.findElement(By.tagName('button')); 
    // let submitButton = await driver.findElement(By.xpath('button')); 


    let button_input1 : RelativeBy = locateWith(By.name('button_input')).above(By.name('reset_input'));
    let button_input2 : RelativeBy= locateWith(By.name('button_input')).below(By.name('week_input'));
    // let cancelLocator : RelativeBy= locateWith(By.tagName('button')).toLeftOf(By.id('submit'));
    // let submitLocator1 : RelativeBy= locateWith(By.tagName('button')).toRightOf(By.id('cancel'));
    // let emailLocator : RelativeBy= locateWith(By.tagName('input')).near(By.id('lbl-email'));
    // let submitLocator : RelativeBy= locateWith(By.tagName('button')).below(By.id('email')).toRightOf(By.id('cancel'));

    //All matching elements 
    const plants : WebElement[] = await driver.findElements(By.tagName('input'));


    let no_type : WebElement= await driver.findElement(By.name('no_type'))
      no_type.clear();
    await no_type.sendKeys('Selenium'); // key Action
    



    let isDisplayed : boolean =  await driver.findElement(By.name("email_input")).isDisplayed(); 
    let isEnabled : boolean =  await driver.findElement(By.name("email_input")).isEnabled();
    let isSelected: boolean = await driver.findElement(By.name("email_input")).isSelected();
    let getTagName : string= await driver.findElement(By.name('email_input')).getTagName();
    let getRect = await driver.findElement(By.name('email_input')).getRect();
    let getText = await driver.findElement(By.name('email_input')).getText();



    no_type.click();
    await driver.actions()
    .keyDown(Key.SHIFT)
    .sendKeys('a')
    .perform()

    await driver.sleep(5000);
    
    await driver.get('https://www.selenium.dev/selenium/web/colorPage.html');
    let getCssValue: string = await driver.findElement(By.id('namedColor')).getCssValue('background-color');

    await driver.get('https://www.selenium.dev/selenium/web/linked_image.html');
    let text : string = await driver.findElement(By.id('justanotherLink')).getText();

    await driver.navigate().back();
    await driver.navigate().forward();
    await driver.navigate().refresh();

    
    await driver.get('https://demoqa.com/buttons');

    //Click and hold tut
    let clickable1 : WebElement= driver.findElement(By.id("rightClickBtn"));
    const actions1: Actions = driver.actions({async: true});
    await actions1.move({origin: clickable1})//mause orda gibi davnır 
    .press()
    .perform();


    //Context Click
    const clickable2 : WebElement= driver.findElement(By.id("rightClickBtn"));
    const actions2 : Actions= driver.actions({async: true});
    await actions2.contextClick(clickable2).perform();

    // //Back Click //özellik aktif değil
    // const actions3 = driver.actions({async: true});
    // await actions3.press(Button.BACK).release(Button.BACK).perform()

    // //Forward Click //özellik aktif değil
    // const actions4 = driver.actions({async: true});
    // await actions4.press(Button.FORWARD).release(Button.FORWARD).perform()

    //Double click
    const clickable : WebElement= driver.findElement(By.id("doubleClickBtn"));
    const actions5: Actions = driver.actions({async: true});
    await actions5.doubleClick(clickable).perform();


    await driver.get('https://the-internet.herokuapp.com/drag_and_drop');
    await driver.manage().setTimeouts({ implicit: 2000 });

    //Move to element
    const hoverable2: WebElement = driver.findElement(By.id("column-a"));
    const actions6 : Actions= driver.actions({async: true});
    await actions6.move({origin: hoverable2}).perform();

    //Drag and Drop on Element
    const draggable : WebElement= driver.findElement(By.id("column-a"));
    const droppable: WebElement  = await driver.findElement(By.id("column-b"));

    const actions7 :Actions = driver.actions({async: true});
    await actions7.dragAndDrop(draggable, droppable).perform();


  //  // Scroll to element // scrool 
  //   const iframe = await driver.findElement(By.css("iframe"))
  //   await driver.actions()
  //     .scroll(0, 0, 0, 0, iframe)
  //     .perform()

  //   //Scroll by given amount
  //   const footer = await driver.findElement(By.css("footer"))
  //   const deltaY = (await footer.getRect()).y
  //   await driver.actions().click
  //       .scroll(0, 0, 0, deltaY)
  //       .perform()


    await driver.get(' https://the-internet.herokuapp.com/infinite_scroll');
    // JavaScript ile sayfayı kaydırma

    for (let index = 0; index < 20; index++) 
    {
      await driver.executeScript(`window.scrollBy(0, ${500});`);
      await driver.sleep(500);
    }


    ///File Upload
    //#region 
    // const image = path.resolve('C:\\Users\\PC_4232\\Desktop\\Selenium-TestProject\\JSTestPreoject\\foto.png')
    // await driver.manage().setTimeouts({implicit: 5000});
    // await driver.get('https://the-internet.herokuapp.com/upload');
    // await driver.findElement(By.id("file-upload")).sendKeys(image);
    // await driver.findElement(By.id("file-submit")).submit();
    //#endregion



    assert.equal(1, 1)
    await driver.sleep(5000);


    await driver.close();
  });
})