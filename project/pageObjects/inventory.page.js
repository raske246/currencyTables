

class InventoryPage {

    get addBackpackBtn () {
        return $("//*[@data-test=\"add-to-cart-sauce-labs-backpack\"]");
    }

    get addBikeLightBtn () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get addRedTShirtBtn () {
        return $('//*[@data-test=\"add-to-cart-test.allthethings()-t-shirt-(red)\"]');
    }

    get removeBikeLightBtn() {
        return $('#remove-sauce-labs-bike-light')
    }

    get removeBackpackBtn() {
        return $('//*[@id="remove-sauce-labs-backpack"]')
    }

    get removeRedTShirtBtn() {
        return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]')
    }

    async addBackpackToCart() {
        await this.addBackpackBtn.click()
    }

    async addBikeLightToCart() {
        await this.addBikeLightBtn.click()
    }

    async addRedTShirtToCart() {
        await this.addRedTShirtBtn.click()
    }

    async removeBackpack() {
        await this.removeBackpackBtn.click()
    }

    async removeBikeLight() {
        const removeBikeLightBtn = $('#remove-sauce-labs-bike-light').click()
    }

    async removeRedTShirt() {
        await this.removeRedTShirtBtn.click()
    }
      
    async assertCartCount(count) {
        const number = await $('//*[@id="shopping_cart_container"]/a/span')
        await expect(number).toHaveText(count)
    }

    async assertCartEmpty() {
        const cart = await $('//*[@id="shopping_cart_container"]')
        await expect(cart).toBeDisplayed()
    }

    async getProductTitles() {
        const itemTitles = [];
        const titleElements = await browser.$$('.inventory_item_name');
        for (let i = 0; i < titleElements.length; i++) {
          const title = await titleElements[i].getText();
          itemTitles.push(title);
        }
        return itemTitles;
    }

    async getProductPrice() {
        const itemPrices = [];
        const priceElements = await browser.$$('.inventory_item_price');
        for (let i = 0; i < priceElements.length; i++) {
            const price = await priceElements[i].getText();
            itemPrices.push(price);
        }
        return itemPrices;
    }

    async getProductDescription() {
        const itemDescriptions = [];
        const descriptionElements = await browser.$$('.inventory_item_desc');
        for (let i = 0; i < descriptionElements.length; i++) {
            const description = await descriptionElements[i].getText();
            itemDescriptions.push(description);
        }
        return itemDescriptions;
    }
}

export default new InventoryPage();