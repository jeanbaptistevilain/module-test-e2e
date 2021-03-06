
const NodeEnvironment = require('jest-environment-node')
const puppeteer = require('puppeteer')
const fs = require('fs')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

class PuppeteerEnvironment extends NodeEnvironment {
    constructor(config) {
        super(config)
    }

    async setup() {
        console.log('Setup Test Environment.')
        await super.setup()
        const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8')
        if (!wsEndpoint) {
            throw new Error('wsEndpoint not found')
        }
        this.global.__BROWSER__ = await puppeteer.connect({
            browserWSEndpoint: wsEndpoint,
        })
        this.global.baseUrl = ''
    }

    async teardown() {
        console.log('Teardown Test Environment.')
        await super.teardown()
    }

    runScript(script) {
        return super.runScript(script)
    }
}

module.exports = PuppeteerEnvironment
