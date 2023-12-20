using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.VirtualAuth;
using System;
using System.Net;

namespace TestProject1
{
    public class DragnDrop
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
        public async Task DragnDropTest()
        {

            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/drag_and_drop");


            IWebElement Abox = driver.FindElement(By.Id("column-a"));

            IWebElement Bbox = driver.FindElement(By.Id("column-b"));


            new Actions(driver)
                .DragAndDrop(Abox, Bbox)
                .Perform();

            IWebElement AHeader = driver.FindElement(By.CssSelector("#column-a > header"));
            IWebElement Bheader = driver.FindElement(By.CssSelector("#column-b > header"));

            Assert.AreEqual(AHeader.Text, "B");
        }
    }
}