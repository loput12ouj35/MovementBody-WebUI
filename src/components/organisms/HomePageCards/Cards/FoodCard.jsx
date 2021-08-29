import { CardContent } from '@material-ui/core';
import { Restaurant } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';

@inject('nutritionViewModel')
@observer
class FoodCard extends React.PureComponent {
  toNumber = (data) => _.mapValues(data, (v) => v ?? 0);

  render() {
    const { nutritionViewModel } = this.props;
    const { goal, breakfirst, lunch, dinner } = this.toNumber(
      nutritionViewModel.mealCalorie
    );
    const total = breakfirst + lunch + dinner;

    return (
      <StyledCard>
        <StyledCardHeader
          icon={<Restaurant />}
          markColor="orange"
          markShadow="rgba(255, 165, 0, 0.4)"
          title={MESSAGES.homePage.title.food}
        />
        <CardContent>
          <CardMainText
            mainText={total}
            subText={` /${goal + MESSAGES.unit.kcal}`}
          />
        </CardContent>
      </StyledCard>
    );
  }
}

export default FoodCard;
