import test, { expect, Locator } from 'playwright/test';

test.describe('Form Layouts page', () => {
 test.beforeEach(async ({ page }) => {
 await page.goto('/');
 await page.getByText('Forms').click();
 await page.getByText('Form Layouts').click();
 });

 test('Ex 1 :pressSequentially - action', async ({ page }) => {
 const basicFormblock = page.locator('nb-card', { hasText: 'Basic form' })
 const emailInputByLabel = basicFormblock.getByLabel('Email address');
 
 await test.step('check emailInput visible', async () => {
 await expect(emailInputByLabel).toBeVisible();
 });
 
 await test.step('check emailInput enabled', async () => {
 await expect(emailInputByLabel).toBeEnabled();
 });

    await test.step('check emailInput editable', async () => {
    await expect(emailInputByLabel).toBeEditable();
 });

 await test.step('check pressSequentially', async () => {
 await emailInputByLabel.pressSequentially('john@test.com', { delay: 50 });
 await expect(emailInputByLabel).toHaveValue('john@test.com');
 });

 await test.step('press TAB to exit the entryfield', async () => {
    await emailInputByLabel.press('Tab');
 });

 await test.step('check the inputType of emailentryfield', async () => {
 const emailInputType = await emailInputByLabel.getAttribute("type");
    await expect(emailInputType).toEqual('email');
 });

 await test.step('check the value of emailentryfield', async () => {
 await expect(emailInputByLabel).toHaveValue('john@test.com');
 });

 await test.step('check if emailentryfield is not focused', async () => {
 await expect(emailInputByLabel).not.toBeFocused();
 });

 });

test('Ex 2 :radio buttons - action', async ({ page }) => {
 const blockGrid = page.locator('nb-card', { hasText: 'Using the Grid' })
 const option1 = blockGrid.getByRole('radio', { name: 'Option 1' });
 const option2 =blockGrid.getByRole('radio', { name: 'Option 2' });
 const disabledOption = blockGrid.getByRole('radio', { name: 'Disabled Option' });

 await test.step('check both radios are unchecked', async () => {
 await expect(option1).not.toBeChecked();
    await expect(option2).not.toBeChecked();
 });

await test.step('check option1', async () => {
 await option1.check({ force: true });
 await expect(option1).toBeChecked();
 await expect(option2).not.toBeChecked();
 await expect(disabledOption).toBeDisabled();
});

await test.step('check option2', async () => {
await option2.check({ force: true });
await expect(option1).not.toBeChecked();
await expect(option2).toBeChecked();
await expect(disabledOption).toBeDisabled();
});

await expect(disabledOption).toBeDisabled();

});

test('Ex 3 :for loop for checkbox - action', async ({ page }) => {
const rememberMeCheckbox = page
.locator('nb-card', { hasText: 'Inline form' })
.getByRole('checkbox', { name: 'Remember me' });

const basicFormComponent = page
.locator('nb-card', { hasText: 'Basic form' })
.getByRole('checkbox', { name: 'Check me out' });

const horizontalFormComponent = page
.locator('nb-card', { hasText: 'Horizontal form' })
.getByRole('checkbox', { name: 'Remember me' });

const checkboxes2: Locator[] = [
rememberMeCheckbox,
basicFormComponent,
horizontalFormComponent,
];

await test.step('check all checkboxes', async () => {
for (const checkbox of checkboxes2) {
await checkbox.scrollIntoViewIfNeeded();
await checkbox.check({ force: true });
await expect(checkbox).toBeChecked();
}
});

await test.step('uncheck middle checkbox', async () => {
for (let i = 0; i < checkboxes2.length; i++) {
if (i === 1) {
await checkboxes2[i].scrollIntoViewIfNeeded();
await checkboxes2[i].setChecked(false, { force: true });
await expect(checkboxes2[i]).not.toBeChecked();
} else {
await expect(checkboxes2[i]).toBeChecked();
}
}
});

  /* await test.step('change the state of checkbox', async () => {
    for (let i = 0; i < checkboxes2.length; i++) {
      if (await checkboxes2[i].isChecked()) {
        await checkboxes2[i].setChecked(false, { force: true });
        await expect(checkboxes2[i]).not.toBeChecked();
      } else {
        await checkboxes2[i].setChecked(true, { force: true });
        await expect(checkboxes2[i]).toBeChecked();
      }
    }
  });
*/

});
  
});
