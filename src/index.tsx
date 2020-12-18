import canvasConfetti, {
  CreateTypes,
  GlobalOptions,
  Options,
} from 'canvas-confetti';
import React, {
  CSSProperties,
  RefObject,
} from 'react';

export interface IProps extends Options, GlobalOptions {
  fire?: boolean | number | string | object | null;
  reset?: boolean | number | string | object | null;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  refConfetti?: (confetti: CreateTypes | null) => void;
  onDecay?: () => void;
  onFire?: () => void;
  onReset?: () => void;
}

export default class ReactCanvasConfetti extends React.Component<IProps> {
  private refCanvas: RefObject<HTMLCanvasElement>;

  private confetti: CreateTypes | null;

  constructor(props: IProps) {
    super(props);
    this.refCanvas = React.createRef();
    this.confetti = null;
  }

  componentDidMount() {
    if (!this.refCanvas.current) {
      return;
    }

    const { resize, useWorker } = this.props;
    const globalOptions: GlobalOptions = {};

    resize && (globalOptions.resize = resize);
    useWorker && (globalOptions.useWorker = useWorker);

    this.confetti = canvasConfetti.create(this.refCanvas.current, globalOptions);
    this.fireConfetti();
    this.setRefConfetti();
  }

  componentDidUpdate(prevProps: Readonly<IProps>) {
    const { fire, reset } = this.props;
    const isFireTrue = !!fire;
    const isFireChanged = fire !== prevProps.fire;

    if (isFireTrue && isFireChanged) {
      this.fireConfetti();
    }

    const isResetTrue = !!reset;
    const isResetChanged = reset !== prevProps.reset;

    if (isResetTrue && isResetChanged) {
      this.resetConfetti();
    }
  }

  componentWillUnmount() {
    this.unsetRefConfetti();
  }

  private setRefConfetti() {
    const { refConfetti } = this.props;

    refConfetti && refConfetti(this.confetti);
  }

  private unsetRefConfetti() {
    const { refConfetti } = this.props;

    refConfetti && refConfetti(null);
  }

  private fireConfetti() {
    if (!this.confetti) {
      return;
    }

    const { onFire, onDecay } = this.props;

    onFire && onFire();

    const promise = this.confetti(this.props);

    // @ts-ignore
    promise && promise.then(() => {
      onDecay && onDecay();
    });
  }

  private resetConfetti() {
    if (!this.confetti) {
      return;
    }

    const { onReset } = this.props;

    onReset && onReset();
  }

  render() {
    const {
      style, className, width, height,
    } = this.props;
    return <canvas ref={this.refCanvas} style={style} className={className} width={width} height={height} />;
  }
}
