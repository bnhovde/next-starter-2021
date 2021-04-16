import React from 'react';

import Link from 'components/Link';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/" block>
            <p className="sr">Home</p>
            <p>AppName.io</p>
          </Link>
        </div>
        <div className={styles.actions}>
          <Link href="/login" block>
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
