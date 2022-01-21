const { default: App } = require("../page-objects/App")
const { default: Navbar } = require("../page-objects/components/Navbar")
const { default: SearchResultsPage } = require("../page-objects/pages/SearchResults-Page")
const { default: TopMoviesPage } = require("../page-objects/pages/TopMovies-Page")

describe('E2E Tests - Top250Movie page - The Dark Knight', async () => {

    it('Should have listed "The Dark Knight" and by clicking plays its trailer', async() => {
        await App.openTop250MoviesPage()
        await TopMoviesPage.clickOnTheDarkKnightLink()
        const playerState = await browser.execute(() => {
            return jwplayer().getState()
        })
        await expect(playerState).toEqual('buffering')
        await TopMoviesPage.clickOnTheDarkKnightTrailerButton()
    })
    it('Displays The Dark Knight when searching and plays the trailer after clicking', async() => {
        await App.openHomepage()
        await Navbar.fillAndSubmitSearchBox('The Dark Knight')
        await SearchResultsPage.clickOnResultTheDarkKnight()
        await TopMoviesPage.clickOnTheDarkKnightTrailerButton()
        await TopMoviesPage.pauseMedium()
        const playerState = await browser.execute(() => {
            return jwplayer().getState()
        })
        await expect(playerState).toEqual('playing')

    })
})