
import { test } from "../../fixtures/base_fixture";

test.describe('Form Layouts page', () => {

  
  test('User should be able to complete the basic form and submit it', async ({ 
    onApplicationURLs,
    onBasicForm 
    }) => { 
       const testEmail = 'test@test.com' ;
       const password = 'password' ;

        await test.step('Navigate to the form layout form',async () => {
            await onApplicationURLs.navigateToFormLayout();
        });

        await test.step('Complete the basic form',async () => {
            await onBasicForm.assertVisibility(true);
            await onBasicForm.fillEmail(testEmail);
            await onBasicForm.fillPassword(password);
        });

        await test.step("Check the 'Check me out' checkbox",async () => {
            await onBasicForm.toggleCheckMeOut();
        });

        await test.step('Submit the form',async () => {
            await onBasicForm.submit();
        }); 
  });

  test('User should be able to complete the Using Grid form and submit it', async ({ 
    onApplicationURLs,
    onUsingGridForm 
    }) => { 
       const testEmail = 'test@test.com' ;
       const password = 'password' ;

        await test.step('Navigate to the using grid form ',async () => {
            await onApplicationURLs.navigateToFormLayout();
        });

        await test.step('Complete the using grid form',async () => {
            await onUsingGridForm.assertVisibility(true);
            await onUsingGridForm.fillEmail(testEmail);
            await onUsingGridForm.fillPassword(password);
            await onUsingGridForm.selectOption('option2');
        });

        await test.step('Submit the form',async () => {
            await onUsingGridForm.submit();
        }); 
  });

  test('User should be able to complete the in line form and submit it', async ({ 
    onApplicationURLs,
    onInLineForm 
    }) => { 
        const testname = 'Jane Doe' ;
        const testEmail = 'test@test.com' ;

        await test.step('Navigate to the form layout form',async () => {
            await onApplicationURLs.navigateToFormLayout();
        });

        await test.step('Complete the in line form',async () => {
            await onInLineForm.assertVisibility(true);
            await onInLineForm.fillName(testname);
            await onInLineForm.fillEmail(testEmail);
        });

        await test.step("Check the 'Remember me' checkbox",async () => {
            await onInLineForm.toggleRememberMe();
        });

        await test.step('Submit the form',async () => {
            await onInLineForm.submit();
        }); 
  });
});