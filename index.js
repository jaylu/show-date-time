#! /usr/bin/env node

const { cac } = require('cac')

function formatDate(date, timezone) {
    return date.toLocaleString('en-us', { timeZone: timezone })
}

function showDate(date) {
    // https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript
    console.log(`Time: ${date.toLocaleString()}`)
    console.log('========================================')
    console.log(`Asia/Shanghai: ${formatDate(date, 'Asia/Shanghai')}`)
    console.log(`Europe/London: ${formatDate(date, 'Europe/London')}`)
    console.log(`America/Toronto: ${formatDate(date, 'America/Toronto')}`)
    console.log('========================================')
}

function main() {

    const cli = cac('show-date-time')

    cli
        // default command, Simply omit the command name, just brackets
        .command('', 'show current time in different timezone')
        .option('-t, --time <time>', 'Time you want to show, which will be parsed by new Date(time) ' +
            'e.g show-date-time --time "Mon Sep 20 2021 20:56:49 GMT+0800"')
        .action((options) => {
            const time = options.time ? new Date(options.time) : new Date()
            const now = new Date(time)
            showDate(now)
        })

    cli.help()
    cli.version(require('./package.json').version)
    cli.parse()
}

main()