
import { expect } from "@playwright/test";
import { BaseFormComponent } from "./BaseFormComponent";
import { Locator, Page} from 'playwright';

export class InLineFormComponent extends BaseFormComponent{
    readonly InLineNameInput: Locator;
    readonly InLineEmailInput: Locator;
    readonly InLineRememberMe: Locator;

    constructor(page: Page){
        super(page, 'inline-form-card');
        this.InLineNameInput = this.card.getByTestId('name-input');
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

