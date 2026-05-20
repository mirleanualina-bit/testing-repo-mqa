import { expect, Locator, Page } from "@playwright/test";
import { BaseFormComponent } from "./BaseFormComponent";

export type GridOptionRadio = 'option1' | 'option2' | 'disabledOption' ;

export class UsingGridComponent extends BaseFormComponent{
    readonly UsingGridEmailInput: Locator;
    readonly UsingGridPasswordInput: Locator;
    readonly getOptionRadio: (key :GridOptionRadio) => Locator;
    

    constructor(page: Page){
        super(page, 'using-grid-form-card');
        this.UsingGridEmailInput = this.card.getByTestId('email-input');
        this.UsingGridPasswordInput = this.card.getByTestId('password-input');
        this.getOptionRadio = (key) => this.card.getByTestId(`${key}-radio`).locator('input[type="radio"]');
    }

    async fillEmail(value: string){
        await this.UsingGridEmailInput.fill(value);
    }

    async fillPassword(value: string){
        await this.UsingGridPasswordInput.fill(value)
    }

    async selectOption(key: GridOptionRadio){
        await this.getOptionRadio(key).check({force: true});
        await expect(this.getOptionRadio(key)).toBeChecked();
    }
}