import React from "react";
import { TGetTickAnimationFn, TPresetInstanceProps } from "../../types/types";
import Preset from "../index";
import randomInRange from "../../helpers/randomInRange";

const getTickAnimation: TGetTickAnimationFn = (
  confetti,
  decorateOptions,
): void => {
  confetti(
    decorateOptions({
      particleCount: 1,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.3,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.999 - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      scalar: randomInRange(0.4, 1),
    }),
  );
};

function Snow(props: TPresetInstanceProps) {
  return <Preset getTickAnimation={getTickAnimation} {...props} />;
}
export default Snow;
