/* eslint-disable no-console */
const { runQunitPuppeteer, printFailedTests, printResultSummary } = require('node-qunit-puppeteer');
const path = require('path');

const qunitArgs = {
    targetUrl: `file://${path.resolve(__dirname, './dist/index.html')}`,
    timeout: 10000,
    puppeteerArgs: ['--no-sandbox', '--allow-file-access-from-files'],
};

runQunitPuppeteer(qunitArgs)
    .then((result) => {
        printResultSummary(result, console);
        if (result.stats.failed > 0) {
            printFailedTests(result, console);
        }
    })
    .then(() => {
    })
    .catch((ex) => {
        console.error(ex);
        process.exit(1);
    });
