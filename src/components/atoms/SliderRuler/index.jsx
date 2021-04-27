import React from 'react';
import 'scss/components/slider-ruler.scss';
import Canvas from './Canvas';

export default class SliderRuler extends React.PureComponent {
  static defaultProps = {
    onChange: (v) => {},
    width: '100%',
    height: 55,
    heightDecimal: 30,
    heightDigit: 15,
    lineWidth: 2,
    colorDecimal: '#C4C4C4',
    colorDigit: '#E4E4E4',
    divide: 10,
    precision: 1,
    font: '1.25em Arial',
    fontLineHeight: 20,
    fontColor: 'rgba(0, 0, 0, 0.87)',
    fontMarginTop: 35,
    max: 230,
    min: 100,
    value: 160,
  };

  state = { canvasWidth: 100 };
  wrapperRef = React.createRef();

  adjustSize = () => {
    if (!this.wrapperRef.current) return;
    this.setState({ canvasWidth: this.wrapperRef.current.offsetWidth });
  };

  componentDidMount() {
    setTimeout(this.adjustSize, 100);
  }

  componentDidUpdate() {
    this.adjustSize();
  }

  render() {
    const { width, className = '', ...rest } = this.props;
    const { canvasWidth } = this.state;

    return (
      <div
        ref={this.wrapperRef}
        className={'ruler-box ' + className}
        style={{ width }}
      >
        <Canvas {...rest} width={canvasWidth} />
        <div className="ruler-center-box" />
      </div>
    );
  }
}
