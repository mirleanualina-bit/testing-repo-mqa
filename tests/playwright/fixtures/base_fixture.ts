
import { Page } from "playwright";
import { BasicFormComponent } from "../support-component/forms/BasicFormComponent";
import { UsingGridComponent } from "../support-component/forms/UsingGridComponent";
import {expect, test as base} from "playwright/test";
import { ApplicationURLs } from "../support-component/main/applicationURLs";
import { InLineFormComponent } from "../support-component/forms/InLineFormComponent";

type MyFixtures = {
    onBasicForm: BasicFormComponent;
    onUsingGridForm: UsingGridComponent;
    onApplicationURLs: ApplicationURLs;
    onInLineForm: InLineFormComponent;

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
    onInLineForm: [createFixtures(InLineFormComponent), {scope: 'test'}]
});

export {expect};