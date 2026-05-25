
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

  test('filter - locator', async ({ page }) => {
    const formsTextArea = page.locator('nb-card').filter({ has: page.locator('textarea') });
    await expect(formsTextArea).toHaveCount(1);
    await expect(formsTextArea).toBeVisible();

    const headerFormWithoutLabels = formsTextArea.locator('nb-card-header');
    await expect(headerFormWithoutLabels).toHaveText('Form without labels');
  });

  test('counting - locator', async ({ page }) => {
    const inputEmailCSS1 = page.locator('input[type=\"email\"]');
    await expect(inputEmailCSS1).toHaveCount(4);

    await inputEmailCSS1.first().fill('first@email.com');
    await expect(inputEmailCSS1.first()).toHaveValue('first@email.com');
    
    await inputEmailCSS1.last().fill('last@email.com');
    await expect(inputEmailCSS1.last()).toHaveValue('last@email.com');
  });
});
