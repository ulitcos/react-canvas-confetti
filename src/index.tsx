import React, { useEffect, useRef } from "react";
import canvasConfetti from "canvas-confetti";
import {
  TCanvasConfettiInstance,
  TCanvasConfettiGlobalOptions,
} from "./types/normalization";
import { TReactCanvasConfettiProps } from "./types/types";

const DEFAULT_GLOBAL_OPTIONS: TCanvasConfettiGlobalOptions = {
  resize: true,
  useWorker: false,
};

function ReactCanvasConfetti({
  style,
  className,
  width,
  height,
  globalOptions,
  onInit,
}: TReactCanvasConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confetti = useRef<TCanvasConfettiInstance | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    confetti.current = canvasConfetti.create(canvasRef.current, {
      ...DEFAULT_GLOBAL_OPTIONS,
      ...globalOptions,
    });

    onInit?.({ confetti: confetti.current });

    return () => {
      confetti.current?.reset();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={style}
      className={className}
      width={width}
      height={height}
    />
  );
}
export default ReactCanvasConfetti;
