# AdguardAssistant

Adguard Assistant userscript

## How to use

For development build run:

    $ gulp dev

It will compiling `assistant.user.js` file without minification.


For development build with watcher on file changes and debugging from local server:

    $ gulp watch

This starts the browser with the address `http://localhost:3000` for debugging using extensions (e.g. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)). Local server will serve from `build` directory. To apply the script, you must specify a script in the address like `http://localhost:3000/assistant.user.js`.

To run the task of downloading the localization files, put the `.keys.json` configuration file in the `config` directory.

The configuration file looks like:

    {
        "url": "url of localizations",
        "project_id": "some id",
        "secret_key": "some key",
        "api_key": "some api key"
    }

This file will ingored with .gitignore settings for security.

For downloading and appending localizations run:

    $ gulp locales

For production build run:

    $ gulp build

It will compiling `assistant.user.js` file with minification and uglify.
