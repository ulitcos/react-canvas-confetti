import React, { Component } from 'react';
import { CreateTypes, shape } from 'canvas-confetti';
import ReactCanvasConfetti from '../../index';
import '../canvasConfettiModes.css';

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface ISnow { };

export default class Snow extends Component {
  private isAnimationEnabled: boolean;
  private animationInstance: CreateTypes | null = null;

  constructor(props: ISnow) {
    super(props);
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
      shapes: ['circle'] as shape[],
      scalar: randomInRange(0.4, 1)
    }
  }

  nextTickAnimation() {
    this.animationInstance && this.animationInstance(this.getAnimationSettings())
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
    this.animationInstance && this.animationInstance.reset();
  }

  handlerClickStart = () => {
    this.startAnimation();
  }

  handlerClickPause = () => {
    this.pauseAnimation();
  }

  handlerClickStop = () => {
    this.stopAnimation();
  }

  getInstance = (instance: CreateTypes | null) => {
    this.animationInstance = instance
  }

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return (
      <>
        <div className="canvas-confetti-modes__control">
          <button role="option" onClick={this.handlerClickStart}>Start</button>
          <button role="option" onClick={this.handlerClickPause}>Pause</button>
          <button role="option" onClick={this.handlerClickStop}>Stop</button>
        </div>
        <ReactCanvasConfetti
          refConfetti={this.getInstance}
          className="canvas-confetti-modes__canvas" />
      </>
    )
  }
}
