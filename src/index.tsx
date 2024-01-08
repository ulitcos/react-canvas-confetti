import React, { CSSProperties, useEffect, useRef } from "react";
import canvasConfetti from "canvas-confetti";
import {
  TCanvasConfettiInstance,
  TCanvasConfettiGlobalOptions,
} from "./types/normalization";
import { TReactCanvasConfettiProps } from "./types";

const DEFAULT_GLOBAL_OPTIONS: TCanvasConfettiGlobalOptions = {
  resize: true,
  useWorker: false,
};

const DEFAULT_STYLE: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  zIndex: -1,
  top: 0,
  left: 0,
};

function getFinalStyle(style?: CSSProperties, className?: string) {
  if (!style && !className) {
    return DEFAULT_STYLE;
  }

  return style;
}

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
      style={getFinalStyle(style, className)}
      className={className}
      width={width}
      height={height}
    />
  );
}
export default ReactCanvasConfetti;
