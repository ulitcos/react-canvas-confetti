# [react-canvas-confetti](https://ulitcos.github.io/react-canvas-confetti/)

The React component for [canvas-confetti library](https://github.com/catdad/canvas-confetti). In the [demo](https://ulitcos.github.io/react-canvas-confetti) version, you can play with the settings and see examples.

![npm](https://img.shields.io/npm/dm/react-canvas-confetti) ![NPM](https://img.shields.io/npm/l/react-canvas-confetti)

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

I recommend that you first familiarize yourself with the [canvas-confetti library](https://github.com/catdad/canvas-confetti) to better understand exactly how this module works.

There are two ways to use this module:

- Working with Presets (recommended)
- Working with the [canvas-confetti library](https://github.com/catdad/canvas-confetti) instance directly

### Working with Presets

A preset is an animation template that is already ready to use. Presets allow you to customize animation settings, but do not allow you to change the animation algorithm. Using presets is an easier way to work with the module.

#### Conductor Instance

The preset working can be controlled manually using the `Conductor instance`. This object allows you to start and stop animations on demand. Conductor can be accessed in the `onInit` callback. The interface of the object is shown below:

```typescript
type TRunAnimationParams = {
  speed: number;
  duration?: number;
  delay?: number;
};

type TConductorInstance = {
  run: (params: TRunAnimationParams) => void;
  shoot: () => void;
  pause: () => void;
  stop: () => void;
};
```

### Working with the canvas-confetti instance

Working with an instance is working with the module at a lower level. This is a more powerful approach that allows you to create your own animation algorithms, but requires more effort.

#### Canvas-confetti instance

[Confetti object](https://github.com/catdad/canvas-confetti?tab=readme-ov-file#confettioptions-object--promisenull), which will be received as a result of calling the [function create](https://github.com/catdad/canvas-confetti?tab=readme-ov-file#confetticreatecanvas-globaloptions--function). Gives you full control to create your own animations. Confetti can be accessed in the `onInit` callback. The interface can be viewed [here](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/canvas-confetti/index.d.ts#L173)

## API

### Base API

The common settings are relevant for all use cases

| Name          | Type                                                                                                                   | Description                                                                                                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width         | string \| number                                                                                                       | value is responsible for the width of the canvas. Alternative ways to control canvas sizes are className and style props.                                                                                                                               |
| height        | string \| number                                                                                                       | value is responsible for the height of the canvas. Alternative ways to control canvas sizes are className and style props.                                                                                                                              |
| className     | string                                                                                                                 | value to set className to canvas element                                                                                                                                                                                                                |
| style         | CSSProperties                                                                                                          | value to set style to canvas element                                                                                                                                                                                                                    |
| globalOptions | [TGlobalOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/canvas-confetti/index.d.ts#L126) | global animation settings that cannot be changed after initialization ([details](https://github.com/catdad/canvas-confetti?tab=readme-ov-file#confetticreatecanvas-globaloptions--function))                                                            |
| onInit        | (params: {confetti: [TCanvasConfettiInstance](#canvas-confetti-instance)}) => void                                     | the callback is called when the component is mounted on the page and allows you to access confetti instance ([details](https://github.com/catdad/canvas-confetti?tab=readme-ov-file#confettioptions-object--promisenull)) for manual animation creation |

### Advanced API

Advanced settings only work for presets!

| Name            | Type                                                                                                                                                                                                                                          | Description                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| autorun         | { speed: number; duration?: number; delay?: number; }                                                                                                                                                                                         | if it is passed, it automatically starts the animation when mounting the component on the page                                              |
| decorateOptions | (options: [TOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/canvas-confetti/index.d.ts#L39)) => [TOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/canvas-confetti/index.d.ts#L39) | the callback allows you to customize the animation settings and is called for each step of the animation                                    |
| onInit          | (params: { confetti: [TCanvasConfettiInstance](#canvas-confetti-instance); conductor: [TConductorInstance](#conductor-instance) }) => void                                                                                                    | the callback is called when the component is mounted on the page and allows you to access objects for manual creation and animation control |
