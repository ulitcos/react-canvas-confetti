import React from "react";
import { TGetTickAnimationFn, TPresetInstanceProps } from "../../types/types";
import Preset from "../index";

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getTickAnimation: TGetTickAnimationFn = (
  confetti,
  decorateOptions,
): void => {
  const gravity = 0;
  const colors = ["#E8B837"];
  const particleCount = randomInRange(13, 17);
  const spread = randomInRange(75, 85);
  const decay = randomInRange(0.97, 0.99);
  const startVelocity = randomInRange(9, 11);
  const ticks = randomInRange(40, 60);

  confetti(
    decorateOptions({
      particleCount,
      spread,
      colors,
      decay,
      startVelocity,
      ticks,
      gravity,
      angle: 45,
      origin: { x: 0, y: 1 },
    }),
  );

  confetti(
    decorateOptions({
      particleCount,
      spread,
      colors,
      decay,
      startVelocity,
      ticks,
      gravity,
      angle: -45,
      origin: { x: 0, y: 0 },
    }),
  );

  confetti(
    decorateOptions({
      particleCount,
      spread,
      colors,
      decay,
      startVelocity,
      ticks,
      gravity,
      angle: -135,
      origin: { x: 1, y: 0 },
    }),
  );

  confetti(
    decorateOptions({
      particleCount,
      spread,
      colors,
      decay,
      startVelocity,
      ticks,
      gravity,
      angle: 135,
      origin: { x: 1, y: 1 },
    }),
  );
};

function Crossfire(props: TPresetInstanceProps) {
  return <Preset getTickAnimation={getTickAnimation} {...props} />;
}
export default Crossfire;
