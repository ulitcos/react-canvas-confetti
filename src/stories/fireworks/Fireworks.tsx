import React, { Component } from 'react';
import { CreateTypes } from 'canvas-confetti';
import ReactCanvasConfetti from '../../index';
import '../canvasConfettiModes.css';

function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface IFireworks { };

export default class Fireworks extends Component {
  private isAnimationEnabled: boolean;
  private animationInstance: CreateTypes | null = null;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: IFireworks) {
    super(props);
    this.isAnimationEnabled = false;
  }

  getAnimationSettings(originXA: number, originXB: number) {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2
      }
    }
  }

  nextTickAnimation =()=> {
    this.animationInstance && this.animationInstance(this.getAnimationSettings(0.1, 0.3));
    this.animationInstance && this.animationInstance(this.getAnimationSettings(0.7, 0.9));
  }

  startAnimation() {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.intervalId = setInterval(this.nextTickAnimation, 400);
    }
  }

  pauseAnimation() {
    this.isAnimationEnabled = false;
    return this.intervalId && clearInterval(this.intervalId);
  }

  stopAnimation() {
    this.isAnimationEnabled = false;
    this.animationInstance && this.animationInstance.reset();
    return this.intervalId && clearInterval(this.intervalId);
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

  componentWillUnmount() {
    this.isAnimationEnabled = false;
    this.intervalId && clearInterval(this.intervalId);
  }

  getInstance = (instance: CreateTypes | null) => {
    this.animationInstance = instance
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


