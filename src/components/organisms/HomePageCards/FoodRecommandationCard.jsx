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
    backgroundColor: 'ivory',
    gridColumnEnd: 'span 12',
  },
  chipContainer: {
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
      <Card className={classes.root} component="article">
        <CardHeader
          title={MESSAGES.homePage.foodRecommandation(
            MESSAGES.homePage.protein
          )}
          titleTypographyProps={{ variant: 'body1' }}
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
                  color="primary"
                  label={label}
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
