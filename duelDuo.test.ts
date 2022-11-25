import {expect, beforeEach, test, afterAll} from '@jest/globals';
import { Builder, Capabilities, By } from "selenium-webdriver"


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Choices show up when you click draw`, async () => {
    await driver.findElement(By.xpath(`//button[2]`)).click()
    const choices = await driver.findElement(By.xpath(`//div[contains(@id, "choices")]`))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Selecting add to Duo displays player duo`, async () => {
    await driver.findElement(By.xpath(`//button[2]`)).click()
    await driver.findElement(By.xpath(`//button[contains(@class, "bot-btn")]`)).click()
    const playerDuo = await driver.findElement(By.xpath(`//div[contains(@id, "player-duo")]`))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})