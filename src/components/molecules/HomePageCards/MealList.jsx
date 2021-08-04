import React from 'react';
import { Add, Remove } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { CardMainText } from 'components';
import { MESSAGES } from 'data';

const DUMMY = [
  ['dummy', '1개'],
  ['dummy2', '1개'],
  ['dummy3', '1병'],
];

const useStyles = makeStyles(() => ({
  list: { display: 'flex', flexDirection: 'column', marginTop: '1rem' },
  item: {
    display: 'flex',
    '& b': { flex: 'auto' },
    '& span, & svg': { marginLeft: '0.25rem' },
  },
  calText: { display: 'flex', alignItems: 'center', '& p': { flex: 'auto' } },
}));

export default function MealList(props) {
  const { cal } = props;
  const classes = useStyles();
  const items = DUMMY;

  return (
    <>
      <div className={classes.calText}>
        <CardMainText mainText={cal} subText={MESSAGES.unit.kcal} />
        <Add />
      </div>
      <ul className={classes.list}>
        {items.map(([item, count]) => (
          <li className={classes.item} key={item}>
            <b>{item}</b>
            <span>{count}</span>
            <Remove />
          </li>
        ))}
      </ul>
    </>
  );
}
