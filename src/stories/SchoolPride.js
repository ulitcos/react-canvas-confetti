import React, { Component } from 'react';
import confetti from 'canvas-confetti';
import './canvasConfettiModes.css';

export default class SchoolPride extends Component {
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

  makeShot(angle, originX) {
    this.animationInstance({
      particleCount: 3,
      angle: angle,
      spread: 55,
      origin: { x: originX },
      colors: ['#bb0000', '#ffffff']
    })
  };

  nextTickAnimation() {
    if (!this.animationInstance) {
      this.createAnimationInstance();
    }
    this.makeShot(60, 0);
    this.makeShot(120, 1);
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  }


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