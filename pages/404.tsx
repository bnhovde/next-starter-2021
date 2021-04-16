import React from 'react';

import Container from 'components/Container';
import Block from 'components/Block';
import Link from 'components/Link';

const NotFoundPage: React.FC = () => {
  return (
    <Container width="wide">
      <Block top={7} align="center">
        <h1>404 - Siden finnes ikke</h1>
      </Block>
      <Block top={5} bottom={4} align="center">
        <Link href="/">Gå til landingssiden</Link>
      </Block>
    </Container>
  );
};

export default NotFoundPage;
