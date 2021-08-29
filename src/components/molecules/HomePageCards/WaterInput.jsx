import { IconButton, withStyles } from '@material-ui/core';
import { Add, LocalDrink, Remove } from '@material-ui/icons';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { inject, observer } from 'mobx-react';
import React from 'react';

const CUP_SIZES = { small: 150, medium: 200, large: 250 };

const styles = () => ({
  root: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  buttonContainer: { display: 'flex', marginTop: -12 },
  cupButton: {
    padding: 0,
    paddingBottom: '1em',
    width: '2em',
    fontSize: '1em',
    height: '2.5em',
    border: 0,
    position: 'relative',
  },
  cupLabel: {
    fontSize: '0.75em',
    position: 'absolute',
    bottom: 0,
    lineHeight: 1.5,
  },
  cup: {
    '&.small': { fontSize: '0.75rem' },
    '&.medium': { fontSize: '1rem' },
    '&.large': { fontSize: '1.125rem' },
  },
});

@withStyles(styles)
@inject('summaryViewModel')
@observer
class WaterInput extends React.PureComponent {
  state = { cupSize: 200 };

  update = (cupDiff = 0, mlDiff = 0) => {
    const { summaryViewModel } = this.props;
    summaryViewModel.setWater(({ cup, ml }) => {
      const _cup = Math.max(0, cup + cupDiff);
      const _ml = _cup === 0 ? 0 : Math.max(0, ml + mlDiff);

      return { cup: _cup, ml: _ml };
    });
  };

  up = () => {
    const { cupSize } = this.state;
    this.update(1, cupSize);
  };

  down = () => {
    const { cupSize } = this.state;
    this.update(-1, -cupSize);
  };

  handleChange = (e, cupSize) => this.setState({ cupSize });

  render() {
    const { summaryViewModel, classes } = this.props;
    const disabled = summaryViewModel.water.cup <= 0;
    const { cupSize } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.buttonContainer}>
          <IconButton edge="start" onClick={this.down} disabled={disabled}>
            <Remove />
          </IconButton>
          <IconButton edge="end" onClick={this.up}>
            <Add />
          </IconButton>
        </div>
        <ToggleButtonGroup
          value={cupSize}
          exclusive
          onChange={this.handleChange}
          aria-label="water-cup-size"
        >
          {Object.entries(CUP_SIZES).map(([key, value]) => (
            <ToggleButton
              key={key}
              className={classes.cupButton}
              value={value}
              aria-label={key}
            >
              <LocalDrink className={`${classes.cup} ${key}`} />
              <span className={classes.cupLabel}>{value}</span>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    );
  }
}

export default WaterInput;
