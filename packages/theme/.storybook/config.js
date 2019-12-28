import { addParameters, configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { themes } from '@storybook/theming';

const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    hierarchySeparator: '/',
    theme: {
      base: 'light',
      fontBase: '"Open Sans", sans-serif',
      brandTitle: 'WAKAMSHA Catalog',
      brandUrl: '/',
      // brandImage: 'https://wakamsha.net/assets/images/logo-wakamsha@500.jpg',
    },
  },
});

setDefaults({
  inline: true,
  styles: {
    infoBody: {
      color: '#474a5e',
      padding: 0,
    },
    infoStory: {
      paddingBottom: '2em',
      borderBottom: '1px solid rgba(0, 0, 0, .1)',
    },
    header: {
      body: {
        margin: `0 0 32px`,
        padding: 0,
        border: 'none',
      },
      h1: {
        margin: 0,
        padding: 0,
        fontSize: '12px',
        fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
      },
      h2: {
        margin: 0,
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: 1.6,
      },
    },
    source: {
      h1: {
        margin: '2em 0 0.5em',
        fontSize: '18px',
        fontWeight: 500,
        borderBottom: 'none',
      },
    },
    propTableHead: {
      margin: '1em 0 0.5em',
      fontSize: '16px',
      fontWeight: 500,
    },
  },
});

configure(loadStories, module);
