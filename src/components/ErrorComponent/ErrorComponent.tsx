
import React from 'react';
import styles from './ErrorComponent.module.scss';

interface ErrorComponentProps {
  message?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message = 'Something Went Wrong' }) => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
