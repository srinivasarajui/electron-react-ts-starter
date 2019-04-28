# electron-react-ts-starter

## using this starter

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
The page will reload if you make edits ui folder<br>
You will also see any lint errors in the console.

### `npm release`

This build the application for release.

## Steps used to create this project

npx create-react-app electron-react-ts-starter --typescript

Clean unwanted files and fix App.tsx
-> remove app.test.tsx, logo.svg
-> Change App.tsx (remove reference from logo.svg) and App.css

create 2 new folders in src.
  -> ui
  -> electron

Move  App.tsx and App.css to ui.
Add Node modules for electron

yarn add --dev electron electron-builder concurrently wait-on
yarn add electron-is-dev cross-env

Add main.ts in electron folder

added electron-tsconfig.json
added electron-builder.yml.
changed package.json
