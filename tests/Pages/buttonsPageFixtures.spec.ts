import { test } from '../../src/fixtures/baseFixtures';

test('Visit buttons sub category, click and validate messages', async ({ element }) => {
    await element.visitElementsPage();
    await element.clickToButtonsSubCategory();
    await element.checkDoubleClick();
    await element.checkRightClick();
    await element.checkDynamicClick();
});