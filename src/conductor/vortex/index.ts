import Conductor from "../index";

const angels = [0, -45, -90, -135, -180, -225, -270, -315];

class VortexConductor extends Conductor {
  private tickCount: number = 0;

  private get angle() {
    // eslint-disable-next-line no-plusplus
    return angels[this.tickCount++ % angels.length];
  }

  tickAnimation = () => {
    this.confetti(
      this.decorateOptions({
        spread: 120,
        ticks: 60,
        gravity: 0,
        decay: 0.94,
        startVelocity: 20,
        colors: ["004e64", "00a5cf", "#9fffcb", "#25a18e", "#7ae582"],
        particleCount: 60,
        shapes: ["circle", "square"],
        angle: this.angle,
      }),
    );
  };
}

export default VortexConductor;
