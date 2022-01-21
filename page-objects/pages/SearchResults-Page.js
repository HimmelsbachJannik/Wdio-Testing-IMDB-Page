const { default: Base } = require("../Base");

class SearchResults extends Base {
    get theDarkKnightResult(){
        return $('#main > div > div:nth-child(3) > table > tbody > tr.findResult.odd > td.result_text > a')
    }
    async clickOnResultTheDarkKnight(){
        await this.theDarkKnightResult.waitForExist()
        await this.theDarkKnightResult.click()
    }
}

export default new SearchResults