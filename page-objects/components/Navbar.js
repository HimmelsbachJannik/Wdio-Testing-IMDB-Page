class Navbar {
    get menuButton(){
        return $('#imdbHeader-navDrawerOpen--desktop > div')
    }
    get searchBox(){
        return $('#suggestion-search')
    }
    async clickOnMenuButton(){
        await this.menuButton.waitForExist()
        await this.menuButton.click()
    }
    async fillAndSubmitSearchBox(text){
        await this.searchBox.waitForExist()
        await this.searchBox.setValue(text)
        await browser.keys('Enter')

    }
}

export default new Navbar