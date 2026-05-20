
import { expect } from "@playwright/test";
import { BaseFormComponent } from "./BaseFormComponent";
import { Locator, Page} from 'playwright';

export class WithoutLabelsFormComponent extends BaseFormComponent{
    readonly WithoutLabelsRecipientsInput: Locator;
    readonly WithoutLabelsSubjectInput: Locator;
    readonly WithoutLabelsMessageInput: Locator;

    constructor(page: Page){
        super(page, 'without-labels-form-card');
        this.WithoutLabelsRecipientsInput = this.card.getByTestId('recipients-input');
        this.WithoutLabelsSubjectInput = this.card.getByTestId('subject-input');
        this.WithoutLabelsMessageInput = this.card.getByTestId('message-input');
    }

    async fillRecipients(value: string){
        await this.WithoutLabelsRecipientsInput.fill(value)
    }

    async fillSubject(value: string){
        await this.WithoutLabelsSubjectInput.fill(value)
    }

    async fillMessage(value: string){
        await this.WithoutLabelsMessageInput.fill(value);
    }

}
