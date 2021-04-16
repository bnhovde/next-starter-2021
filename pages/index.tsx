import React from 'react';

import Block from 'components/Block';
import Container from 'components/Container';

const Home: React.FC = () => {
  return (
    <Container width="wide">
      <Block top={7}>
        <h1>AppName.io</h1>
      </Block>
      <Block top={5} bottom={4}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe officiis similique
          aspernatur hic iste itaque illo eos at nemo et. A quos ullam dolorum officia inventore
          excepturi facilis ad quod?
        </p>
      </Block>
    </Container>
  );
};

export default Home;
