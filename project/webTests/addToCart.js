import LoginPage from '../pageObjects/login.page.js';
import InventoryPage from '../pageObjects/inventory.page.js';


describe('Add items to cart', () => {
  it('should add and remove items to cart', async ()  => {
    await LoginPage.open('')
    await LoginPage.login('standard_user', 'secret_sauce')
        
    await InventoryPage.assertCartEmpty()

    await InventoryPage.addBackpackToCart()
    await InventoryPage.addBikeLightToCart()
    await InventoryPage.addRedTShirtToCart()

    await InventoryPage.assertCartCount('3')

    await InventoryPage.removeBackpack()
    await InventoryPage.removeBikeLight()
    await InventoryPage.removeRedTShirt()
    await InventoryPage.assertCartEmpty()
  })
})