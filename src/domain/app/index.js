import React from 'react';
import Greeting from '../../components/greeting';
import styles from './style.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Greeting times={3} name="Developer" />
    </div>
  );
}

export default App;
