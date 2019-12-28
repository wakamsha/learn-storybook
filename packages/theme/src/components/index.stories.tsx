import * as React from 'react';
import { Counter } from './Counter';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Core | utils', module)
  .add('Counter', () => (
    <Counter
      text={text('テキスト', 'hello world')}
      flag={boolean('テキスト表示', true)}
      action={action('ぽちっとな')}
    />
  ))
  .addDecorator(withInfo())
  .addDecorator(withKnobs);
