import React from 'react';
import PropTypes from 'prop-types';
import { Vec } from 'xpando';
import styles from './Greeting.module.scss';
import dev from '../../assets/images/developer.png';

function Greeting({ name, times }) {
  return (
    <div className={styles.greetingContainer}>
      <div className={styles.greetingHeader}>
        <img src={dev} alt="dev" />
        <h3>{`Hello, ${name}`}</h3>
        <img src={dev} alt="dev" />
      </div>
      <div className={styles.wish}>
        {Vec.init(times, (idx) => <div key={idx}>Dream Big. Sparkle More. Shine Bright</div>)}
      </div>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  times: PropTypes.number.isRequired,
};

export default Greeting;
