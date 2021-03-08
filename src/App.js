import React from 'react';
import Greeting from './components/greeting/Greeting';
import styles from './app.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Greeting times={3} name="Developer" />
    </div>
  );
}

export default App;
