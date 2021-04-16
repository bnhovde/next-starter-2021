import React from 'react';

// Import global styles
import '../styles/index.css';

// Import storybook styles
import '!style-loader!css-loader!./styles.css';

// Import helpers
import { outlineWatcher } from '../utilities/a11y';

outlineWatcher();

export const parameters = {
  options: {
    storySort: {
      order: ['Base', ['Intro', 'Colors', 'Typography'], 'Layout', 'Components'],
    },
  },
}