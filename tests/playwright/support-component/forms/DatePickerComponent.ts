import { expect } from "@playwright/test";

import { Locator, Page } from 'playwright';



export class DatePickerComponent {
    readonly page: Page;
    readonly CommonDatePickerCard: Locator;
    readonly CommonDatePickerInput: Locator;

    readonly WithRangeDatePickerCard: Locator;
    readonly WithRangeDatePickerInput: Locator;

    readonly WithDisabledMinMaxValuesPickerCard: Locator;
    readonly WithDisabledMinMaxValuesPickerInput: Locator;

    readonly DatePickerCalendar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.CommonDatePickerCard = this.page.getByTestId('common-date-picker-card');
        this.CommonDatePickerInput = this.CommonDatePickerCard.getByTestId('common-date-picker-input');

        this.WithRangeDatePickerCard = this.page.getByTestId('with-range-date-picker-card');
        this.WithRangeDatePickerInput = this.WithRangeDatePickerCard.getByTestId('with-range-date-picker-input');

        this.WithDisabledMinMaxValuesPickerCard = this.page.getByTestId('disabled-min-max-value-card');
        this.WithDisabledMinMaxValuesPickerInput = this.WithDisabledMinMaxValuesPickerCard.getByTestId('disabled-min-max-value-input');

        //this.CommonDatePickerInput = this.page.getByTestId('common-date-picker-calendar');
        this.DatePickerCalendar = this.page.locator('.cdk-overlay-pane').filter({
            has: this.page.getByRole('button', { name: /\w+ \d{4}/ }),
        });
    }

    async assertVisibilityCommonDatePicker(visibility = true) {
        if (visibility) {
            await expect(this.CommonDatePickerCard).toBeVisible();
        } else {
            await expect(this.CommonDatePickerCard).not.toBeVisible();
        }
    }


    async fillCommonDatePickerInput(day: number) {

        await expect(this.CommonDatePickerInput).toBeVisible();
        await this.CommonDatePickerInput.click();

        await expect(this.DatePickerCalendar).toBeVisible();
        await this.DatePickerCalendar.getByText(String(day), { exact: true }).click();
        await expect(this.DatePickerCalendar).not.toBeVisible();
        
        const now = new Date();
        const selectedDate = new Date(now.getFullYear(), now.getMonth(), day);
        const expectedValue = selectedDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
        await expect(this.CommonDatePickerInput).toHaveValue(expectedValue);      

    }

    async assertVisibilityWithRangeDatePicker(visibility = true) {
        if (visibility) {
            await expect(this.WithRangeDatePickerCard).toBeVisible();
        } else {
            await expect(this.WithRangeDatePickerCard).not.toBeVisible();
        }
    }


    async fillWithRangeDatePickerInput(startDay: number, endDay: number) {

        await expect(this.WithRangeDatePickerInput).toBeVisible();
        await this.WithRangeDatePickerInput.click();

        await expect(this.DatePickerCalendar).toBeVisible();
        await this.DatePickerCalendar.getByText(String(startDay), { exact: true }).click();
        await this.DatePickerCalendar.getByText(String(endDay), { exact: true }).click();
        await expect(this.DatePickerCalendar).not.toBeVisible();

        const now = new Date();
        const dateFormat: Intl.DateTimeFormatOptions = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        };
        const startDate = new Date(now.getFullYear(), now.getMonth(), startDay)
            .toLocaleDateString('en-US', dateFormat);
        const endDate = new Date(now.getFullYear(), now.getMonth(), endDay)
            .toLocaleDateString('en-US', dateFormat);
        const expectedValue = `${startDate} - ${endDate}`;

        await expect(this.WithRangeDatePickerInput).toHaveValue(expectedValue);

    }

    async assertVisibilityDisabledMinMaxValDatePicker(visibility = true) {
        if (visibility) {
            await expect(this.WithDisabledMinMaxValuesPickerCard).toBeVisible();
        } else {
            await expect(this.WithDisabledMinMaxValuesPickerCard).not.toBeVisible();
        }
    }


    async fillWithDisabledMinMaxValInput(dayMinMax: number) {

        await expect(this.WithDisabledMinMaxValuesPickerInput).toBeVisible();
        await this.WithDisabledMinMaxValuesPickerInput.click();

        await expect(this.DatePickerCalendar).toBeVisible();
        await this.DatePickerCalendar.getByText(String(dayMinMax), { exact: true }).click();
        
        if(dayMinMax >= 17 && dayMinMax <= 27){
        await expect(this.DatePickerCalendar).not.toBeVisible();
        
        const now = new Date();
        const selectedDate = new Date(now.getFullYear(), now.getMonth(), dayMinMax);
    
        const expectedValue = selectedDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
               
        await expect(this.WithDisabledMinMaxValuesPickerInput).toHaveValue(expectedValue);
        }else{
            await expect(this.DatePickerCalendar).toBeVisible();
        }
        

    }


}

