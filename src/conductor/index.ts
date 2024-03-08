import {
  TCanvasConfettiInstance,
  TConductorInstance,
  TConductorOptions,
  TDecorateOptionsFn,
  TRunAnimationParams,
} from "../types";

abstract class Conductor implements TConductorInstance {
  private interval: NodeJS.Timeout | null = null;

  protected readonly confetti: TCanvasConfettiInstance;

  protected readonly decorateOptions: TDecorateOptionsFn;

  constructor({ confetti, decorateOptions }: TConductorOptions) {
    this.confetti = confetti;
    this.decorateOptions = decorateOptions;
  }

  public shoot = () => {
    return this.tickAnimation();
  };

  public run = ({ speed, delay = 0, duration }: TRunAnimationParams) => {
    if (this.interval) {
      return;
    }

    setTimeout(() => {
      this.shoot();
      this.interval = setInterval(this.shoot, 1000 / Math.min(speed, 1000));

      if (duration) {
        setTimeout(this.pause, duration);
      }
    }, delay);
  };

  public pause = () => {
    clearInterval(this.interval!);
    this.interval = null;
  };

  public stop = () => {
    this.pause();
    this.confetti.reset();
  };

  abstract tickAnimation: () => void;
}

export default Conductor;
