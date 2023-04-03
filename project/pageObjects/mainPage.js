class MainPage {
    
    get currencySelectBtn () {
        return $('//*[@id="currency"]')
    }

    get currency () {
        return $('//*[@id="currency-option-1"]/div[2]')
    }

    get dateInputBtn () {
        return $('//*[@id="__next"]/div[2]/div[2]/section/form/div[2]/div/div[1]/input')
    } 

    get confirmBtn () {
        return $('//*[@type="submit"]')
    }

    get usdEurRate () {
        return $('//*[@id="table-section"]/section/div[2]/div/table/tbody/tr[1]/td[2]')
    }

    get gbpEurRate () {
        return $('//*[@id="table-section"]/section/div[2]/div/table/tbody/tr[3]/td[2]')
    }

    async selectEurCurrency () {
        await this.currencySelectBtn.click()
        await this.currency.click()
    }

    async overrideDateInput() {
        await this.dateInputBtn.click()
        const monthPicker = $('//*[@id="__next"]/div[2]/div[2]/section/form/div[2]/div[2]/div/div/div/div[1]/span[1]')
        await monthPicker.click()
        await monthPicker.click()
        const dayPicker = $('//*[@id="__next"]/div[2]/div[2]/section/form/div[2]/div[2]/div/div/div/div[2]/div/div[3]/div[1]/div[4]')
        await dayPicker.click()
        // await this.dateInputBtn.setValue(newValue)
    }

    async confirmClick () {
        await this.confirmBtn.click()
    }

    async UsdEurRateNumber () {
        this.rateNumber = await this.usdEurRate.getText()
        return this.rateNumber
    }
    
    async GbpEurRateNumber () {
        this.rateNumber = await this.gbpEurRate.getText()
        return this.rateNumber
    }

    open () {
        return browser.url(`https://www.xe.com/currencytables/`)
    }
}

export default new MainPage()
