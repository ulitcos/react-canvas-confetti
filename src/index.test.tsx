import canvasConfetti, { CreateTypes } from 'canvas-confetti';
import React from 'react';
import {
  render,
  unmountComponentAtNode,
} from 'react-dom';
import ReactCanvasConfetti from './index';

jest.mock('canvas-confetti', () => ({
  create() {
    const fire = jest.fn(() => {}) as jest.Mock & { reset: () => void };
    fire.reset = jest.fn(() => {});
    return fire;
  },
}));

let container: HTMLDivElement = document.createElement('div');
let refConfetti: CreateTypes | null = null;
const createSpy = jest.spyOn(canvasConfetti, 'create');
const setRefConfetti = (ref: CreateTypes | null) => {
  refConfetti = ref;
};
const props = {
  width: 100,
  height: 200,
  className: 'customClassName',
  style: { opacity: '0.5' },
  refConfetti: setRefConfetti,
  onFire: jest.fn(() => {}),
  onReset: jest.fn(() => {}),
};

describe('ReactCanvasConfetti', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    createSpy.mockClear();
  });

  test('Should create canvas dom node', () => {
    render(<ReactCanvasConfetti {...props} />, container);

    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBe(null);
    expect(canvas!.height).toEqual(props.height);
    expect(canvas!.width).toEqual(props.width);
    expect(canvas!.style.opacity).toEqual(props.style.opacity);
    expect(canvas!.classList.contains(props.className)).toBeTruthy();
  });

  test('Should set up ref to confetti instance', () => {
    expect(createSpy).toHaveBeenCalledTimes(0);

    render(<ReactCanvasConfetti refConfetti={setRefConfetti} />, container);

    expect(createSpy).toHaveBeenCalledTimes(1);
    expect(typeof refConfetti === 'function').toBeTruthy();
    expect(typeof refConfetti!.reset === 'function').toBeTruthy();
  });

  test('Should be called with correct arguments', () => {
    expect(createSpy).toHaveBeenCalledTimes(0);

    render(<ReactCanvasConfetti refConfetti={setRefConfetti} />, container);
    render(<ReactCanvasConfetti {...props} fire={{}} angle={45} />, container);
    render(<ReactCanvasConfetti {...props} fire={{}} angle={45} spread={180} />, container);
    render(<ReactCanvasConfetti {...props} reset={{}} />, container);

    const refConfettiMock = ((refConfetti as unknown) as jest.Mock).mock;

    expect(refConfetti).toHaveBeenCalledTimes(2);
    expect(refConfettiMock.calls[0][0]).toEqual({ angle: 45 });
    expect(refConfettiMock.calls[1][0]).toEqual({ angle: 45, spread: 180 });
    expect(refConfetti!.reset).toHaveBeenCalledTimes(1);
    expect(props.onFire).toHaveBeenCalledTimes(2);
    expect(props.onReset).toHaveBeenCalledTimes(1);
    expect(createSpy).toHaveBeenCalledTimes(1);
  });
});

export {};
