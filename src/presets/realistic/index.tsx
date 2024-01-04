import React from "react";
import { TGetTickAnimationFn, TPresetInstanceProps } from "../../types/types";
import Preset from "../index";

const getTickAnimation: TGetTickAnimationFn = (
  confetti,
  decorateOptions,
): void => {
  confetti(
    decorateOptions({
      spread: 26,
      startVelocity: 55,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * 0.25),
    }),
  );
  confetti(
    decorateOptions({
      spread: 60,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * 0.2),
    }),
  );
  confetti(
    decorateOptions({
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * 0.35),
    }),
  );
  confetti(
    decorateOptions({
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * 0.1),
    }),
  );
  confetti(
    decorateOptions({
      spread: 120,
      startVelocity: 45,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * 0.1),
    }),
  );
};

function Realistic(props: TPresetInstanceProps) {
  return <Preset getTickAnimation={getTickAnimation} {...props} />;
}
export default Realistic;
