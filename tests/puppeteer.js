/* eslint-disable no-console */
import { runQunitPuppeteer, printFailedTests, printResultSummary } from 'node-qunit-puppeteer';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

const qunitArgs = {
    targetUrl: `file://${resolve(__dirname, './dist/index.html')}`,
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
    .catch((ex) => {
        console.error(ex);
        process.exit(1);
    });
