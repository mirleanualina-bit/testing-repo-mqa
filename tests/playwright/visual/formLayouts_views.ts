
import { test } from "../fixtures/base_fixture";
import { argosComponentScreenshot, argosFullScreenshot } from "../support/utils/argosSmartScreenshot";

test.describe('Form Layouts', () => {
    test('Form Layouts - full page view',async ({ page, onApplicationURLs}) => {
    await onApplicationURLs.navigateToFormLayout();
    await argosFullScreenshot({page, snapshotName: 'Form Layouts - full page'})
    });

    test('Form Layouts - inline form block',async ({ page, onApplicationURLs, onInLineForm}) => {
        await onApplicationURLs.navigateToFormLayout();
        await onInLineForm.assertVisibility(true);

        await argosComponentScreenshot({page, snapshotName: 'Form Layouts - inline component form', selector: onInLineForm.card})
        });

});