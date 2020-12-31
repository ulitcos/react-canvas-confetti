import { Story } from '@storybook/react/types-6-0';
import { shape } from 'canvas-confetti';
import React, {
  CSSProperties,
  useState,
} from 'react';
import ReactCanvasConfetti, { IProps } from '.';

const COLOR_MAP: Record<string, string> = {
  blue: '#26ccff',
  purple: '#a25afd',
  red: '#ff5e7e',
  green: '#88ff5a',
  yellow: '#fcff42',
  orange: '#ffa62d',
  pink: '#ff36ff',
};

const SHAPES: shape[] = ['circle', 'square'];

const styles: Record<string, CSSProperties> = {
  container: {
    position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none'
  },
  button: {
    position: 'fixed', width: '100px', height: '40px', left: '50%', bottom: '15%', marginLeft: '-50px', pointerEvents: 'auto'
  },
  canvas: {
    position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, zIndex: 1
  },
};

const SettingsTemplate: Story<IProps> = (args) => {
  const [fire, setFire] = useState<boolean | number>(false);
  const { ...props } = args;
  const colors: string[] = (args.colors || []).map<string>((color) => COLOR_MAP[color] as string);

  return (
    <div style={styles.container}>
      <button type="button" style={styles.button} onClick={setFire.bind(null, Math.random())}>Fire</button>
      <ReactCanvasConfetti {...props} fire={fire} colors={colors} style={styles.canvas} />
    </div>
  );
};

export const Settings = SettingsTemplate.bind({});
Settings.args = {
  particleCount: 500,
  angle: 90,
  spread: 360,
  startVelocity: 45,
  decay: 0.8,
  gravity: 1,
  ticks: 600,
  origin: {
    x: 0.5,
    y: 0.5,
  },
  colors: ['blue', 'purple', 'red', 'green', 'yellow', 'orange', 'pink'],
  shapes: SHAPES,
  scalar: 1,
  zIndex: -1,
  disableForReducedMotion: false,
  resize: true,
  useWorker: true,
};

export default {
  component: ReactCanvasConfetti,
  title: 'CanvasConfetti',
  argTypes: {
    particleCount: {
      control: {
        type: 'range',
        min: 1,
        max: 2000,
        step: 1,
      },
    },
    angle: {
      control: {
        type: 'range',
        min: 1,
        max: 360,
        step: 1,
      },
    },
    spread: {
      control: {
        type: 'range',
        min: 1,
        max: 360,
        step: 1,
      },
    },
    startVelocity: {
      control: {
        type: 'range',
        min: 1,
        max: 360,
        step: 1,
      },
    },
    decay: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    gravity: {
      control: {
        type: 'range',
        min: -3,
        max: 3,
        step: 0.1,
      },
    },
    ticks: {
      control: {
        type: 'range',
        min: 1,
        max: 1000,
        step: 1,
      },
    },
    origin: {
      x: {
        control: {
          type: 'range',
          min: -3,
          max: 3,
          step: 0.1,
        },
      },
      y: {
        control: {
          type: 'range',
          min: -3,
          max: 3,
          step: 0.1,
        },
      },
    },
    colors: {
      control: {
        type: 'inline-check',
        options: Object.keys(COLOR_MAP),
      },
    },
    shapes: {
      control: {
        type: 'inline-check',
        options: SHAPES,
      },
    },
    scalar: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
    zIndex: {
      control: {
        type: 'range',
        min: -1,
        max: 10,
        step: 1,
      },
    },
    disableForReducedMotion: {
      control: {
        type: 'boolean',
      },
    },
    resize: {
      control: {
        type: 'boolean',
      },
    },
    useWorker: {
      control: {
        type: 'boolean',
      },
    },
  },
};
