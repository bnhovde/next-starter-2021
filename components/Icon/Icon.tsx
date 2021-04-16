import React from 'react';
import classNames from 'classnames';

import iconTypes from 'constants/icons';

import styles from './Icon.module.css';

type Props = {
  type?: string;
  name?: string;
  inverted?: boolean;
  padded?: boolean;
  paddedExtra?: boolean;
  size?: 'tiny' | 'small' | 'regular' | 'large' | undefined;
};

const sizeMap = {
  tiny: 16,
  small: 24,
  regular: 32,
  large: 40,
};

const Icon: React.FC<Props> = ({ type, size, name, padded, inverted, paddedExtra }) => {
  const iconClass = classNames({
    [styles['icon']]: true,
    [styles[`-size-${size}`]]: size,
    [styles['-inverted']]: inverted,
    [styles['-padded']]: padded,
    [styles['-padded-extra']]: paddedExtra,
  });

  const match = Object.keys(iconTypes).find((i) => i === type);
  const baseUrl = `https://cdnurl.io/${process.env.BUCKET_ID}/`;
  const widthParam = size ? sizeMap[size] : 32;

  console.log(match);

  return (
    <div className={iconClass}>
      {match && (
        <img
          key={type}
          width={widthParam}
          height={widthParam}
          draggable="false"
          src={`${baseUrl}/${iconTypes[match]}`}
          alt={name || ''}
        />
      )}
      {!match && <div className={styles.placeholder} />}
    </div>
  );
};

export default Icon;
