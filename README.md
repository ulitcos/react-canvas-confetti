# [react-canvas-confetti](https://ulitcos.github.io/react-canvas-confetti/)

React component for [canvas-confetti library](https://github.com/catdad/canvas-confetti). In
the [demo example](https://ulitcos.github.io/react-canvas-confetti) you can play with the settings.

[![Build Status](https://travis-ci.com/ulitcos/react-canvas-confetti.svg?branch=master)](https://travis-ci.com/ulitcos/react-canvas-confetti)
![npm](https://img.shields.io/npm/dm/react-canvas-confetti)
![NPM](https://img.shields.io/npm/l/react-canvas-confetti)

![GIF-confetti](./pic/confetti-gif-800.gif)

- [Installation](#Installation)
- [Usage](#Usage)
- [API](#API)
- [Examples](#Examples)

## Installation

```bash
npm i react-canvas-confetti
```

:exclamation: It is expected that the [react](https://github.com/facebook/react) is already installed as peer
dependency.

## Usage

I highly recommend that you first familiarize yourself with
the [canvas-confetti library](https://github.com/catdad/canvas-confetti) before using this module, as most of the
parameters are the [canvas-confetti interface](https://github.com/catdad/canvas-confetti#options).

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

`confetti: (confetti: CreateTypes | null) => void` - callback for getting the canvas-confetti instance into the parent
component (see the first use case).

`fire: any` - prop for firing the animation, can be any data type set to Boolean true and different from the previous
value. Starting a new animation does not cancel the old one!

`reset: any` - prop for resetting all animations at once, can be any kind of data that casts to boolean true and differs
from the previous value.

`width: string | number` - prop is responsible for the width of the canvas. Alternative ways to control canvas sizes are
className and style props.

`height: string | number` - prop is responsible for the height of the canvas. Alternative ways to control canvas sizes
are className and style props.

`className: string` - prop to set className to canvas element

`style: CSSProperties` - prop to set style to canvas element

`onFire: () => void` - callback on start animation

`onDecay: () => void` - callback on finish animation

`onReset: () => void` - callback on resetting all animations

### Canvas-confetti props ([more details](https://github.com/catdad/canvas-confetti#options))

`particleCount: number (default: 50)` - the number of confetti to launch. More is always fun... but be cool, there's a
lot of math involved.

`angle: number (default: 90)` - the angle in which to launch the confetti, in degrees. 90 is straight up.

`spread: number (default: 45)` - how far off center the confetti can go, in degrees. 45 means the confetti will launch
at the defined angle plus or minus 22.5 degrees.

`startVelocity: number (default: 45)` - how fast the confetti will start going, in pixels.

`decay: number (default: 0.9)` - how quickly the confetti will lose speed. Keep this number between 0 and 1, otherwise
the confetti will gain speed. Better yet, just never change it.

`gravity: number (default: 1)` - how quickly the particles are pulled down. 1 is full gravity, 0.5 is half gravity,
etc., but there are no limits. You can even make particles go up if you'd like.

`drift: number (default: 0)` - how much to the side the confetti will drift. The default is 0, meaning that they will
fall straight down. Use a negative number for left and positive number for right.

`ticks: number (default: 200)` - how many times the confetti will move. This is abstract... but play with it if the
confetti disappear too quickly for you.

`origin: { x: number, y: number }` - where to start firing confetti from. Feel free to launch off-screen if you'd like.

`origin.x: number (default: 0.5)` - the x position on the page, with 0 being the left edge and 1 being the right edge.

`origin.y: number (default: 0.5)` - the y position on the page, with 0 being the top edge and 1 being the bottom edge.

`colors: Array<String>` - an array of color strings, in the HEX format... you know, like #bada55.

`shapes: Array<String>` - an array of shapes for the confetti. The possible values are square and circle. The default is
to use both shapes in an even mix. You can even change the mix by providing a value such
as ['circle', 'circle', 'square'] to use two third circles and one third squares.

`scalar: number (default: 1)` - scale factor for each confetti particle. Use decimals to make the confetti smaller. Go
on, try teeny tiny confetti, they are adorable!

`zIndex: number (default: 100)` - the confetti should be on top, after all. But if you have a crazy high page, you can
set it even higher.

`disableForReducedMotion: boolean (default: false)` - disables confetti entirely for users that prefer reduced motion.
The confetti() promise will resolve immediately in this case.

`resize: boolean (default: true)` - whether to allow setting the canvas image size, as well as keep it correctly sized
if the window changes size (e.g. resizing the window, rotating a mobile device, etc.). By default, the canvas size will
not be modified.

`useWorker: boolean (default: true)` - whether to use an asynchronous web worker to render the confetti animation,
whenever possible. This is turned off by default, meaning that the animation will always execute on the main thread. If
turned on and the browser supports it, the animation will execute off of the main thread so that it is not blocking any
other work your page needs to do. Using this option will also modify the canvas, but more on that directly below -- do
read it. If it is not supported by the browser, this value will be ignored.

## Examples

You can see live examples in the [storybook](https://ulitcos.github.io/react-canvas-confetti/).


<details>
  <summary>Fireworks</summary>

  ↳ [Functional component example](https://codesandbox.io/s/fireworks-fn-react-canvas-confetti-w594u?file=/src/App.js)

  ↳ [Class component example](https://codesandbox.io/s/fireworks-cl-react-canvas-confetti-7sgr9?file=/src/App.js)
</details>

<details>
  <summary>Realistic</summary>

  ↳ [Functional component example](https://codesandbox.io/s/realistic-fn-react-canvas-confetti-2o3pe)

  ↳ [Class component example](https://codesandbox.io/s/realistic-cl-react-canvas-confetti-kle35)
</details>

<details>
  <summary>School Pride</summary>

  ↳ [Functional component example](https://codesandbox.io/s/school-pride-fn-react-canvas-confetti-10l9n)

  ↳ [Class component example](https://codesandbox.io/s/school-pride-cl-react-canvas-confetti-93g4v)
</details>

<details>
  <summary>Snow</summary>

  ↳ [Functional component example](https://codesandbox.io/s/snow-fn-react-canvas-confetti-i3y7w)

  ↳ [Class component example](https://codesandbox.io/s/snow-cl-react-canvas-confetti-0eoqb)
</details>
