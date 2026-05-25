
import { Page } from "playwright/test";
import { BasicFormComponent } from "../forms/BasicFormComponent";
import { DatePickerComponent } from "../forms/DatePickerComponent";




export class ApplicationURLs{
    readonly page: Page;

constructor (page:  Page){
    this.page = page;
    }

    async navigateToFormLayout() {
        await this.page.goto('/pages/forms/layouts', { waitUntil:"domcontentloaded"});

        const basicForm = new BasicFormComponent(this.page);
        await basicForm.assertVisibility(true);

       
    }

    async navigateToDatePicker() {
        await this.page.goto('/pages/forms/datepicker', { waitUntil:"domcontentloaded"});

       const datepicker = new DatePickerComponent(this.page);
       await datepicker.assertVisibilityCommonDatePicker(true);
            
    }  
}