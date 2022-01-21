class Menu{
    get Top250MoviesButton(){
        return $('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > aside > div > div._3bRJYEaOz1BKUQYqW6yb29 > div > div:nth-child(1) > span > div > div > ul > a:nth-child(3) > span')
    }
    async clickOnTop250MoviesButton(){
        await this.Top250MoviesButton.waitForExist()
        await this.Top250MoviesButton.click()
    }

}

export default new Menu