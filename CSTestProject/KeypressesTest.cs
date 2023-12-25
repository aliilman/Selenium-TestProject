using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.VirtualAuth;
using System;
using System.Net;

namespace TestProject1
{
    public class KeyPressesTest
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


        [Test]
        public async Task KeyPresses()
        {

            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/key_presses?");

            IWebElement target = driver.FindElement(By.Id("target"));

            target.SendKeys(Keys.Backspace);

            IWebElement result = driver.FindElement(By.Id("result"));


            Assert.AreEqual("You entered: BACK_SPACE", result.Text);
        }
    }
}