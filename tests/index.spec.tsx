import * as React from "react";
import { render, screen } from "@testing-library/react";
import * as canvasConfetti from "canvas-confetti";
import ReactCanvasConfetti from "../src";
import Preset from "../src/presets";
import Conductor from "../src/conductor";

const getCanvasElement = () =>
  screen.getByText((_, element) => element?.tagName.toLowerCase() === "canvas");

const getTickAnimation = jest.fn();
const decorateOptions = jest.fn();
const conductorInstance = { run: jest.fn() };

jest.mock("canvas-confetti");
jest.mock("../src/conductor", () =>
  jest.fn().mockImplementation(() => conductorInstance),
);

beforeEach(() => {
  (canvasConfetti.create as jest.Mock).mockClear();
  getTickAnimation.mockClear();
  decorateOptions.mockClear();
  conductorInstance.run.mockClear();
});
describe("Component", () => {
  describe("Init", () => {
    it("should render canvas", () => {
      render(<ReactCanvasConfetti />);
      const canvas = getCanvasElement();
      expect(canvas).toBeInstanceOf(HTMLCanvasElement);
    });
    it("should init correctly with default options", () => {
      render(<ReactCanvasConfetti />);
      const canvas = getCanvasElement();
      const { mock: confetti } = canvasConfetti.create as jest.Mock;

      expect(canvasConfetti.create).toBeCalledTimes(1);

      expect(confetti.calls[0][0]).toEqual(canvas);
      expect(confetti.calls[0][1]).toEqual({
        resize: true,
        useWorker: false,
      });
    });

    it("should init correctly with global options", () => {
      render(
        <ReactCanvasConfetti
          globalOptions={{
            resize: false,
            useWorker: true,
            disableForReducedMotion: true,
          }}
        />,
      );
      const canvas = getCanvasElement();
      const { mock: confetti } = canvasConfetti.create as jest.Mock;

      expect(canvasConfetti.create).toBeCalledTimes(1);

      expect(confetti.calls[0][0]).toEqual(canvas);
      expect(confetti.calls[0][1]).toEqual({
        resize: false,
        useWorker: true,
        disableForReducedMotion: true,
      });
    });

    it("should handle onInit correctly", () => {
      const confetti = jest.fn();
      // @ts-ignore
      confetti.reset = jest.fn();
      (canvasConfetti.create as jest.Mock).mockReturnValueOnce(confetti);
      render(
        <ReactCanvasConfetti
          onInit={({ confetti }) => {
            confetti({ colors: ["#ffffff"] });
          }}
        />,
      );

      expect(confetti).toBeCalledTimes(1);
      expect(confetti.mock.calls[0][0]).toEqual({
        colors: ["#ffffff"],
      });
    });
  });

  describe("Canvas props", () => {
    it("should apply props correctly", () => {
      render(
        <ReactCanvasConfetti
          style={{ opacity: 0.5 }}
          className={"class"}
          width={200}
          height={100}
        />,
      );

      const canvas = getCanvasElement();

      expect(canvas.getAttribute("width")).toBe("200");
      expect(canvas.getAttribute("height")).toBe("100");
      expect(canvas.getAttribute("class")).toBe("class");
      expect(canvas.getAttribute("style")).toBe("opacity: 0.5;");
    });
  });
});

describe("Preset", () => {
  describe("Init", () => {
    it("should render canvas", () => {
      render(<Preset getTickAnimation={getTickAnimation} />);
      const canvas = getCanvasElement();
      expect(canvas).toBeInstanceOf(HTMLCanvasElement);
    });
    it("should init correctly with default options", () => {
      render(<Preset getTickAnimation={getTickAnimation} />);
      const canvas = getCanvasElement();
      const { mock: confetti } = canvasConfetti.create as jest.Mock;

      expect(canvasConfetti.create).toBeCalledTimes(1);

      expect(confetti.calls[0][0]).toEqual(canvas);
      expect(confetti.calls[0][1]).toEqual({
        resize: true,
        useWorker: false,
      });
    });

    it("should init correctly with global options", () => {
      render(
        <Preset
          getTickAnimation={getTickAnimation}
          globalOptions={{
            resize: false,
            useWorker: true,
            disableForReducedMotion: true,
          }}
        />,
      );
      const canvas = getCanvasElement();
      const { mock: confetti } = canvasConfetti.create as jest.Mock;

      expect(canvasConfetti.create).toBeCalledTimes(1);

      expect(confetti.calls[0][0]).toEqual(canvas);
      expect(confetti.calls[0][1]).toEqual({
        resize: false,
        useWorker: true,
        disableForReducedMotion: true,
      });
    });

    it("should handle onInit correctly", () => {
      const confetti = jest.fn();
      // @ts-ignore
      confetti.reset = jest.fn();
      (canvasConfetti.create as jest.Mock).mockReturnValueOnce(confetti);
      render(
        <Preset
          getTickAnimation={getTickAnimation}
          decorateOptions={decorateOptions}
          onInit={({ confetti }) => {
            confetti({ colors: ["#ffffff"] });
          }}
        />,
      );

      expect(Conductor).toBeCalledTimes(1);
      expect((Conductor as jest.Mock).mock.calls[0][0]).toEqual({
        getTickAnimation,
        confetti,
        decorateOptions,
      });

      expect(confetti).toBeCalledTimes(1);
      expect(confetti.mock.calls[0][0]).toEqual({
        colors: ["#ffffff"],
      });
    });

    it("should handle autorun correctly", () => {
      const confettiInstance = jest.fn();
      // @ts-ignore
      confettiInstance.reset = jest.fn();

      (canvasConfetti.create as jest.Mock).mockReturnValueOnce(
        confettiInstance,
      );

      render(
        <Preset getTickAnimation={getTickAnimation} autorun={{ speed: 1 }} />,
      );

      expect(conductorInstance.run).toBeCalledTimes(1);
    });
  });

  describe("Canvas props", () => {
    it("should apply props correctly", () => {
      render(
        <Preset
          getTickAnimation={getTickAnimation}
          style={{ opacity: 0.5 }}
          className={"class"}
          width={200}
          height={100}
        />,
      );

      const canvas = getCanvasElement();

      expect(canvas.getAttribute("width")).toBe("200");
      expect(canvas.getAttribute("height")).toBe("100");
      expect(canvas.getAttribute("class")).toBe("class");
      expect(canvas.getAttribute("style")).toBe("opacity: 0.5;");
    });
  });
});
