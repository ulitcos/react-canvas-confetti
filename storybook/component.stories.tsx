import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ReactCanvasConfetti from "../src";
import {
  TCanvasConfettiAnimationOptions,
  TCanvasConfettiInstance,
  TCanvasConfettiGlobalOptions,
} from "../src/types/normalization";
import { useEffect, useRef, useState } from "react";

type TStoryProps = TCanvasConfettiAnimationOptions &
  TCanvasConfettiGlobalOptions;

type TStoryComponent = (props: TStoryProps) => JSX.Element;

const normalizeOptions = (
  props: TStoryProps,
): {
  options: TCanvasConfettiAnimationOptions;
  globalOptions: TCanvasConfettiGlobalOptions;
} => {
  const { colors, resize, useWorker, ...rest } = props;

  return {
    options: {
      ...rest,
      colors: colors?.map((item) => COLOR_MAP[item]) as string[],
    },
    globalOptions: {
      resize,
      useWorker,
    },
  };
};

const Component = (props: TStoryProps) => {
  const { options, globalOptions } = normalizeOptions(props);
  const [prevGlobalOptions, setPrevGlobalOptions] = useState(globalOptions);
  const [needRemount, setNeedRemount] = useState(false);

  useEffect(() => {
    if (JSON.stringify(globalOptions) !== JSON.stringify(prevGlobalOptions)) {
      setNeedRemount(true);
      setTimeout(() => {
        setNeedRemount(false);
      }, 1);
    }

    setPrevGlobalOptions(globalOptions);
  });

  const instance = useRef<TCanvasConfettiInstance>();

  const onInitHandler = ({ confetti }: { confetti: TCanvasConfettiInstance }) =>
    (instance.current = confetti);

  const onShootHandler = () => {
    instance.current?.(options);
  };

  return (
    <div>
      <div className={"controls"}>
        <button onClick={onShootHandler}>Shoot</button>
      </div>
      {needRemount ? null : (
        <ReactCanvasConfetti
          globalOptions={globalOptions}
          onInit={onInitHandler}
        />
      )}
    </div>
  );
};

const COLOR_MAP: Record<string, string> = {
  blue: "#26ccff",
  purple: "#a25afd",
  red: "#ff5e7e",
  green: "#88ff5a",
  yellow: "#fcff42",
  orange: "#ffa62d",
  pink: "#ff36ff",
};

const SHAPES = ["circle", "square", "star"];

const meta = {
  title: "Component/React Canvas Confetti",
  component: Component,
  args: {
    particleCount: 500,
    angle: 90,
    spread: 360,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 600,
    origin: {
      x: 0.5,
      y: 0.5,
    },
    colors: ["blue", "purple", "red", "green", "yellow", "orange", "pink"],
    shapes: ["circle", "square"],
    scalar: 1,
    zIndex: -1,
    disableForReducedMotion: false,
    resize: true,
    useWorker: true,
  },
  argTypes: {
    particleCount: {
      control: {
        type: "range",
        min: 1,
        max: 2000,
        step: 1,
      },
    },
    angle: {
      control: {
        type: "range",
        min: 1,
        max: 360,
        step: 1,
      },
    },
    spread: {
      control: {
        type: "range",
        min: 1,
        max: 360,
        step: 1,
      },
    },
    startVelocity: {
      control: {
        type: "range",
        min: 1,
        max: 360,
        step: 1,
      },
    },
    decay: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    gravity: {
      control: {
        type: "range",
        min: -3,
        max: 3,
        step: 0.1,
      },
    },
    drift: {
      control: {
        type: "range",
        min: 1,
        max: 3,
        step: 0.1,
      },
    },
    ticks: {
      control: {
        type: "range",
        min: 1,
        max: 1000,
        step: 1,
      },
    },
    origin: {
      x: {
        control: {
          type: "range",
          min: -3,
          max: 3,
          step: 0.1,
        },
      },
      y: {
        control: {
          type: "range",
          min: -3,
          max: 3,
          step: 0.1,
        },
      },
    },
    colors: {
      control: "inline-check",
      options: Object.keys(COLOR_MAP),
    },
    shapes: {
      control: "inline-check",
      options: SHAPES,
    },
    scalar: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
    zIndex: {
      control: {
        type: "range",
        min: -1,
        max: 10,
        step: 1,
      },
    },
    disableForReducedMotion: {
      control: {
        type: "boolean",
      },
    },
    resize: {
      control: {
        type: "boolean",
      },
    },
    useWorker: {
      control: {
        type: "boolean",
      },
    },
  },
  render: Component,
} satisfies Meta<TStoryComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
