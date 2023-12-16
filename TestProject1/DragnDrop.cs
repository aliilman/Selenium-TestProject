using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.VirtualAuth;
using System;
using System.Net;

namespace TestProject1
{
    public class HorizontalSlider
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
        public async Task HorizontalSliderTest()
        {




            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/horizontal_slider");


            IWebElement horizontalSlider = driver.FindElement(By.CssSelector("input"));
            //horizontalSlider.Click();

            IWebElement horizontalSlidervalue;

            for (int i = 0; i < 10; i++)
            {
                 horizontalSlidervalue = driver.FindElement(By.Id("range"));
             
                if (horizontalSlidervalue.Text == "4.5")
                {
                    Assert.Pass();
                }
                horizontalSlider.SendKeys(Keys.Right);
            }
            Assert.Fail();


            
        }
    }
}