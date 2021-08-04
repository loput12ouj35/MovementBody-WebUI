import { CardContent, makeStyles } from '@material-ui/core';
import { Add, Check, Remove } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';

const DUMMY = [
  ['dummy', '1개'],
  ['dummy2', '1개'],
  ['dummy3', '1병'],
];

@inject('todayStatStore')
@observer
class MealCard extends React.PureComponent {
  render() {
    const { todayStatStore, type } = this.props;
    const cal = todayStatStore.food[type] ?? 0;

    return (
      <StyledCard responsiveOptions={{ range: [3, 4], widthRem: 11 }}>
        <StyledCardHeader
          icon={<Check />}
          markColor="darkslategray"
          markShadow="rgba(47, 79, 79, 0.4)"
          title={MESSAGES.homePage.title.meal[type]}
        />
        <CardContent>
          <DummyCalText cal={cal} />
          <DummyList />
        </CardContent>
      </StyledCard>
    );
  }
}

export default MealCard;

const useStyles = makeStyles(() => ({
  list: { display: 'flex', flexDirection: 'column', marginTop: '1rem' },
  item: {
    display: 'flex',
    '& b': { flex: 'auto' },
    '& span, & svg': { marginLeft: '0.25rem' },
  },
  calText: { display: 'flex', alignItems: 'center', '& p': { flex: 'auto' } },
}));

const DummyList = React.memo(function () {
  const classes = useStyles();
  const items = DUMMY;

  return (
    <ul className={classes.list}>
      {items.map(([item, count]) => (
        <li className={classes.item}>
          <b>{item}</b>
          <span>{count}</span>
          <Remove />
        </li>
      ))}
    </ul>
  );
});

const DummyCalText = React.memo(function (props) {
  const { cal } = props;
  const classes = useStyles();

  return (
    <div className={classes.calText}>
      <CardMainText mainText={cal} subText={MESSAGES.unit.kcal} />
      <Add />
    </div>
  );
});
