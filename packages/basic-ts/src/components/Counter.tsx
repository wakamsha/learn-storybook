import * as React from 'react';

export type Props = {
  /** 表示するテキスト */
  text: string;
  /**
   * true: テキスト表示 false: テキスト非表示
   * @default false
   */
  flag?: boolean;
  /** ボタンを押した時のイベントハンドラ */
  action(): void;
};

export const Counter = ({ text, flag = false, action }: Props) => {
  const [count, setCount] = React.useState(0);
  const handleClickCountUp = React.useCallback(() => setCount(state => state + 1), []);
  const handleClickCountDown = React.useCallback(() => setCount(state => state - 1), []);

  return (
    <div>
      {flag ? <p>{text}</p> : null}
      <button onClick={action}>ボタン</button>
      <p>count: {count}</p>
      <button onClick={handleClickCountUp}>+</button>
      <button onClick={handleClickCountDown}>-</button>
    </div>
  );
};
