import React from 'react';
import Head from 'next/head';

import capitalize from 'utilities/capitalize';

const DEFAULT_TAGS = {
  url: 'https://appname.io',
  title: 'Appname.io',
  description: 'Description',
  image: 'https://appname.io/images/opengraph.jpg',
};

type Props = {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  jsonLd?: string;
};

const Meta: React.FC<Props> = ({ url, title, description, image, jsonLd }) => {
  return (
    <Head>
      <title>{title ? `${capitalize(title)} - Appname.io` : DEFAULT_TAGS.title}</title>
      <meta
        name="description"
        content={description ? capitalize(description) : DEFAULT_TAGS.description}
      />
      <meta
        property="og:title"
        content={title ? capitalize(title) : DEFAULT_TAGS.title}
        key="title"
      />
      <meta
        property="og:description"
        content={description ? capitalize(description) : DEFAULT_TAGS.description}
        key="description"
      />
      <meta property="og:image" content={image || DEFAULT_TAGS.image} key="image" />
      <meta property="og:url" content={url || DEFAULT_TAGS.url} key="url" />

      {jsonLd && (
        <script
          key={`JSONLD-${title}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </Head>
  );
};

export default Meta;
