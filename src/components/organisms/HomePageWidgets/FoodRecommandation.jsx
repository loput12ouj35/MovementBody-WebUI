import {
  Chip,
  IconButton,
  makeStyles,
  Zoom,
  Slide,
  Avatar,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React, { useCallback, useState } from 'react';

const dummy = [
  ['마제소바', 'images/foods/1.jpg'],
  ['수주육편', 'images/foods/1.jpg'],
  ['우육면', 'images/foods/1.jpg'],
  ['양다리', 'images/foods/1.jpg'],
  ['꿔바로우', 'images/foods/1.jpg'],
  ['훠궈', 'images/foods/1.jpg'],
  ['사천짜장', 'images/foods/1.jpg'],
  ['언제 가나요', 'images/foods/1.jpg'],
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 1em',
    backgroundColor: 'ivory',
    position: 'relative',
  },

  button: { position: 'absolute', right: 0 },

  chipWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1em',
    '& > *': { margin: '0.25em' },
  },
}));

export default React.memo(function FoodRecommandation(props) {
  const [hidden, setHidden] = useState(false);
  const handleClick = useCallback(() => setHidden(true), []);
  const classes = useStyles();

  return (
    <Slide direction="left" in={!hidden} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <IconButton className={classes.button} onClick={handleClick}>
          <Close />
        </IconButton>
        <h4>
          {MESSAGES.homePage.foodRecommandation(MESSAGES.homePage.protein)}
        </h4>
        <div className={classes.chipWrapper}>
          {dummy.map(([label, src], i) => (
            <Zoom
              key={label}
              in
              timeout={300}
              style={{ transitionDelay: i * 50 }}
            >
              <Chip
                color="primary"
                label={label}
                avatar={<Avatar alt={label} src={src} />}
              />
            </Zoom>
          ))}
        </div>
      </div>
    </Slide>
  );
});
