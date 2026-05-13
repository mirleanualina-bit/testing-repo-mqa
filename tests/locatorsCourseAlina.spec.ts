import test, { expect } from 'playwright/test';


test.describe('Form Layouts page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });

  test('getByLabelAndText - locator', async ({ page }) => {
    const blockFormComponent = page.locator('nb-card', { hasText: 'Block Form' });
    await expect(blockFormComponent).toBeVisible();

    const firstNameInputByLabel = blockFormComponent.getByLabel('First Name');
    await firstNameInputByLabel.fill('Ada');
    await expect(firstNameInputByLabel).toHaveValue('Ada');

    const lastNameInputByLabel = blockFormComponent.getByLabel('Last Name');
    await lastNameInputByLabel.fill('Lovelace');
    await expect(lastNameInputByLabel).toHaveValue('Lovelace');

    const webSiteInputByLabel = blockFormComponent.getByLabel('Website');
    await webSiteInputByLabel.fill('https://ada.dev');
    await expect(webSiteInputByLabel).toHaveValue('https://ada.dev'); 
  });
});
