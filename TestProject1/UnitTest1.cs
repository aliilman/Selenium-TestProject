using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.VirtualAuth;

namespace TestProject1
{
    public class Tests
    {
        private IWebDriver driver;
        public IDictionary<string, object> vars { get; private set; }
        private IJavaScriptExecutor js;
        [SetUp]
        public void SetUp()
        {
            driver = new ChromeDriver();
            js = (IJavaScriptExecutor)driver;
            vars = new Dictionary<string, object>();
        }
        [TearDown]
        protected void TearDown()
        {
            driver.Quit();
        }

        //[Test]
        //public void KimlikDoðruamaTesti()
        //{

        //    var options = new ChromeOptions();

        //    options.AddArgument("--start-maximized");
        //    options.AddArgument("--remote-allow-origins=*");


        //    // Tarayýcý sürücüsünü baþlatma
        //    IWebDriver driver = new ChromeDriver(options);


        //    // Web sayfasýný açma
        //    driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/infinite_scroll");

        //    new Actions(driver)
        //           .ScrollByAmount()
        //           .Perform();


        //    Assert.Pass();
        //}

        [Test]
        public void BildirimTesti()
        {

            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/notification_message_rendered");


            IWebElement tiklamayeri = driver.FindElement(By.LinkText("Click here"));

            tiklamayeri.Click();

            IWebElement bildirm = driver.FindElement(By.Id("flash"));

            if (bildirm != null)
            {
                Assert.Pass();
            }

            Assert.Fail();
        }

    }
}