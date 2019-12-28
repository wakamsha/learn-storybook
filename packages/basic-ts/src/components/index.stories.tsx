import * as React from 'react';
import { Counter } from './Counter';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Components', module)
  .add('Counter', () => (
    <Counter text={text('テキスト', 'hello')} flag={boolean('テキスト表示', false)} action={action('ぽちっとな')} />
  ))
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(withKnobs);
