# Unity Design System

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

## Getting Started

1. Install yarn
2. Install lerna
3. Run `lerna bootstrap`

You can now develop on each package. Run `npm run docz:dev` to generate the Design System docs.

### unity-email

The unity-email package has a special build that you can run to generate example HTML files:

1. `npm run examples:dev`
2. Open the `/dist` folder
3. You can open any generated .html file to preview what emails will look like

## Contributing

### Publishing

Run `npm run release` to lint, run tests, and publish the packages.
