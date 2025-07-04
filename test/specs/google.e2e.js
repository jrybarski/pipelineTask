describe('Google Search with cookies popup', () => {
  it('should accept cookies and search for WebdriverIO', async () => {
    await browser.url('/');

    const acceptCookiesBtn = await $('button=Zaakceptuj wszystko');
    if (await acceptCookiesBtn.isDisplayed()) {
      console.log('Cookies popup found, accepting...');
      await acceptCookiesBtn.click();
    } else {
      console.log('No cookies popup found');
    }

    const searchBox = await $('[name="q"]');
    await searchBox.setValue('WebdriverIO');
    await browser.keys('Enter');

    await browser.pause(2000);

    const title = await browser.getTitle();
    console.log('Page title after search: ', title);

    expect(title).toContain('WebdriverIO');
  });
});
