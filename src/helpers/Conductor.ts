import {
  TCanvasConfettiInstance,
  TConductorInstance,
  TDecorateOptionsFn,
  TGetTickAnimationFn,
  TRunAnimationParams,
} from "../types/types";

type TConductorOptions = {
  confetti: TCanvasConfettiInstance;
  getTickAnimation: TGetTickAnimationFn;
  decorateOptions: TDecorateOptionsFn;
};

class Conductor implements TConductorInstance {
  private interval: NodeJS.Timeout | null = null;

  private readonly confetti: TCanvasConfettiInstance;

  private readonly getTickAnimation: TGetTickAnimationFn;

  private readonly decorateOptions: TDecorateOptionsFn;

  constructor({
    confetti,
    getTickAnimation,
    decorateOptions,
  }: TConductorOptions) {
    this.confetti = confetti;
    this.getTickAnimation = getTickAnimation;
    this.decorateOptions = decorateOptions;
  }

  public shoot = () => {
    return this.getTickAnimation(this.confetti, this.decorateOptions);
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
}

export default Conductor;
