# Adguard Assistant [![Build Status](https://travis-ci.org/AdguardTeam/AdguardAssistant.svg?branch=master)](https://travis-ci.org/AdguardTeam/AdguardAssistant)
> ### Disclaimer
> * We believe that all free products should be open source, and AdGuard Assistant is not an exception. Its code can be found in this repository.

AdGuard Assistant is a userscript that helps you manage filtering right from the browser. With its aid you are able to manually block any element, whitelist or report the page, or see the website's security report — all without having to leave the current page.

To get more information on AdGuard Assistant, visit our website [https://adguard.com/](https://adguard.com/adguard-assistant/overview.html#overview).

### How to report an issue?

GitHub can be used to report a bug or to submit a feature request. To do so, go to [this page](https://github.com/AdguardTeam/AdguardAssistant/issues) and click the *New issue* button.

### Our plans

To see the 'big picture', to watch current progress and to get an idea of approximate dates for upcoming AdGuard Assistant releases, see this page: https://github.com/AdguardTeam/AdguardAssistant/milestones

### Releases

You can find all AdGuard Assistant releases here: https://github.com/AdguardTeam/AdguardAssistant/releases

### Development build

Built automatically on every new commit:
https://AdguardTeam.github.io/AdguardAssistant/assistant.user.js

Unit test page for dev build is [here](https://AdguardTeam.github.io/AdguardAssistant/test/).

### How to build

For development build run:

    $ gulp dev

This will compile `assistant.user.js` file without minification.


For development build with watcher on file changes and debugging from local server run:

    $ gulp watch

This will open `http://localhost:3000` in browser for debugging with extensions (e.g. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)). Local server will serve from `build` directory. To apply the script, you must specify the script in the address, e.g. `http://localhost:3000/assistant.user.js`.

To run the task of downloading the localization files, put the `.keys.json` configuration file in the `config` directory.

The configuration file looks like:

    {
        "url": "url of localizations",
        "project_id": "some id",
        "secret_key": "some key",
        "api_key": "some api key"
    }

For security reasons, this file is ignored by .gitignore settings.

To download and append localizations run:

    $ gulp locales

Localization list is in options in `gulpfile.js`.

For production build run:

    $ gulp build

This will compile the `assistant.user.js` file with minification and uglify.

### Mobile build

Mobile build is available [here](https://AdguardTeam.github.io/AdguardAssistant/mobile/script.js).

In the mobile Assistant, the rules are specified via this function:

```
adguardAssistant.start(function(ruleText) {

});
```
