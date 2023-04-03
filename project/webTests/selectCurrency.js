import MainPage from '../pageObjects/mainPage.js'


describe('XE Currency Tables', () => {
    it('should display eur and gbp units per eur', async () => {
        await MainPage.open()
        await MainPage.selectEurCurrency()
        await MainPage.overrideDateInput('2023-02-01')
        await MainPage.confirmClick();
        
        const usdEurRateNumber = await MainPage.UsdEurRateNumber()
        const gbpEurRateNumber = await MainPage.GbpEurRateNumber()
    
        await expect(usdEurRateNumber).toStrictEqual('1.0918121631244302')
        await expect(gbpEurRateNumber).toStrictEqual('0.8871386636267415')
    })
})