import { Chip, IconButton, makeStyles, Grow, Slide } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React, { useCallback, useState } from 'react';

const dummy = [
  '마제소바',
  '수주육편',
  '우육면',
  '양다리',
  '꿔바로우',
  '훠궈',
  '사천짜장',
  '가나요',
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
        <IconButton className={classes.button}>
          <Close onClick={handleClick} />
        </IconButton>
        <h4>
          {MESSAGES.homePage.foodRecommandation(MESSAGES.homePage.protein)}
        </h4>
        <div className={classes.chipWrapper}>
          {dummy.map((e, i) => (
            <Grow in timeout={500 + i * 500}>
              <Chip color="primary" size="small" label={e} />
            </Grow>
          ))}
        </div>
      </div>
    </Slide>
  );
});
