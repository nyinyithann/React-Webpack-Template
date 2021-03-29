# React Project Template with webpack, bootstrap, react-router, and axios

### Install necessary packages

- `mkdir react-webpack-template`
- `cd react-webpack-template`
- `yarn init`
- `yarn add webpack webpack-cli webpack-dev-server -D`
- `yarn add style-loader css-loader -D`
- `yarn add html-webpack-plugin clean-webpack-plugin -D`
- `yarn add dotenv-webpack webpack-merge -D`
- `yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader -D`
- `yarn add react-hot-loader -D`
- `yarn add react react-dom prop-types xpando`
- `yarn add eslint -D`
- `yarn add eslint-loader babel-eslint -D`
- `yarn add eslint-config-airbnb -D`
- `yarn global add install-peerdeps`
- `npx install-peerdeps --dev eslint-config-airbnb`
- `yarn add webpack-bundle-analyzer -D`
- `yarn add webpack-dashboard -D`
- `yarn add eslint-plugin-react-hooks -D`
- `yarn add sass-loader node-sass -D`
- `yarn add styled-components`
- `yarn add classnames`
- `yarn add stylelint -D`
- `yarn add stylelint-scss -D`
- `yarn add axios`
- `yarn add react-router`
- `yarn add react-bootstrap bootstrap`
- `yarn add copy-webpack-plugin -D`
- 'yarn add prettier -D'
- 'yarn add eslint-config-prettier eslint-plugin-prettier -D'
  <br/>

### Notes

CSS or SASS/SCSS can be used in plain or module form.

- \*.css for global style
- \*.module.css for local style
- \*.scss for global style
- \*.module.scss for local style
- styled components can alos be used. It's already in dependency list.

### Installation

- `git clone https://github.com/nyinyithann/react-webpack-template.git`
- `cd react-webpack-template`
- `yarn install`
- `yarn start`
- visit http://localhost:8080
  <br/>
- other commands
  - `yarn start:dashboard` - To run and launch the app in the default browser and show webpack dashboard in terminal
  - `yarn build` - To build the app
  - `yarn lint` - To run eslint
  - `yarn build:analyze` - To analyze the app
