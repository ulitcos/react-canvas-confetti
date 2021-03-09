import React, { Component } from 'react';
import confetti from 'canvas-confetti';
import './canvasConfettiModes.css'

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Snow extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.isAnimationEnabled = false;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  getAnimationSettings() {
    return {
      particleCount: 1,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.3,
      origin: {
        x: Math.random(),
        y: (Math.random() * 0.999) - 0.2
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      scalar: randomInRange(0.4, 1)
    }
  }

  createAnimationInstance() {
    this.animationInstance = confetti.create(this.canvasRef.current, {
      resize: true,
      useWorker: true
    })
  }

  nextTickAnimation() {
    if (!this.animationInstance) {
      this.createAnimationInstance();
    }
    this.animationInstance(this.getAnimationSettings())
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  };

  startAnimation() {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
    }
  }

  pauseAnimation() {
    this.isAnimationEnabled = false;
  }

  stopAnimation() {
    this.isAnimationEnabled = false;
    this.animationInstance.reset();
  }

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return (
      <>
        <div className="canvas-confetti-modes__control">
          <button role="option" onClick={() => this.startAnimation()}>Start</button>
          <button role="option" onClick={() => this.pauseAnimation()}>Pause</button>
          <button role="option" onClick={() => this.stopAnimation()}>Stop</button>
        </div>
        <canvas ref={this.canvasRef} className="canvas-confetti-modes__canvas"></canvas>
      </>
    )
  }
}