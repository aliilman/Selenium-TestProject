using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.VirtualAuth;
using System;
using System.Net;

namespace TestProject1
{
    public class StatusCodeTest
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
        [TestCase("200",HttpStatusCode.OK)]
        [TestCase("301",HttpStatusCode.MovedPermanently)]
        [TestCase("404",HttpStatusCode.NotFound)]
        [TestCase("500",HttpStatusCode.InternalServerError)]

        public async Task StatusCodesTest(string code,HttpStatusCode beklenenhttpcode)
        {

            driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/status_codes");

            IWebElement statusCode = driver.FindElement(By.LinkText(code));
            statusCode.Click();

            HttpResponseMessage response;

            using (HttpClient client = new HttpClient())
            {

                // Sayfaya istek gönder
                response = await client.GetAsync(driver.Url);

                // HTTP status kodunu yazdýr
                Console.WriteLine($"HTTP Status Code: {response.StatusCode}");

            }

            Assert.AreEqual(response.StatusCode, beklenenhttpcode);
        }
    }
}