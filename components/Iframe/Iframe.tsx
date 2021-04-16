import React from 'react';

import styles from './Iframe.module.css';

type Props = {
  title: string;
  url: string;
};

const Iframe: React.FC<Props> = ({ title, url }) => {
  return (
    <figure className={styles.wrapper}>
      <div className={styles.inner}>
        <iframe
          height="100%"
          width="100%"
          title={title}
          className={styles.iframe}
          src={url}
          frameBorder="0"
        />
      </div>
    </figure>
  );
};

export default Iframe;
