import { CreateTypes } from 'canvas-confetti';
import React, { Component } from 'react';
import ReactCanvasConfetti from '../../src';
import '../css/index.css';

export default class SchoolPride extends Component {
  private isAnimationEnabled: boolean;
  private animationInstance: CreateTypes | null = null;

  constructor(props: {}) {
    super(props);
    this.isAnimationEnabled = false;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  makeShot(angle: number, originX: number) {
    this.animationInstance && this.animationInstance({
      particleCount: 3,
      angle,
      spread: 55,
      origin: { x: originX },
      colors: ['#bb0000', '#ffffff'],
    });
  }

  nextTickAnimation() {
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
    this.animationInstance && this.animationInstance.reset();
  }

  handlerClickStart = () => {
    this.startAnimation();
  };

  handlerClickPause = () => {
    this.pauseAnimation();
  };

  handlerClickStop = () => {
    this.stopAnimation();
  };

  getInstance = (instance: CreateTypes | null) => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return (
      <>
        <div className="controls">
          <button onClick={this.handlerClickStart}>Start</button>
          <button onClick={this.handlerClickPause}>Pause</button>
          <button onClick={this.handlerClickStop}>Stop</button>
        </div>
        <ReactCanvasConfetti
          refConfetti={this.getInstance}
          className="canvas"
        />
      </>
    );
  }
}
