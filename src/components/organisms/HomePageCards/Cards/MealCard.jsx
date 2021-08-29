import { CardContent } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  StyledCard,
  StyledCardHeader,
  MealList,
  NutritionRatioBar,
} from 'components';

@inject('nutritionViewModel')
@observer
class MealCard extends React.PureComponent {
  render() {
    const { nutritionViewModel, type } = this.props;
    const cal = nutritionViewModel.mealCalorie[type] ?? 0;

    return (
      <StyledCard responsiveOptions={{ range: [3, 4], widthRem: 11 }}>
        <StyledCardHeader
          icon={<Check />}
          markColor="darkslategray"
          markShadow="rgba(47, 79, 79, 0.4)"
          title={MESSAGES.homePage.title.meal[type]}
        />
        <CardContent>
          <MealList cal={cal} />
          <NutritionRatioBar />
        </CardContent>
      </StyledCard>
    );
  }
}

export default MealCard;
