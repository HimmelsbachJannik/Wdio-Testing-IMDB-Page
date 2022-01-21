class Base {
    async pauseShort () {
        await browser.pause(1500)
    }

    async pauseMedium () {
        await browser.pause(3000)
    }

    async pauseLong () {
        await browser.pause(6000)
    }
}

export default Base