import Conductor from "../index";

class PrideConductor extends Conductor {
  tickAnimation = () => {
    this.confetti(
      this.decorateOptions({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#bb0000", "#ffffff"],
      }),
    );

    this.confetti(
      this.decorateOptions({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#bb0000", "#ffffff"],
      }),
    );
  };
}

export default PrideConductor;
