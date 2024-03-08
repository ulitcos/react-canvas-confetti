import Conductor from "../index";

class ExplosionConductor extends Conductor {
  tickAnimation = () => {
    this.confetti(
      this.decorateOptions({
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

    this.confetti(
      this.decorateOptions({
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
}

export default ExplosionConductor;
