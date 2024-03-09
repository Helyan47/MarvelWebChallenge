// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('number of elements', async ({ page }) => {
	await page.goto('http://localhost:3000');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Marvel Characters/);

	// Locate the number of characters in list
	const characterListLocator = await page.getByTestId('character-list-container');
	await expect(characterListLocator).toBeVisible();
	await expect(characterListLocator.locator('.character-item')).toHaveCount(50);
	const size = await characterListLocator.locator('.character-item').count();

	// Locate the number of characters in result number
	const resultNumber = await page.getByTestId('result-number');
	await expect(resultNumber).toBeVisible();
	await expect(resultNumber).toContainText(`${size} RESULTS`);
});

test('add/remove favorite with navigation', async ({ page }) => {
	await page.goto('http://localhost:3000');

	/**** MAIN PAGE - START ****/

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Marvel Characters/);

	// Locate number of favs
	await expect(page.getByTestId('number-favorites')).toBeVisible();
	await expect(page.getByTestId('number-favorites').locator('span')).toHaveText('0');

	// Locate the first character.
	await expect(page.getByTestId('character-list-container')).toBeVisible();
	let itemLocator = await page.getByTestId('character-item-0');
	await expect(itemLocator).toBeVisible();

	// Locate the first character name
	let itemName = await itemLocator.locator('span');
	await expect(itemName).toBeVisible();
	const name = await itemName.textContent();

	// Locate the anchor of the character
	const itemLink = await itemLocator.getByRole('link');
	await expect(itemLink).toBeVisible();

	// Locate the fav button of the character
	let itemButton = await itemLocator.getByRole('button');
	await expect(itemButton).toBeVisible();

	// click the fav button
	await itemButton.click();

	// locate fav increased
	await expect(page.getByTestId('number-favorites')).toBeVisible();
	await expect(page.getByTestId('number-favorites').locator('span')).toHaveText('1');

	// button classname changed
	await expect(itemButton).toHaveClass(/fav-icon-toggled/);

	// click the anchor of the character
	await itemLink.click();

	/**** MAIN PAGE - END ****/

	/**** CHARACTER DETAIL - START ****/

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(name);

	// locate fav its equals as previous
	await expect(page.getByTestId('number-favorites')).toBeVisible();
	await expect(page.getByTestId('number-favorites').locator('span')).toHaveText('1');

	// Locate the fav button of the character
	const characterDetailButton = await page.getByTestId('character-detail-container').getByRole('button');
	await expect(characterDetailButton).toBeVisible();

	// click the fav button again
	await characterDetailButton.click();

	// locate fav decreased
	await expect(page.getByTestId('number-favorites')).toBeVisible();
	await expect(page.getByTestId('number-favorites').locator('span')).toHaveText('0');

	// button classname changed
	await expect(characterDetailButton).toHaveClass(/fav-icon/);

	// click the logo
	const logo = await page.getByTestId('main-logo');
	await logo.click();

	/**** CHARACTER DETAIL - END ****/

	/**** MAIN PAGE - START ****/

	// Title changed
	await expect(page).toHaveTitle(/Marvel Characters/);

	// Locate number of favs
	await expect(page.getByTestId('number-favorites')).toBeVisible();
	await expect(page.getByTestId('number-favorites').locator('span')).toHaveText('0');

	// Locate the first character.
	await expect(page.getByTestId('character-list-container')).toBeVisible();
	itemLocator = await page.getByTestId('character-item-0');

	// Locate the fav button of the character
	itemButton = await itemLocator.getByRole('button');
	await expect(itemButton).toBeVisible();

	// button classname is equal as previous
	await expect(itemButton).toHaveClass(/fav-icon/);

	/**** MAIN PAGE - END ****/
});

// test('navigation favorite', async ({ page }) => {
// 	await page.goto('https://playwright.dev/');

// 	// Click the get started link.

// 	// Expects page to have a heading with the name of Installation.
// 	await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
