import {
  Chip,
  IconButton,
  makeStyles,
  Zoom,
  Slide,
  Avatar,
  CardContent,
} from '@material-ui/core';
import { Announcement, Close } from '@material-ui/icons';
import { StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import React, { useCallback, useState } from 'react';

const dummy = [
  ['[[마제소바]]', 'images/foods/1.jpg'],
  ['[[수주육편]]', 'images/foods/1.jpg'],
  ['[[우육면]]', 'images/foods/1.jpg'],
  ['[[양다리]]', 'images/foods/1.jpg'],
  ['[[평양냉면]]', 'images/foods/1.jpg'],
  ['[[까르보나라]]', 'images/foods/1.jpg'],
  ['[[사천짜장]]', 'images/foods/1.jpg'],
];

const useStyles = makeStyles(() => ({
  root: { backgroundColor: 'ivory' },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1em',
    '& > *': { margin: '0.25em' },
  },
  chip: { color: 'white', backgroundColor: 'cornflowerblue' },
}));

export default React.memo(function FoodRecommandation() {
  const [hidden, setHidden] = useState(false);
  const handleClick = useCallback(() => setHidden(true), []);
  const classes = useStyles();

  return (
    <Slide direction="right" in={!hidden} mountOnEnter unmountOnExit>
      <StyledCard
        className={classes.root}
        responsiveOptions={{ widthRem: 27.5 }}
      >
        <StyledCardHeader
          icon={<Announcement />}
          markColor="hotpink"
          markShadow="rgba(255, 105, 180, 0.4)"
          title={MESSAGES.homePage.title.foodRecommandation(
            MESSAGES.common.protein
          )}
          subheader={MESSAGES.homePage.subheader.foodRecommandation}
          action={
            <IconButton onClick={handleClick}>
              <Close />
            </IconButton>
          }
        />
        <CardContent>
          <div className={classes.chipContainer}>
            {dummy.map(([label, src], i) => (
              <Zoom
                key={label}
                in
                timeout={300}
                style={{ transitionDelay: i * 50 }}
              >
                <Chip
                  className={classes.chip}
                  label={label}
                  size="small"
                  avatar={<Avatar alt={label} src={src} />}
                />
              </Zoom>
            ))}
          </div>
        </CardContent>
      </StyledCard>
    </Slide>
  );
});
