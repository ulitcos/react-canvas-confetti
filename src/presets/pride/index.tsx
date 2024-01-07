import React from "react";
import { TGetTickAnimationFn, TPresetInstanceProps } from "../../types";
import Preset from "../index";

const getTickAnimation: TGetTickAnimationFn = (
  confetti,
  decorateOptions,
): void => {
  confetti(
    decorateOptions({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#bb0000", "#ffffff"],
    }),
  );
  confetti(
    decorateOptions({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#bb0000", "#ffffff"],
    }),
  );
};

function Pride(props: TPresetInstanceProps) {
  return <Preset getTickAnimation={getTickAnimation} {...props} />;
}
export default Pride;
