import React, { Component } from 'react';
import { CreateTypes } from 'canvas-confetti';
import ReactCanvasConfetti from '../../index';
import '../canvasConfettiModes.css';

interface ISchoolPride { }

export default class SchoolPride extends Component {
  private isAnimationEnabled: boolean;
  private animationInstance: CreateTypes | null = null;

  constructor(props: ISchoolPride) {
    super(props);
    this.isAnimationEnabled = false;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  makeShot(angle: number, originX: number) {
    this.animationInstance && this.animationInstance({
      particleCount: 3,
      angle: angle,
      spread: 55,
      origin: { x: originX },
      colors: ['#bb0000', '#ffffff']
    })
  };

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
