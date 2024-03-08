import React, { useCallback, useEffect, useState } from "react";
import {
  TCanvasConfettiInstance,
  TDecorateOptionsFn,
  TPresetProps,
} from "../types";
import ReactCanvasConfetti from "../index";

const DEFAULT_DECORATE_OPTIONS: TDecorateOptionsFn = (o) => o;

function Preset({
  decorateOptions = DEFAULT_DECORATE_OPTIONS,
  Conductor,
  autorun,
  onInit,
  ...rest
}: TPresetProps) {
  const [confetti, setConfetti] = useState<TCanvasConfettiInstance>();
  const initHandler = useCallback(
    ({ confetti: confettiInstance }: { confetti: TCanvasConfettiInstance }) => {
      setConfetti(() => confettiInstance);
    },
    [],
  );

  useEffect(() => {
    if (!confetti) {
      return;
    }

    const conductor = new Conductor({
      confetti,
      decorateOptions,
    });

    if (autorun) {
      conductor.run(autorun);
    }

    onInit?.({ confetti, conductor });

    return conductor.stop;
  }, [confetti]);

  return <ReactCanvasConfetti onInit={initHandler} {...rest} />;
}
export default Preset;
