import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import styles from './style.module.scss';
import cs from 'classnames';

function DismissibleAlert() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          I am an alert of type
          <span className={styles.dangerText}>{' danger.'}</span>
        </Alert.Heading>
        <p>
          <span className={cs(styles.infoText, styles.bold)}>
            That is all I wanna say.
          </span>
        </p>
      </Alert>
    );
  }
  return (
    <Button variant="info" onClick={() => setShow(true)}>
      Show Alert
    </Button>
  );
}

export default DismissibleAlert;
