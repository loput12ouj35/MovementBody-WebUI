import React from 'react';
import './temp.scss';

class SliderRuler extends React.PureComponent {
  static defaultProps = {
    onChange: (v) => {},
    canvasWidth: 500,
    canvasHeight: 83,
    heightDecimal: 35,
    heightDigit: 18,
    lineWidth: 2,
    colorDecimal: '#C4C4C4',
    colorDigit: '#E4E4E4',
    divide: 10,
    precision: 1,
    fontSize: 20,
    fontColor: '#666',
    fontFamily: 'Arial',
    fontMarginTop: 35,
    max: 230,
    min: 100,
    value: 160,
  };

  state = { canvasWidth: this.props.canvasWidth };
  wrapperRef = React.createRef();

  componentDidMount() {
    const canvasWidth = this.wrapperRef.current.offsetWidth;
    this.setState({ canvasWidth });
  }

  render() {
    const { className = '', ...rest } = this.props;
    const { canvasWidth } = this.state;

    return (
      <div ref={this.wrapperRef} className={'ruler-box ' + className}>
        <Canvas {...rest} canvasWidth={canvasWidth} />
        <div className="ruler-center-box" />
      </div>
    );
  }
}

export default SliderRuler;

class Canvas extends React.PureComponent {
  pageX = 0;
  isTouching = false;
  touchPoints = [];
  state = { translateX: 0 };
  browserEnv = window.hasOwnProperty('ontouchstart');
  canvasRef = React.createRef();

  handleTouchStart = (e) => {
    if (this.isTouching) return;

    this.isTouching = true;
    const { pageX } = e.touches?.[0] || e;
    this.addTouchPoint(pageX);
    this.pageX = pageX;
  };

  handleTouchMove = (e) => {
    if (!this.browserEnv && (e.which !== 1 || e.buttons === 0)) return;

    const { pageX } = e.touches?.[0] || e;
    this.addTouchPoint(pageX);
    const deltaX = pageX - this.pageX;
    this.pageX = pageX;

    if (Math.abs(Math.round(deltaX / this.props.divide)) === 0) return;
    if (this.browserEnv && !this.rebound(deltaX)) return;

    this.moveGradations(deltaX);
  };

  handleTouchEnd = () => {
    this.moveGradations(this.browserEnv ? this.inertialShift() : 0);
    this.setState({ translateX: 0 });
    this.touchPoints = [];
    this.isTouching = false;
  };

  addTouchPoint = (shift) => {
    const time = new Date().getTime();
    this.touchPoints.push({ time, shift });
  };

  inertialShift = () => {
    if (this.touchPoints.length < 4) return 0;
    const [first, , , last] = this.touchPoints.slice(-4);
    const v = ((last.shift - first.shift) / (last.time - first.time)) * 1000;
    return (Math.sign(v) * v ** 2) / 12000;
  };

  rebound = (deltaX) => {
    const { max, min } = this.props;

    if (
      (this.currentValue !== min || deltaX <= 0) &&
      (this.currentValue !== max || deltaX >= 0)
    )
      return true;

    const translateX = Math.sign(deltaX) * 1.5988 * Math.abs(deltaX) ** 0.7962;
    this.setState({ translateX });
    return false;
  };

  moveGradations = (shift) => {
    const { divide, precision } = this.props;
    const moveValue = Math.round(-shift / divide);
    let _moveValue = Math.abs(moveValue);
    const draw = () => {
      if (_moveValue < 1) return this.props.onChange(this.currentValue);
      this.currentValue += Math.sign(moveValue) * precision;
      this.calcValueAndDrawCanvas();
      window.requestAnimationFrame(draw);
      _moveValue--;
    };

    draw();
  };

  calcValue = () => {
    const { min, max, precision } = this.props;
    const value = Math.max(min, Math.min(this.currentValue, max));
    return (Math.round((value * 10) / precision) * precision) / 10;
  };

  calcOrigin = (value) => {
    const { min, max, precision, divide, canvasWidth } = this.props;
    const halfCanvasWidth = canvasWidth / 2;
    const diffCurrentMin = ((value - min) * divide) / precision;
    const _startValue =
      value - Math.floor(halfCanvasWidth / divide) * precision;
    const startValue = Math.max(min, Math.min(_startValue, max));
    const _endValue = startValue + (canvasWidth / divide) * precision;
    const endValue = Math.min(_endValue, max);
    const originX =
      diffCurrentMin > halfCanvasWidth
        ? (halfCanvasWidth - ((value - startValue) * divide) / precision) * 2
        : (halfCanvasWidth - diffCurrentMin) * 2;

    return { startValue, endValue, originX };
  };

  drawCanvas = (input) => {
    const { startValue, endValue, originX } = input;
    const {
      heightDecimal,
      heightDigit,
      lineWidth,
      fontSize,
      fontMarginTop,
      colorDecimal,
      colorDigit,
      fontColor,
      divide,
      fontFamily,
      precision,
    } = this.props;
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const from = Math.round((startValue / precision) * 10) / 10;
    const to = endValue / precision;

    for (let i = from; i <= to; i++) {
      const x = originX + (i - startValue / precision) * divide * 2;
      const isDecimal = i % 10 === 0;

      context.beginPath();
      context.moveTo(x, 0);
      context.lineWidth = lineWidth * 2;
      context.lineTo(x, isDecimal ? heightDecimal * 2 : heightDigit * 2);
      context.strokeStyle = isDecimal ? colorDecimal : colorDigit;
      context.stroke();
      context.fillStyle = fontColor;
      context.textAlign = 'center';
      context.textBaseline = 'top';
      if (isDecimal) {
        context.font = `${fontSize * 2}px ${fontFamily}`;
        context.fillText(
          Math.round(i / 10) * (precision * 10),
          x,
          fontMarginTop * 2
        );
      }
      context.closePath();
    }
  };

  calcValueAndDrawCanvas = () => {
    const value = this.calcValue();
    this.drawCanvas(this.calcOrigin(value));
    if (value === this.props.value) return;
    this.currentValue = value;
  };

  componentDidMount() {
    this.calcValueAndDrawCanvas();
  }

  componentDidUpdate() {
    this.calcValueAndDrawCanvas();
  }

  render() {
    const { canvasWidth, canvasHeight, value } = this.props;
    const [width, height] = [canvasWidth, canvasHeight];
    const { translateX } = this.state;
    this.currentValue = value;

    return (
      <canvas
        ref={this.canvasRef}
        className="canvas"
        width={width * 2}
        height={height * 2}
        style={{ width, height, transform: `translateX(${translateX}px)` }}
        // onTouchStart={this.handleTouchStart}
        onMouseDown={this.handleTouchStart}
        // onTouchMove={this.handleTouchMove}
        onMouseMove={this.handleTouchMove}
        // onTouchEnd={this.handleTouchEnd}
        onMouseUp={this.handleTouchEnd}
      />
    );
  }
}
