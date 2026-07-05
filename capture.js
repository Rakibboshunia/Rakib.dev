const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://edu-nest-eta.vercel.app/', { waitUntil: 'networkidle2' });
  
  // Wait a bit for animations if any
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await page.screenshot({ path: 'src/assets/edunest_new.png' });
  await browser.close();
})();
