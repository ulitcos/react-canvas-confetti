import Conductor from "../index";
import randomInRange from "../../helpers/randomInRange";

class FireworksConductor extends Conductor {
  tickAnimation = () => {
    this.confetti(
      this.decorateOptions({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 150,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
      }),
    );

    this.confetti(
      this.decorateOptions({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 150,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
      }),
    );
  };
}

export default FireworksConductor;
