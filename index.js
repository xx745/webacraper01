const playwright = require('playwright');

console.log(process.env.HELLO)

// (async () => {
//   const browser = await playwright.chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://amazon.com");
//   await page.screenshot({ path: `amazon_webpage.png`, fullPage: true });
//   await page.waitForTimeout(1000);
//   await browser.close();
// })();