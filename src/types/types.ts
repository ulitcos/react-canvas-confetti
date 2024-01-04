import { CSSProperties } from "react";
import {
  TCanvasConfettiAnimationOptions,
  TCanvasConfettiInstance,
  TCanvasConfettiGlobalOptions,
} from "./normalization";

export type TDecorateOptionsFn = (
  options: TCanvasConfettiAnimationOptions,
) => TCanvasConfettiAnimationOptions;

export type TGetTickAnimationFn = (
  confetti: TCanvasConfettiInstance,
  decorateOptions: TDecorateOptionsFn,
) => void;

export type TOnInitComponentFn = (params: {
  confetti: TCanvasConfettiInstance;
}) => void;
export type TOnInitPresetFn = (params: {
  confetti: TCanvasConfettiInstance;
  conductor: TConductorInstance;
}) => void;

export type TRunAnimationParams = {
  speed: number;
  duration?: number;
  delay?: number;
};

export type TReactCanvasConfettiProps = {
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  globalOptions?: TCanvasConfettiGlobalOptions;
  onInit?: TOnInitComponentFn;
};

export type TPresetInstanceProps = Omit<TReactCanvasConfettiProps, "onInit"> & {
  autorun?: TRunAnimationParams;
  decorateOptions?: TDecorateOptionsFn;
  onInit?: TOnInitPresetFn;
};

export type TPresetProps = TPresetInstanceProps & {
  getTickAnimation: TGetTickAnimationFn;
};

export type TConductorInstance = {
  run: (params: TRunAnimationParams) => void;
  shoot: () => void;
  pause: () => void;
  stop: () => void;
};

// @ts-ignore
export { TCanvasConfettiInstance } from "./normalization";
