# Adguard Assistant [![Build Status](https://travis-ci.org/AdguardTeam/AdguardAssistant.svg?branch=master)](https://travis-ci.org/AdguardTeam/AdguardAssistant)

Adguard Assistant userscript

## Development build

Built automatically on every new commit:
https://AdguardTeam.github.io/AdguardAssistant/assistant.user.js

Unit test page for dev build [here](https://AdguardTeam.github.io/AdguardAssistant/test/)

## How to build

For development build run:

    $ gulp dev

This will compile `assistant.user.js` file without minification.


For development build with watcher on file changes and debugging from local server:

    $ gulp watch

This will open `http://localhost:3000` in browser for debugging with extensions (e.g. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)). Local server will serve from `build` directory. To apply the script, you must specify a script in the address like `http://localhost:3000/assistant.user.js`.

To run the task of downloading the localization files, put the `.keys.json` configuration file in the `config` directory.

The configuration file looks like:

    {
        "url": "url of localizations",
        "project_id": "some id",
        "secret_key": "some key",
        "api_key": "some api key"
    }

For security reasons, this file is ingored by .gitignore settings.

To download and append localizations run:

    $ gulp locales

Localization list in options in `gulpfile.js`.

For production build run:

    $ gulp build

This will compile `assistant.user.js` file with minification and uglify.

## Mobile build

Mobile build is [here](https://AdguardTeam.github.io/AdguardAssistant/mobile/script.js)

In the mobile assistant, the rules are specified via a function:

```
adguardAssistant.start(function(ruleText) {

});
```
