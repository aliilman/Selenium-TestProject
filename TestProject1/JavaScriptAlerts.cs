using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.VirtualAuth;
using System;
using System.Net;


namespace TestProject1
{
    public class JavaScriptAlerts
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
        public async Task JavaScriptAlertsTest()
        {

            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/javascript_alerts");


            driver.FindElement(By.CssSelector("li:nth-child(1) > button")).Click();
            Thread.Sleep(10);
            Assert.That(driver.SwitchTo().Alert().Text, Is.EqualTo("I am a JS Alert"));

        }
        [Test]
        public async Task JavaScriptConfirmTest()
        {

            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/javascript_alerts");


            driver.FindElement(By.CssSelector("li:nth-child(2) > button")).Click();
            Thread.Sleep(10);
            Assert.That(driver.SwitchTo().Alert().Text, Is.EqualTo("I am a JS Confirm"));
        }
        [Test]
        public async Task JavaScriptPromptTest()
        {

            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/javascript_alerts");


           IWebElement promptAlert= driver.FindElement(By.CssSelector("li:nth-child(3) > button"));
            promptAlert.Click();

            Thread.Sleep(1000);
            IAlert prompt= driver.SwitchTo().Alert();
            prompt.SendKeys("Ali");
            prompt.Accept();


            Assert.AreEqual(driver.FindElement(By.Id("result")).Text, "You entered: Ali");
        }
    }
}