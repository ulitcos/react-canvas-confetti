import Conductor from "../index";
import randomInRange from "../../helpers/randomInRange";

class CrossfireConductor extends Conductor {
  tickAnimation = () => {
    const gravity = 0;
    const colors = ["#E8B837"];
    const particleCount = randomInRange(13, 17);
    const spread = randomInRange(75, 85);
    const decay = randomInRange(0.97, 0.99);
    const startVelocity = randomInRange(9, 11);
    const ticks = randomInRange(40, 60);

    this.confetti(
      this.decorateOptions({
        particleCount,
        spread,
        colors,
        decay,
        startVelocity,
        ticks,
        gravity,
        angle: 45,
        origin: { x: 0, y: 1 },
      }),
    );

    this.confetti(
      this.decorateOptions({
        particleCount,
        spread,
        colors,
        decay,
        startVelocity,
        ticks,
        gravity,
        angle: -45,
        origin: { x: 0, y: 0 },
      }),
    );

    this.confetti(
      this.decorateOptions({
        particleCount,
        spread,
        colors,
        decay,
        startVelocity,
        ticks,
        gravity,
        angle: -135,
        origin: { x: 1, y: 0 },
      }),
    );

    this.confetti(
      this.decorateOptions({
        particleCount,
        spread,
        colors,
        decay,
        startVelocity,
        ticks,
        gravity,
        angle: 135,
        origin: { x: 1, y: 1 },
      }),
    );
  };
}

export default CrossfireConductor;
