// Generated by Selenium IDE
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;
using NUnit.Framework;
using OpenQA.Selenium.DevTools.V118.WebAuthn;
using OpenQA.Selenium.VirtualAuth;

namespace TestProject1;

[TestFixture]
public class BildirimTest
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
    public void bildirim()
    {
        driver.Navigate().GoToUrl("https://the-internet.herokuapp.com/notification_message_rendered");
        driver.Manage().Window.Size = new System.Drawing.Size(1152, 924);

  

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