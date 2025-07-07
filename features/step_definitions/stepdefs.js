const assert = require('assert');
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('User is on Google main page', async () => {
  await browser.url('/');
});
Given('User accept cookies', async () => {
  const acceptCookiesBtn = await $('button=Zaakceptuj wszystko');
  if (await acceptCookiesBtn.isDisplayed()) {
    console.log('Cookies popup found, accepting...');
    await acceptCookiesBtn.click();
  } else {
    console.log('No cookies popup found');
  }
});

When('User searching for {string} in searchbar', async (string) => {
  const searchBox = await $('[name="q"]');
  await searchBox.setValue('WebdriverIO');
  await browser.keys('Enter');
});

Then('Title of page should be {string}', async (string) => {
  await browser.pause(2000);
  const title = await browser.getTitle();
  console.log('Page title after search: ', title);
  expect(title).toContain('WebdriverIO');
});
