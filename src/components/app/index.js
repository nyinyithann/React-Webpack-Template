import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNavbar from '../navbar';
import About from '../pages/about';
import Home from '../pages/home';
import styles from './style.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <TopNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
