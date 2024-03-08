import Conductor from "../index";
import randomInRange from "../../helpers/randomInRange";

const colors = [
  "#f94144",
  "f3722c",
  "f8961e",
  "f9c74f",
  "90be6d",
  "43aa8b",
  "577590",
];

const config = [
  {
    origin: () => ({ x: randomInRange(0, 1), y: -0.1 }),
    angle: () => randomInRange(0, -180),
  },
  {
    origin: () => ({ x: randomInRange(0, 1), y: 1.1 }),
    angle: () => randomInRange(0, 180),
  },
  {
    origin: () => ({ x: -0.1, y: randomInRange(0, 1) }),
    angle: () => randomInRange(-90, 90),
  },
  {
    origin: () => ({ x: 1.1, y: randomInRange(0, 1) }),
    angle: () => randomInRange(90, 270),
  },
];

class PhotonsConductor extends Conductor {
  private tickCount: number = 0;

  private get params() {
    // eslint-disable-next-line no-plusplus
    return config[this.tickCount++ % config.length];
  }

  tickAnimation = () => {
    const colorIndex = Number(randomInRange(0, colors.length - 1).toFixed());
    const { angle, origin } = this.params!;

    this.confetti(
      this.decorateOptions({
        particleCount: 1,
        angle: angle(),
        spread: 0,
        gravity: 0,
        ticks: 600,
        decay: 1,
        startVelocity: 7,
        // @ts-ignore
        flat: true,
        origin: origin(),
        shapes: ["circle"],
        scalar: randomInRange(0.2, 6),
        colors: [colors[colorIndex]!],
      }),
    );
  };
}

export default PhotonsConductor;
