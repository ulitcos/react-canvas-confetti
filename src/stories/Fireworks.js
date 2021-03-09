import React, { Component } from 'react';
import confetti from 'canvas-confetti';
import './canvasConfettiModes.css';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Fireworks extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.isAnimationEnabled = false;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  createAnimationInstance() {
    this.animationInstance = confetti.create(this.canvasRef.current, {
      resize: true,
      useWorker: true
    })
  }

  getAnimationSettings(...originX) {
    return Object.assign({},
      {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 150,
        origin: {
          x: randomInRange(...originX),
          y: Math.random() - 0.2
        }
      })
  }

  nextTickAnimation() {
    if (!this.animationInstance) {
      this.createAnimationInstance()
    }
    this.animationInstance(this.getAnimationSettings(0.1, 0.3));
    this.animationInstance(this.getAnimationSettings(0.7, 0.9));
  }

  startAnimation() {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.intervalId = setInterval(this.nextTickAnimation, 400);
    }
  }

  pauseAnimation() {
    this.isAnimationEnabled = false;
    return clearInterval(this.intervalId);
  }

  stopAnimation() {
    this.isAnimationEnabled = false;
    this.animationInstance.reset();
    return clearInterval(this.intervalId);
  }

  componentWillUnmount() {
    this.isAnimationEnabled = false;
    clearInterval(this.intervalId);
  }

  static getDerivedStateFromError(error) {

    return {hasError:true};
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
