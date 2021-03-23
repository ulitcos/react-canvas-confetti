# [react-canvas-confetti](https://ulitcos.github.io/react-canvas-confetti/)
React component for [canvas-confetti library](https://github.com/catdad/canvas-confetti). In the [demo example](https://ulitcos.github.io/react-canvas-confetti) you can play with the settings.

[![Build Status](https://travis-ci.com/ulitcos/react-canvas-confetti.svg?branch=master)](https://travis-ci.com/ulitcos/react-canvas-confetti)

![GIF-confetti](./pic/confetti-gif-800.gif)

- [Installation](#Installation)
- [Usage](#Usage)
- [API](#API)
- [Examples](#Examples)

## Installation
```bash
npm i react-canvas-confetti
```
:exclamation: It is expected that the [react](https://github.com/facebook/react) is already installed as peer dependency.

## Usage
I highly recommend that you first familiarize yourself with the [canvas-confetti library](https://github.com/catdad/canvas-confetti) before using this module, as most of the parameters are the [canvas-confetti interface](https://github.com/catdad/canvas-confetti#options).

There are two use cases for react-canvas-confetti:

<details>
<summary>
<b>1. Working with instance of canvas-confetti.</b> Get an instance of canvas-confetti using the `confetti` prop and work with it directly. With this approach, you will need to use prop confetti to get a canvas-confetti instance for subsequent work with it and <b>refuse to use props</b> <i>fire</i>, <i>reset</i>, <i>onFire</i>, <i>onDecay</i>, <i>onReset</i>. <mark>[click to show example]</mark>
</summary>

````javascript
import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

export default class Confetti extends React.Component {
  getInstance = (instance) => {
    // saving the instance to an internal property
    this.confetti = instance;
  }

  onClickDefault = () => {
    // starting the animation
    this.confetti();
  }

  onClickCustom = () => {
    // starting the animation with custom settings
    this.confetti({particleCount: Math.ceil(Math.random() * 1000), spread: 180});
  }

  onClickCallback = () => {
    // calling console.log after the animation ends
    this.confetti().then(() => {
      console.log('do something after animation');
    });
  }

  onClickReset = () => {
    // cleaning the canvas
    this.confetti.reset();
  }

  render() {
    const style = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: -1
    };

    return (
      <>
        <ReactCanvasConfetti
          // set the styles as for a usual react component
          style={style}
          // set the class name as for a usual react component
          className={'yourClassName'}
          // set the callback for getting instance. The callback will be called after initialization ReactCanvasConfetti component
          refConfetti={this.getInstance}
        />

        <button onClick={this.onClickDefault}>Fire with default</button>
        <button onClick={this.onClickCustom}>Fire with custom</button>
        <button onClick={this.onClickCallback}>Fire with callback</button>
        <button onClick={this.onClickReset}>Reset</button>
      </>
    );
  }
}

````
</details>

<details>
<summary>
<b>2. Working with props of react-canvas-confetti.</b> Control the component by throwing all the props from above. With this approach, you don't need to work with the canvas-confetti instance directly. You can organize all the logic through a <b>set of props</b> <i>fire</i>, <i>reset</i>, <i>onFire</i>, <i>onDecay</i>, <i>onReset</i>. <mark>[click to show example]</mark>
</summary>

````javascript
import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

export default class Confetti extends React.Component {
  constructor() {
    super();

    this.state = {
      fire: false,
      reset: false
    }
  }

  onClickFire = () => {
    // set any value that is cast to the logical true and will differ from the previous one.
    this.setState({fire: {}});
  }

  onClickReset = () => {
    // set any value that is cast to the logical true and will differ from the previous one.
    this.setState({reset: {}});
  }

  onFire = () => {
    console.log('do something after fire')
  }

  onReset = () => {
    console.log('do something after reset')
  }

  onDecay = () => {
    console.log('do something after animation')
  }

  render() {
    const style = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: -1
    };

    return (
      <>
        <ReactCanvasConfetti
          // set the styles as for a usual react component
          style={style}
          // set the class name as for a usual react component
          className={'yourClassName'}
          // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
          fire={this.state.fire}
          // if value in this.state.reset cast to the logical true and will differ from the previous, then will be cleared canvas
          reset={this.state.reset}
          // set the callback on new animation
          onFire={this.onFire}
          // set the callback on decay animation
          onDecay={this.onDecay}
          // set the callback on reset canvas
          onReset={this.onReset}
        />

        <button onClick={this.onClickFire}>Fire</button>
        <button onClick={this.onClickReset}>Reset</button>
      </>
    );
  }
}
````
</details>

## API
### Component props
`confetti: (confetti: CreateTypes | null) => void` - callback for getting the canvas-confetti instance into the parent component (see the first use case).

`fire: any` - prop for firing the animation, can be any data type set to Boolean true and different from the previous value. Starting a new animation does not cancel the old one! 

`reset: any` - prop for resetting all animations at once, can be any kind of data that casts to boolean true and differs from the previous value.

`width: string | number` - prop is responsible for the width of the canvas. Alternative ways to control canvas sizes are className and style props.

`height: string | number` - prop is responsible for the height of the canvas. Alternative ways to control canvas sizes are className and style props.

`className: string` - prop to set className to canvas element

`style: CSSProperties` - prop to set style to canvas element

`onFire: () => void` - callback on start animation

`onDecay: () => void` - callback on finish animation

`onReset: () => void` - callback on resetting all animations

### Canvas-confetti props ([more details](https://github.com/catdad/canvas-confetti#options))
`particleCount: number (default: 50)` - the number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.

`angle: number (default: 90)` - the angle in which to launch the confetti, in degrees. 90 is straight up.

`spread: number (default: 45)` - how far off center the confetti can go, in degrees. 45 means the confetti will launch at the defined angle plus or minus 22.5 degrees.

`startVelocity: number (default: 45)` - how fast the confetti will start going, in pixels.

`decay: number (default: 0.9)` - how quickly the confetti will lose speed. Keep this number between 0 and 1, otherwise the confetti will gain speed. Better yet, just never change it.

`gravity: number (default: 1)` - how quickly the particles are pulled down. 1 is full gravity, 0.5 is half gravity, etc., but there are no limits. You can even make particles go up if you'd like.

`drift: number (default: 0)` - how much to the side the confetti will drift. The default is 0, meaning that they will fall straight down. Use a negative number for left and positive number for right.

`ticks: number (default: 200)` - how many times the confetti will move. This is abstract... but play with it if the confetti disappear too quickly for you.

`origin: { x: number, y: number }` - where to start firing confetti from. Feel free to launch off-screen if you'd like.

`origin.x: number (default: 0.5)` - the x position on the page, with 0 being the left edge and 1 being the right edge.

`origin.y: number (default: 0.5)` - the y position on the page, with 0 being the top edge and 1 being the bottom edge.

`colors: Array<String>` - an array of color strings, in the HEX format... you know, like #bada55.

`shapes: Array<String>` - an array of shapes for the confetti. The possible values are square and circle. The default is to use both shapes in an even mix. You can even change the mix by providing a value such as ['circle', 'circle', 'square'] to use two third circles and one third squares.

`scalar: number (default: 1)` - scale factor for each confetti particle. Use decimals to make the confetti smaller. Go on, try teeny tiny confetti, they are adorable!

`zIndex: number (default: 100)` - the confetti should be on top, after all. But if you have a crazy high page, you can set it even higher.

`disableForReducedMotion: boolean (default: false)` - disables confetti entirely for users that prefer reduced motion. The confetti() promise will resolve immediately in this case.

`resize: boolean (default: true)` - whether to allow setting the canvas image size, as well as keep it correctly sized if the window changes size (e.g. resizing the window, rotating a mobile device, etc.). By default, the canvas size will not be modified.

`useWorker: boolean (default: true)` - whether to use an asynchronous web worker to render the confetti animation, whenever possible. This is turned off by default, meaning that the animation will always execute on the main thread. If turned on and the browser supports it, the animation will execute off of the main thread so that it is not blocking any other work your page needs to do. Using this option will also modify the canvas, but more on that directly below -- do read it. If it is not supported by the browser, this value will be ignored.

## Examples
You can see live examples in the [storybook](https://ulitcos.github.io/react-canvas-confetti/).

<details>
  <summary>Fireworks</summary>

````javascript
import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

export default class Fireworks extends React.Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
    this.intervalId = null;
  }

  getAnimationSettings(originXA, originXB) {
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

  getInstance = (instance) => {
    this.animationInstance = instance
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handlerClickStart}>Start</button>
          <button onClick={this.handlerClickPause}>Pause</button>
          <button onClick={this.handlerClickStop}>Stop</button>
        </div>
        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles}/>
      </>
    );
  }
}

````
</details>

<details>
  <summary>Realistic</summary>

````javascript
import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

export default class Realistic extends React.Component {
  constructor(props) {
    super(props);
    this.animationInstance = null;
  }

  makeShot = (particleRatio, opts) => {
    this.animationInstance && this.animationInstance({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    });
  }

  fire = () => {
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
      scalar: 0.8,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  handlerFire = () => {
    this.fire();
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  render() {
    return (
      <>
        <button onClick={this.handlerFire}>Fire</button>
        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles}/>
      </>
    );
  }
}
````
</details>

<details>
  <summary>School Pride</summary>

````javascript
import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

export default class SchoolPride extends React.Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  makeShot = (angle, originX) => {
    this.animationInstance && this.animationInstance({
      particleCount: 3,
      angle,
      spread: 55,
      origin: { x: originX },
      colors: ['#bb0000', '#ffffff'],
    });
  }

  nextTickAnimation = () => {
    this.makeShot(60, 0);
    this.makeShot(120, 1);
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  }

  startAnimation = () => {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
    }
  }

  pauseAnimation = () => {
    this.isAnimationEnabled = false;
  }

  stopAnimation = () => {
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

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handlerClickStart}>Start</button>
          <button onClick={this.handlerClickPause}>Pause</button>
          <button onClick={this.handlerClickStop}>Stop</button>
        </div>
        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles}/>
      </>
    );
  }
}
````
</details>

<details>
  <summary>Snow</summary>

````javascript
import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

export default class Snow extends React.Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
  }

  getAnimationSettings() {
    return {
      particleCount: 1,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.3,
      origin: {
        x: Math.random(),
        y: (Math.random() * 0.999) - 0.2,
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      scalar: randomInRange(0.4, 1),
    };
  }

  nextTickAnimation = () => {
    this.animationInstance && this.animationInstance(this.getAnimationSettings());
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  }

  startAnimation = () => {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
    }
  }

  pauseAnimation = () => {
    this.isAnimationEnabled = false;
  }

  stopAnimation = () => {
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

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handlerClickStart}>Start</button>
          <button onClick={this.handlerClickPause}>Pause</button>
          <button onClick={this.handlerClickStop}>Stop</button>
        </div>
        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles}/>
      </>
    );
  }
}
````
</details>
