# Malafide Websites

> Blocklist for Pi-hole with fraudulent websites from the sources politie.nl/Tros opgelicht and test-aankoop.be

## [See the list here](../README.md)

## Build

This [shelljs](http://documentup.com/shelljs/shelljs) script is intended to clean the malafidewebsites list after making changes on all platforms.

Get on the command line and move into the `/malifidewebsites/build/` folder.
Run the following commands, make sure you have [NodeJs](https://nodejs.org) installed.

- `npm install`
- `npm run build` or `node prettify.js`

This will run the custom `prettify.js` script which does the following using:

- Strip all `/` characters
- Sort the list
- Remove double entries
