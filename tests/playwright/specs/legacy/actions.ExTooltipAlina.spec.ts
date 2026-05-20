import test, { expect, Locator } from 'playwright/test';

test.describe('Window page', () => {
 test.beforeEach(async ({ page }) => {
 await page.goto('http://localhost:4200/');
 await page.getByText('Modal & Overlays').click();
 await page.getByText('Tooltip').click();
 });
 
 test('Open tooltip form - action', async ({ page }) => {
    const opentooltipform = page.locator('nb-card', { hasText: 'Tooltip Placements' })
    await expect(opentooltipform).toBeVisible();

    const opentooltipwithiconform = page.locator('nb-card', { hasText: 'Tooltip with icon' })
    await expect(opentooltipwithiconform).toBeVisible();

    const opencoloredtooltipsform = page.locator('nb-card', { hasText: 'Colored tooltips' })
    await expect(opencoloredtooltipsform).toBeVisible();

    await test.step('hover tooltip placements form buttons', async () => {
        const buttonTOP = opentooltipform.getByRole('button', { name: 'TOP' });
        const buttonRIGHT = opentooltipform.getByRole('button', { name: 'RIGHT' });
        const buttonBottom = opentooltipform.getByRole('button', { name: 'BOTTOM' });
        const buttonLEFT = opentooltipform.getByRole('button', { name: 'LEFT' });

        await buttonTOP.hover();
        await expect (page.getByText('This is a tooltip')).toBeVisible();

        await buttonRIGHT.hover();
        await expect (page.getByText('This is a tooltip')).toBeVisible();

        await buttonBottom.hover();
        await expect (page.getByText('This is a tooltip')).toBeVisible();

        await buttonLEFT.hover();
        await expect (page.getByText('This is a tooltip')).toBeVisible();

        });
    

    });
});