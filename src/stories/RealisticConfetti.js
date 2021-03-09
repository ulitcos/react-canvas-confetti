import React, { Component } from 'react';
import confetti from 'canvas-confetti';
import './canvasConfettiModes.css';

export default class RealisticConfetti extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.count = 200;
    this.defaults = {
      origin: { y: 0.7 }
    };
    this.fire = this.fire.bind(this);
  }

  createAnimationInstance() {
    this.animationInstance = confetti.create(this.canvasRef.current, {
      resize: true,
      useWorker: true
    })
  }

  createShot(particleRatio, opts) {
    if (!this.animationInstance) {
      this.createAnimationInstance()
    }

    this.animationInstance(Object.assign({}, this.defaults, opts, {
      particleCount: Math.floor(this.count * particleRatio)
    }));
  }

  fire() {
    this.createShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.createShot(0.2, {
      spread: 60,
    });

    this.createShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    this.createShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    this.createShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  render() {
    return (
      <>
        <div className="canvas-confetti-modes__control">
          <button className="fire" onClick={() => this.fire()}>Fire</button>
        </div>
        <canvas ref={this.canvasRef} className="canvas-confetti-modes__canvas"></canvas>
      </>
    )
  }
}