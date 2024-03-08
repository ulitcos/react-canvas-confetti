import Conductor from "../index";

class RealisticConductor extends Conductor {
  tickAnimation = () => {
    this.confetti(
      this.decorateOptions({
        spread: 26,
        startVelocity: 55,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * 0.25),
      }),
    );
    this.confetti(
      this.decorateOptions({
        spread: 60,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * 0.2),
      }),
    );
    this.confetti(
      this.decorateOptions({
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * 0.35),
      }),
    );
    this.confetti(
      this.decorateOptions({
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * 0.1),
      }),
    );
    this.confetti(
      this.decorateOptions({
        spread: 120,
        startVelocity: 45,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * 0.1),
      }),
    );
  };
}

export default RealisticConductor;
