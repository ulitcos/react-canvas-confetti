import React from "react";
import { TGetTickAnimationFn, TPresetInstanceProps } from "../../types";
import Preset from "../index";

const getTickAnimation: TGetTickAnimationFn = (
  confetti,
  decorateOptions,
): void => {
  confetti(
    decorateOptions({
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    }),
  );
  confetti(
    decorateOptions({
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    }),
  );
};

function Explosion(props: TPresetInstanceProps) {
  return <Preset getTickAnimation={getTickAnimation} {...props} />;
}
export default Explosion;
