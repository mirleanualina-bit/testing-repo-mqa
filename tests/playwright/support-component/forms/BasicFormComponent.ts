import { expect } from "@playwright/test";
import { BaseFormComponent } from "./BaseFormComponent";
import { Locator, Page} from 'playwright';

export class BasicFormComponent extends BaseFormComponent{
    readonly BasicEmailInput: Locator;
    readonly BasicPasswordInput: Locator;
    readonly BasicCheckMeOut: Locator;

    constructor(page: Page){
        super(page, 'basic-form-card');
        this.BasicEmailInput = this.card.getByTestId('email-input');
        this.BasicPasswordInput = this.card.getByTestId('password-input');
        this.BasicCheckMeOut = this.card.getByTestId('check-me-out-checkbox').locator('input[type="checkbox"]');
    }

    async fillEmail(value: string){
        await this.BasicEmailInput.fill(value);
    }

    async fillPassword(value: string){
        await this.BasicPasswordInput.fill(value)
    }

    async toggleCheckMeOut(){
        await expect(this.BasicCheckMeOut).not.toBeChecked();
        await this.BasicCheckMeOut.check({force: true});
        await expect(this.BasicCheckMeOut).toBeChecked();
    }

    async unToggleCheckMeOut(){
        await expect(this.BasicCheckMeOut).toBeChecked();
        await this.BasicCheckMeOut.uncheck({force: true});
        await expect(this.BasicCheckMeOut).not.toBeChecked();
    } 
}