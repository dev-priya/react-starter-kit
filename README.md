# React Starter Kit
React starter kit with [React 16](https://reactjs.org/), [styled-components](https://www.styled-components.com/), [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), [Jest](https://jestjs.io/), [Enzyme](https://github.com/airbnb/enzyme) and [ESLint](https://eslint.org/) configured out of the box for bootstrapping React projects with production ready toolchain.

It comes with example React components including a styled component and unit tests for them using Jest + Enzyme.

## Installation
### Clone the repo
```bash
git clone git@github.com:dev-priya/react-starter-kit.git
```
### Install node modules
```sh
yarn
```
Or if you prefer `npm`
```sh
npm install
```
## Development
### Run dev server
```sh
npm start
```
This starts the dev server using [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) module. This should start the dev server at http://localhost:9000
### Build production assets
```sh
npm run build
```
Builds minified production assets in `dist` directory using `Webpack`.
### Run linter
```sh
npm run lint
```
To lint and fix fixable errors
```sh
npm run lint:fix
```
Runs `ESLint` for all files within `src` directory.
### Run tests
```sh
npm run test
```
Runs test using `Jest` and `Enzyme` for all test files inside `src` directory. It also provides code coverage information using `Istanbul`. Generated coverage report can be found in `coverage` directory.
To run tests in watch mode
```sh
npm run test:watch
```
