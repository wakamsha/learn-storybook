import * as React from 'react';
import { Counter } from './Counter';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Components', module);
stories
  .add('Counter', () => <Counter text="hello world" flag={false} action={action('ぽちっとな')} />)
  .addDecorator(withInfo({ inline: true }));
