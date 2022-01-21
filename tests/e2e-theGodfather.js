const { default: App } = require("../page-objects/App")
const { default: Menu } = require("../page-objects/components/Menu")
const { default: Navbar } = require("../page-objects/components/Navbar")
const { default: TopMoviesPage } = require("../page-objects/pages/TopMovies-Page")


describe('E2E Tests - Homepage to Top movies section', () => {

    it('Should open Top 250 Movies Page after clicking on Top 250 Movies button in Menu-section', async() => {
        await App.openHomepage()
        await Navbar.clickOnMenuButton()
        await Menu.clickOnTop250MoviesButton()
        const PageTitle = await TopMoviesPage.pageTitles
        await expect(PageTitle).toHaveText('IMDb Top 250 Movies')
    })

    it('Should have "The godfather" in the 2nd place with a rating of "9.1"', async () => {
        await App.openTop250MoviesPage()
        const secondPlaceMovieTitle = await TopMoviesPage.secondPlaceMovie
        await expect(secondPlaceMovieTitle).toHaveText('The Godfather')
        const secondPlaceMovieRating = await TopMoviesPage.secondPlaceMovieRating
        await expect(secondPlaceMovieRating).toHaveText('9.1')
    })

})