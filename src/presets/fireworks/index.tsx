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
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: Math.random() - 0.2,
      },
    }),
  );
  confetti(
    decorateOptions({
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(0.7, 0.9),
        y: Math.random() - 0.2,
      },
    }),
  );
};

function Fireworks(props: TPresetInstanceProps) {
  return <Preset getTickAnimation={getTickAnimation} {...props} />;
}
export default Fireworks;
