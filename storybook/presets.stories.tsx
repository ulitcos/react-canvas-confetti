import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import ReactCanvasConfetti from "../src";
import FireworksPreset from "../src/presets/fireworks";
import RealisticPreset from "../src/presets/realistic";
import PridePreset from "../src/presets/pride";
import SnowPreset from "../src/presets/snow";
import ExplosionPreset from "../src/presets/explosion";
import CrossfirePreset from "../src/presets/сrossfire";

import {
  TConductorInstance,
  TDecorateOptionsFn,
  TPresetInstanceProps,
  TRunAnimationParams,
} from "../src/types/types";
import { useRef } from "react";

const meta = {
  title: "Presets",
  component: ReactCanvasConfetti,
  render: () => {
    type TPresets =
      | "Fireworks"
      | "Pride"
      | "Realistic"
      | "Snow"
      | "Explosion"
      | "Crossfire";

    const config: Record<TPresets, any> = {
      Fireworks: {
        run: { speed: 2 },
        link: linkTo("Presets", "Fireworks"),
        decorateOptions: {},
        component: FireworksPreset,
      },
      Crossfire: {
        run: { speed: 15 },
        link: linkTo("Presets", "Crossfire"),
        decorateOptions: { decay: 0.93, particleCount: 5 },
        component: CrossfirePreset,
      },
      Snow: {
        run: { speed: 30 },
        link: linkTo("Presets", "Snow"),
        decorateOptions: { colors: ["#C9DDF1"] },
        component: SnowPreset,
      },
      Realistic: {
        run: { speed: 1 },
        link: linkTo("Presets", "Realistic"),
        decorateOptions: {},
        component: RealisticPreset,
      },
      Explosion: {
        run: { speed: 10 },
        link: linkTo("Presets", "Explosion"),
        decorateOptions: {},
        component: ExplosionPreset,
      },
      Pride: {
        run: { speed: 30 },
        link: linkTo("Presets", "Pride"),
        decorateOptions: { colors: ["#bb0000", "#00ff00"] },
        component: PridePreset,
      },
    };
    const conductors = useRef<Record<string, TConductorInstance>>({});
    const onInitHandler =
      (name: string) =>
      ({ conductor }: { conductor: TConductorInstance }) => {
        conductors.current[name] = conductor;
      };

    const onMouseEnterHandler = (name: string) => () => {
      // @ts-ignore
      conductors.current[name]?.run(config[name].run);
    };

    const onMouseLeaveHandler = (name: string) => () => {
      conductors.current[name]?.pause();
    };
    return (
      <div>
        <div className={"list"}>
          {(Object.keys(config) as TPresets[]).map((item) => {
            const Component = config[item].component;
            return (
              <div
                key={item}
                className={"item"}
                onMouseEnter={onMouseEnterHandler(item)}
                onMouseLeave={onMouseLeaveHandler(item)}
                onClick={config[item].link}
              >
                <div className={"label"}>{item}</div>
                <Component
                  globalOptions={{ useWorker: false }}
                  onInit={onInitHandler(item)}
                  className={"preset"}
                  decorateOptions={(base: object) => ({
                    ...base,
                    ...config[item].decorateOptions,
                  })}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
} satisfies Meta<typeof ReactCanvasConfetti>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

export const Fireworks: StoryObj<TPresetInstanceProps["autorun"]> = {
  args: {
    speed: 3,
    duration: 3000,
    delay: 0,
  },
  argTypes: {
    speed: {
      control: "number",
    },
    duration: {
      control: "number",
    },
    delay: {
      control: "number",
    },
  },
  render: (props: TRunAnimationParams) => {
    return (
      <Wrapper
        preset={({ onInit }) => (
          <FireworksPreset onInit={onInit} className={"canvas"} />
        )}
        {...props}
      />
    );
  },
};

export const Crossfire: StoryObj<TPresetInstanceProps["autorun"]> = {
  args: {
    speed: 15,
    duration: 5000,
    delay: 0,
  },
  argTypes: {
    speed: {
      control: "number",
    },
    duration: {
      control: "number",
    },
    delay: {
      control: "number",
    },
  },
  render: (props: TRunAnimationParams) => {
    return (
      <Wrapper
        preset={({ onInit, decorateOptions }) => (
          <CrossfirePreset
            onInit={onInit}
            decorateOptions={decorateOptions}
            className={"canvas"}
          />
        )}
        {...props}
      />
    );
  },
};

export const Snow: StoryObj<TPresetInstanceProps["autorun"]> = {
  args: {
    speed: 60,
    duration: 5000,
    delay: 0,
  },
  argTypes: {
    speed: {
      control: "number",
    },
    duration: {
      control: "number",
    },
    delay: {
      control: "number",
    },
  },
  render: (props: TRunAnimationParams) => {
    return (
      <Wrapper
        preset={({ onInit, decorateOptions }) => (
          <SnowPreset
            onInit={onInit}
            decorateOptions={decorateOptions}
            className={"canvas"}
          />
        )}
        decorateOptions={(options) => ({
          ...options,
          colors: ["#C9DDF1"],
        })}
        {...props}
      />
    );
  },
};

export const Realistic: StoryObj<TPresetInstanceProps["autorun"]> = {
  args: {
    speed: 1,
    duration: 5000,
    delay: 0,
  },
  argTypes: {
    speed: {
      control: "number",
    },
    duration: {
      control: "number",
    },
    delay: {
      control: "number",
    },
  },
  render: (props: TRunAnimationParams) => {
    return (
      <Wrapper
        preset={({ onInit }) => (
          <RealisticPreset onInit={onInit} className={"canvas"} />
        )}
        {...props}
      />
    );
  },
};

export const Explosion: StoryObj<TPresetInstanceProps["autorun"]> = {
  args: {
    speed: 10,
    duration: 5000,
    delay: 0,
  },
  argTypes: {
    speed: {
      control: "number",
    },
    duration: {
      control: "number",
    },
    delay: {
      control: "number",
    },
  },
  render: (props: TRunAnimationParams) => {
    return (
      <Wrapper
        preset={({ onInit, decorateOptions }) => (
          <ExplosionPreset
            onInit={onInit}
            decorateOptions={decorateOptions}
            className={"canvas"}
          />
        )}
        {...props}
      />
    );
  },
};

export const Pride: StoryObj<TPresetInstanceProps["autorun"]> = {
  args: {
    speed: 60,
    duration: 5000,
    delay: 0,
  },
  argTypes: {
    speed: {
      control: "number",
    },
    duration: {
      control: "number",
    },
    delay: {
      control: "number",
    },
  },
  render: (props: TRunAnimationParams) => {
    return (
      <Wrapper
        preset={({ onInit, decorateOptions }) => (
          <PridePreset
            autorun={{ speed: 20 }}
            onInit={onInit}
            decorateOptions={decorateOptions}
            className={"canvas"}
          />
        )}
        decorateOptions={(options) => ({
          ...options,
          // colors: ["#bb0000", "#00ff00"],
        })}
        {...props}
      />
    );
  },
};

type TWrapperProps = TRunAnimationParams & {
  preset: (params: {
    onInit: ({ conductor }: { conductor: TConductorInstance }) => void;
    decorateOptions?: TDecorateOptionsFn;
  }) => React.ReactNode;
  decorateOptions?: TDecorateOptionsFn;
};

const Wrapper = ({
  preset,
  speed,
  duration,
  delay,
  decorateOptions,
}: TWrapperProps) => {
  const [conductor, setConductor] = React.useState<TConductorInstance>();

  const onOnce = () => {
    conductor?.shoot();
  };
  const onRun = () => {
    conductor?.run({ speed, duration, delay });
  };
  const onPause = () => {
    conductor?.pause();
  };
  const onStop = () => {
    conductor?.stop();
  };

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };
  return (
    <div>
      <div className={"controls"}>
        <button onClick={onOnce}>Once</button>
        <button onClick={onRun}>Run</button>
        <button onClick={onPause}>Pause</button>
        <button onClick={onStop}>Stop</button>
      </div>
      {preset({ onInit, decorateOptions })}
    </div>
  );
};
