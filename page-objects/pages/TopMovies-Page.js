import Base from "../Base"

class TopMoviesPage extends Base {
    get secondPlaceMovie(){
        return $('#main > div > span > div > div > div.lister > table > tbody > tr:nth-child(2) > td.titleColumn > a')
    }
    get secondPlaceMovieRating(){
        return $('#main > div > span > div > div > div.lister > table > tbody > tr:nth-child(2) > td.ratingColumn.imdbRating > strong')
    }
    get pageTitles(){
        return $('#main > div > span > div > div > h1')
    }
    get theDarkKnightLink(){
        return $('=The Dark Knight')
    }
    get theDarkKnightTrailerButton(){
        return $('#iconContext-play-circle-outline-large-inline')
    }
    async clickOnTheDarkKnightLink(){
        await this.theDarkKnightLink.waitForExist()
        await this.theDarkKnightLink.click()
    }
    async clickOnTheDarkKnightTrailerButton(){
        await this.theDarkKnightTrailerButton.waitForExist()
        await this.theDarkKnightTrailerButton.click()
    }
}

export default new TopMoviesPage