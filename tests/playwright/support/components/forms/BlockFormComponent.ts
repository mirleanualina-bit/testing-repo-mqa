

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
        this.BlockLastNameInput = this.card.getByTestId('lastname-input');
        this.BlockEmailInput = this.card.getByTestId('email-input');
        this.BlockWebsiteInput = this.card.getByTestId('website-input');
    }

    async fillFirstName(value: string){
        await this.BlockFirstNameInput.fill(value)
    }

    async fillLastName(value: string){
        await this.BlockLastNameInput.fill(value)
    }

    async fillEmail(value: string){
        await this.BlockEmailInput.fill(value);
    }

    async fillWebsite(value: string){
        await this.BlockWebsiteInput.fill(value);
    }
} 
