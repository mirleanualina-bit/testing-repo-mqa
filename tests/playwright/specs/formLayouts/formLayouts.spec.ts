
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

  test('User should be able to complete the block form and submit it', async ({ 
    onApplicationURLs,
    onBlockForm 
    }) => { 
        const testfirstname = 'First name' ;
        const testlastname = 'Last name' ;
        const testEmail = 'test@test.com' ;
        const testWebsite = 'test@gmail.com' ;

        await test.step('Navigate to the form layout form',async () => {
            await onApplicationURLs.navigateToFormLayout();
        });

        await test.step('Complete the block form',async () => {
            await onBlockForm.assertVisibility(true);
            await onBlockForm.fillFirstName(testfirstname);
            await onBlockForm.fillLastName(testlastname);
            await onBlockForm.fillEmail(testEmail);
            await onBlockForm.fillWebsite(testWebsite);
        });

        await test.step('Submit the form',async () => {
            await onBlockForm.submit();
        }); 
  });

  test('User should be able to complete the witout labels form and submit it', async ({ 
    onApplicationURLs,
    onWithoutLabelsForm 
    }) => { 
        const testrecipients = 'Recipients' ;
        const testsubject = 'Subject' ;
        const testmessage = 'Message is written.' ;

        await test.step('Navigate to the form layout form',async () => {
            await onApplicationURLs.navigateToFormLayout();
        });

        await test.step('Complete the without labels form',async () => {
            await onWithoutLabelsForm.assertVisibility(true);
            await onWithoutLabelsForm.fillRecipients(testrecipients);
            await onWithoutLabelsForm.fillSubject(testsubject);
            await onWithoutLabelsForm.fillMessage(testmessage);
        });

        await test.step('Submit the form',async () => {
            await onWithoutLabelsForm.submit();
        }); 
  });

  test('User should be able to complete the horizontal form and submit it', async ({ 
    onApplicationURLs,
    onHorizontalForm
    }) => { 
        const testEmail = 'test@test.com' ;
        const testpassword = 'password' ;

        await test.step('Navigate to the form layout form',async () => {
            await onApplicationURLs.navigateToFormLayout();
        });

        await test.step('Complete the horizontal form',async () => {
            await onHorizontalForm.assertVisibility(true);
            await onHorizontalForm.fillEmail(testEmail);
            await onHorizontalForm.fillPassword(testpassword);
        });

        await test.step("Check the 'Remember me' checkbox",async () => {
            await onHorizontalForm.toggleRememberMe();
        });

        await test.step('Submit the form',async () => {
            await onHorizontalForm.submit();
        }); 
  });

  test('User should be able to complete the datepicker form and submit it', async ({ 
    onApplicationURLs,
    onDatePickerForm
    }) => { 
       
        const day = 15;
        const rangeStartDay = 10;
        const rangeEndDay = 20;
        const dayBetweenMinMax = 10;

        await test.step('Navigate to the datePicker form',async () => {
            await onApplicationURLs.navigateToDatePicker();
        });

        await test.step('Complete the common datePicker',async () => {
            await onDatePickerForm.assertVisibilityCommonDatePicker(true);
            await onDatePickerForm.fillCommonDatePickerInput(day);
        });

        await test.step('Complete the with range datePicker',async () => {
            await onDatePickerForm.assertVisibilityWithRangeDatePicker(true);
            await onDatePickerForm.fillWithRangeDatePickerInput(rangeStartDay, rangeEndDay);
        });

        await test.step('Complete the with disabled min max values datePicker',async () => {
            await onDatePickerForm.assertVisibilityWithRangeDatePicker(true);
            await onDatePickerForm.fillWithDisabledMinMaxValInput(dayBetweenMinMax);
        });
        
  });
});