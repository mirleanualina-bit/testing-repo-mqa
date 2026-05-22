
import { expect } from "@playwright/test";
import { BaseFormComponent } from "./BaseFormComponent";
import { Locator, Page} from 'playwright';

export class HorizontalFormComponent extends BaseFormComponent{
    readonly HorizontalEmailInput: Locator;
    readonly HorizontalPasswordInput: Locator;
    readonly HorizontalRememberMe: Locator;

    constructor(page: Page){
        super(page, 'horizontal-form-card');
        this.HorizontalEmailInput = this.card.getByTestId('email-input');
        this.HorizontalPasswordInput = this.card.getByTestId('password-input');
        this.HorizontalRememberMe = this.card.getByTestId('remember-me-checkbox').locator('input[type="checkbox"]');
    }

    async fillEmail(value: string){
        await this.HorizontalEmailInput.fill(value)
    }

    async fillPassword(value: string){
        await this.HorizontalPasswordInput.fill(value);
    }

    async toggleRememberMe(){
        await expect(this.HorizontalRememberMe).not.toBeChecked();
        await this.HorizontalRememberMe.check({force: true});
        await expect(this.HorizontalRememberMe).toBeChecked();
    }

    async unToggleRememberMe(){
        await expect(this.HorizontalRememberMe).toBeChecked();
        await this.HorizontalRememberMe.uncheck({force: true});
        await expect(this.HorizontalRememberMe).not.toBeChecked();
    } 
} 
