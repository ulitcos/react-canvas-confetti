import Conductor from "../index";
import randomInRange from "../../helpers/randomInRange";

class SnowConductor extends Conductor {
  tickAnimation = () => {
    this.confetti(
      this.decorateOptions({
        particleCount: 1,
        startVelocity: 0,
        ticks: 200,
        gravity: 0.3,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.999 - 0.2,
        },
        colors: ["#ffffff"],
        shapes: ["circle"],
        scalar: randomInRange(0.4, 1),
      }),
    );
  };
}

export default SnowConductor;
