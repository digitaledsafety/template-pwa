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

test('Manifest has required fields for Android Chrome installation', async ({ page }) => {
  await page.goto('/');
  const manifestUrl = await page.evaluate(() => {
    return document.querySelector('link[rel="manifest"]').href;
  });

  const response = await page.request.get(manifestUrl);
  const manifest = await response.json();

  expect(manifest).toHaveProperty('id');
  expect(manifest).toHaveProperty('description');
  expect(manifest).toHaveProperty('categories');
  expect(Array.isArray(manifest.categories)).toBe(true);
  expect(manifest).toHaveProperty('screenshots');
  expect(manifest.screenshots.length).toBeGreaterThan(0);

  // Verify icons have purpose "any maskable"
  manifest.icons.forEach(icon => {
    expect(icon).toHaveProperty('purpose');
    expect(icon.purpose).toContain('maskable');
  });

  // Verify screenshots have form_factor
  manifest.screenshots.forEach(screenshot => {
    expect(screenshot).toHaveProperty('form_factor');
    expect(['narrow', 'wide']).toContain(screenshot.form_factor);
  });
});
