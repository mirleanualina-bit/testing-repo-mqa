import test, { expect, Locator } from 'playwright/test';

test.describe('Window page', () => {
 test.beforeEach(async ({ page }) => {
 await page.goto('/');
 await page.getByText('Modal & Overlays').click();
 await page.getByText('Window').click();
 });
 
 test('Open window form - action', async ({ page }) => {
    const openwindowform = page.locator('nb-card', { hasText: 'Window form' })
    await expect(openwindowform).toBeVisible();

    const openwindowformButton = openwindowform.getByRole('button', { name: 'Open window form' });
    const modalwindow = page.locator('nb-window', { hasText: 'Window'})

    await test.step('click the Open window form button', async () => {
    await expect(openwindowformButton).toBeVisible();
    await openwindowformButton.click();
    await expect(modalwindow).toBeVisible();
    });

    await test.step('click outside the modal', async () => {
        await page.locator('body').click({ position:{x: 0, y: 0}});
        await expect(modalwindow).not.toBeVisible();
        });

    });
});
