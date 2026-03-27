const { test, expect } = require('@playwright/test');

test('PWA has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Hello World PWA/);
});

test('Service Worker is registered', async ({ page }) => {
  await page.goto('/');
  const swRegistration = await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    return !!registration;
  });
  expect(swRegistration).toBe(true);
});

test('Manifest is linked', async ({ page }) => {
  await page.goto('/');
  const manifestLink = await page.$('link[rel="manifest"]');
  expect(manifestLink).not.toBeNull();
});
