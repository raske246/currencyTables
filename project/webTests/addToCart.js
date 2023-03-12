import LoginPage from '../pageObjects/login.page.js';
import InventoryPage from '../pageObjects/inventory.page.js';


describe('Add items to cart', () => {
  it('should add item to cart', async ()  => {
    await LoginPage.open()
    await LoginPage.login('standard_user', 'secret_sauce')
        
    await InventoryPage.assertCartEmpty()

    await InventoryPage.addBackpackToCart()
    await InventoryPage.assertCartCount('1')

    await InventoryPage.removeBackpack()
  })

  it('should remove item from cart', async () => {
    await LoginPage.open()
    await LoginPage.login('standard_user', 'secret_sauce')
        
    await InventoryPage.assertCartEmpty()

    await InventoryPage.addBikeLightToCart()
    await InventoryPage.assertCartCount('1')

    await InventoryPage.removeBikeLight()
    await InventoryPage.assertCartEmpty()
  })
})