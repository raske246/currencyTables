class SecurePage {
   
    get inventoryPage () {
        return $('span[class="title"]');
    }

    get errorMessage () {
        return $('h3[data-test="error"]');
    }
}

export default new SecurePage();
