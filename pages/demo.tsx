import React from 'react';

import Block from 'components/Block';
import Container from 'components/Container';

const Home: React.FC = () => {
  return (
    <Container width="wide">
      <Block top={7}>
        <h1>Headline h1</h1>
        <h2>Headline h2</h2>
        <h3>Headline h3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe officiis similique
          aspernatur hic iste itaque illo eos at nemo et. A quos ullam dolorum officia inventore
          excepturi facilis ad quod?
        </p>
        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis porro id animi
            temporibus natus placeat inventore excepturi pariatur. Dolor aut eaque voluptate
            voluptates ut expedita consectetur repellendus facere aperiam.
          </strong>
        </p>
        <p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos asperiores
            facere, quidem non inventore quasi recusandae ducimus molestias mollitia modi officiis
            laudantium ut repellat est in cum consectetur voluptate!
          </small>
        </p>
      </Block>
    </Container>
  );
};

export default Home;
