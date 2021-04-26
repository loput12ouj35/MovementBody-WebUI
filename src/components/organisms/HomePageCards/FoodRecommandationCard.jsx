import {
  Chip,
  IconButton,
  makeStyles,
  Zoom,
  Slide,
  Avatar,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { Announcement, Close } from '@material-ui/icons';
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
  root: { backgroundColor: 'ivory' },
  avatar: { backgroundColor: 'hotpink' },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1em',
    '& > *': { margin: '0.25em' },
  },
  chip: { color: 'white', backgroundColor: 'cornflowerblue' },
}));

export default React.memo(function FoodRecommandation(props) {
  const [hidden, setHidden] = useState(false);
  const handleClick = useCallback(() => setHidden(true), []);
  const classes = useStyles();

  return (
    <Slide direction="right" in={!hidden} mountOnEnter unmountOnExit>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <Announcement />
            </Avatar>
          }
          title={MESSAGES.homePage.title.foodRecommandation(
            MESSAGES.homePage.mental
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
      </Card>
    </Slide>
  );
});
