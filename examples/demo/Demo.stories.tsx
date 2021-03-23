import { shape } from 'canvas-confetti';
import {
  COLOR_MAP,
  Demo,
  // @ts-ignore
} from './Demo';

const SHAPES: shape[] = ['circle', 'square'];

export const DemoStory = Demo.bind({});
DemoStory.args = {
  particleCount: 500,
  angle: 90,
  spread: 360,
  startVelocity: 45,
  decay: 0.8,
  gravity: 1,
  drift: 0,
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

DemoStory.storyName = 'Demo';

export default {
  component: DemoStory,
  title: 'Demo',
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
    drift: {
      control: {
        type: 'range',
        min: 1,
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
