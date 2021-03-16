import React, { Component } from 'react';
import { CreateTypes } from 'canvas-confetti';
import ReactCanvasConfetti from '../../index';
import '../canvasConfettiModes.css';

interface IRealisticConfetti { };

export default class RealisticConfetti extends Component {
  private animationInstance: CreateTypes | null = null;

  constructor(props: IRealisticConfetti) {
    super(props);
    this.fire = this.fire.bind(this);
  }

  makeShot(particleRatio: number, opts: object) {
    this.animationInstance && this.animationInstance(Object.assign({}, { origin: { y: 0.7 } }, opts, {
      particleCount: Math.floor(200 * particleRatio)
    }));
  }

  fire() {
    this.makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.makeShot(0.2, {
      spread: 60,
    });

    this.makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  render() {
    return (
      <>
        <div className="canvas-confetti-modes__control">
          <button onClick={() => this.fire()}>Fire</button>
        </div>
        <ReactCanvasConfetti
          refConfetti={(instance) => this.animationInstance = instance}
          className="canvas-confetti-modes__canvas" />
      </>
    )
  }
}
