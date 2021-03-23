import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import ReactCanvasConfetti, { IProps } from '../../src';
import '../css/index.css';

export const COLOR_MAP: Record<string, string> = {
  blue: '#26ccff',
  purple: '#a25afd',
  red: '#ff5e7e',
  green: '#88ff5a',
  yellow: '#fcff42',
  orange: '#ffa62d',
  pink: '#ff36ff',
};

export const Demo: Story<IProps> = (args) => {
  const [fire, setFire] = useState<boolean | number>(false);
  const { ...props } = args;
  const colors: string[] = (args.colors || []).map<string>((color) => COLOR_MAP[color] as string);

  return (
    <>
      <div className="controls">
        <button type="button" onClick={setFire.bind(null, Math.random())}>Fire</button>
      </div>
      <ReactCanvasConfetti {...props} fire={fire} colors={colors} className="canvas" />
    </>
  );
};
