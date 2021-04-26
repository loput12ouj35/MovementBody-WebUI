import { Card, makeStyles } from '@material-ui/core';
import React, { forwardRef } from 'react';
import _ from 'lodash';

const _createMediaQuery = (n, widthRem) => ({
  [`@media (min-width:${widthRem * n}rem)`]: {
    maxWidth: `${100 / n}%`,
    flexBasis: `${100 / n}%`,
  },
});

const _createResponsiveWidths = ({ responsiveOptions = {} }) => {
  if (!responsiveOptions) return {};
  const { range = [2, 7], widthRem = 11.5 } = responsiveOptions;

  return Object.assign(
    ..._.range(...range).map((n) => _createMediaQuery(n, widthRem))
  );
};

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    padding: '0.5em 0.25em',
    maxWidth: '100%',
    flexBasis: '100%',
    '&:empty': { padding: 0 },
    ..._createResponsiveWidths(props),
  }),
  card: {
    marginTop: '1em',
    height: 'calc(100% - 1em)',
  },
}));

export default forwardRef(function StyledCard(props, ref) {
  const {
    children,
    Component = 'li',
    className = '',
    responsiveOptions,
  } = props;
  const classes = useStyles({ responsiveOptions });

  return (
    <Component ref={ref} className={classes.root}>
      <Card className={`${classes.card} ${className}`}>{children}</Card>
    </Component>
  );
});
