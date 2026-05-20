
/*
import { expect } from "@playwright/test";
import { BaseFormComponent } from "./BaseFormComponent";
import { Locator, Page} from 'playwright';

export class BlockFormComponent extends BaseFormComponent{
    readonly BlockFirstNameInput: Locator;
    readonly BlockLastNameInput: Locator;
    readonly BlockEmailInput: Locator;
    readonly BlockWebsiteInput: Locator;

    constructor(page: Page){
        super(page, 'block-form-card');
        this.BlockFirstNameInput = this.card.getByTestId('firstname-input');
        this.BlockLastNameInput = this.card.getByTestId('firstname-input');
        this.InLineEmailInput = this.card.getByTestId('email-input');
        this.InLineRememberMe = this.card.getByTestId('remember-me-checkbox').locator('input[type="checkbox"]');
    }

    async fillName(value: string){
        await this.InLineNameInput.fill(value)
    }

    async fillEmail(value: string){
        await this.InLineEmailInput.fill(value);
    }

    async toggleRememberMe(){
        await expect(this.InLineRememberMe).not.toBeChecked();
        await this.InLineRememberMe.check({force: true});
        await expect(this.InLineRememberMe).toBeChecked();
    }

    async unToggleRememberMe(){
        await expect(this.InLineRememberMe).toBeChecked();
        await this.InLineRememberMe.uncheck({force: true});
        await expect(this.InLineRememberMe).not.toBeChecked();
    } 
}
*/