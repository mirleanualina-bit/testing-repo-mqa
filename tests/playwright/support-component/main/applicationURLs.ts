
import { Page } from "playwright";
import { BasicFormComponent } from "../forms/BasicFormComponent";
import { expect } from "@playwright/test";

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
}