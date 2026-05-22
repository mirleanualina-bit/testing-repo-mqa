
import { Page } from "playwright";
import { BasicFormComponent } from "../support-component/forms/BasicFormComponent";
import { UsingGridComponent } from "../support-component/forms/UsingGridComponent";
import {expect, test as base} from "playwright/test";
import { ApplicationURLs } from "../support-component/main/applicationURLs";
import { InLineFormComponent } from "../support-component/forms/InLineFormComponent";
import { BlockFormComponent } from "../support-component/forms/BlockFormComponent";
import { WithoutLabelsFormComponent } from "../support-component/forms/WithoutLabelsFormComponent";
import { HorizontalConnectionPos } from "@angular/cdk/overlay";
import { HorizontalFormComponent } from "../support-component/forms/HorizontalFormComponent";
import { DatePickerComponent } from "../support-component/forms/DatePickerComponent";


type MyFixtures = {
    onBasicForm: BasicFormComponent;
    onUsingGridForm: UsingGridComponent;
    onApplicationURLs: ApplicationURLs;
    onInLineForm: InLineFormComponent;
    onBlockForm: BlockFormComponent;
    onWithoutLabelsForm: WithoutLabelsFormComponent;
    onHorizontalForm: HorizontalFormComponent;
    onDatePickerForm: DatePickerComponent;
}

const createFixtures = <T>(Component: new (page: Page) => T) => {
    return async({ page }: {page: Page}, use: (fixture: T) => Promise <void>) => {
        await use(new Component(page));
    };
};

export const test = base.extend<MyFixtures>({
    onBasicForm: [createFixtures(BasicFormComponent),{scope: 'test'}],
    onUsingGridForm: [createFixtures(UsingGridComponent), {scope: 'test'}],
    onApplicationURLs: [createFixtures(ApplicationURLs), {scope: 'test'}],
    onInLineForm: [createFixtures(InLineFormComponent), {scope: 'test'}],
    onBlockForm: [createFixtures(BlockFormComponent), {scope: 'test'}],
    onWithoutLabelsForm: [createFixtures(WithoutLabelsFormComponent), {scope: 'test'}],
    onHorizontalForm: [createFixtures(HorizontalFormComponent), {scope: 'test'}],
    onDatePickerForm: [createFixtures(DatePickerComponent), {scope: 'test'}]
});

export {expect};