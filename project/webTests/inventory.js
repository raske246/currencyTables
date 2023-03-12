import LoginPage from '../pageObjects/login.page.js';
import InventoryPage from '../pageObjects/inventory.page.js';


describe('Confirm inventory data', () => {
  it('should confirm items title', async () => {
    const productTitles = [
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Fleece Jacket',
      'Sauce Labs Onesie',
      'Test.allTheThings() T-Shirt (Red)',
    ];

    await LoginPage.open('')
    await LoginPage.login('standard_user', 'secret_sauce')
      
    const actualTitles = await InventoryPage.getProductTitles()
    await expect(actualTitles).toEqual(productTitles)
  })

  it('should confirm items price', async () => {
    const productPrices = [
      '$29.99',
      '$9.99',
      '$15.99',
      '$49.99',
      '$7.99',
      '$15.99',
    ];

    await LoginPage.open('')
    await LoginPage.login('standard_user', 'secret_sauce')
      
    const actualPrices = await InventoryPage.getProductPrice()
    await expect(actualPrices).toEqual(productPrices)
  })

  it('should confirm items description', async () => {
    const productDescription = [
      'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and '+
      'tablet protection.',
      'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant '+
      'with 3 lighting modes, 1 AAA battery included.',
      'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, '+
      'heather gray with red bolt.',
      'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a '+
      'relaxing day outdoors to a busy day at the office.',
      'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle '+
      'hemmed sleeved and bottom won\'t unravel.',
      'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft '+
      'and comfy ringspun combed cotton.',
    ];

    await LoginPage.open('')
    await LoginPage.login('standard_user', 'secret_sauce')
      
    const actualDescription = await InventoryPage.getProductDescription()
    await expect(actualDescription).toEqual(productDescription)
  })
})