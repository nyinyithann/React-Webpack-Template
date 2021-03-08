# Basic React Project Template with webpack, babel, and eslint

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
- `yarn add webpack-dashboard -D` <br/>

### Installation

- `git clone`
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
