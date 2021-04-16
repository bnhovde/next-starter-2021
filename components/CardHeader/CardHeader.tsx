import React from 'react';

import Link from 'components/Link';

import styles from './CardHeader.module.css';
import LinkButton from 'components/LinkButton';

type Props = {
  title: string;
  linkText?: string;
  linkUrl?: string;
  buttonText?: string;
  buttonAction?: () => void;
};

const CardHeader: React.FC<Props> = ({ title, linkText, linkUrl, buttonText, buttonAction }) => {
  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      {linkText && <Link href={linkUrl || '/'}>{linkText}</Link>}
      {buttonText && <LinkButton onClick={buttonAction}>{buttonText}</LinkButton>}
    </div>
  );
};

export default CardHeader;
