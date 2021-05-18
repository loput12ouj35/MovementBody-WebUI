const common = {
  next: '다음',
  confirm: '확인',
  submit: '제출',
  highPriority: '중요',
  other: '기타',
  carbon: '탄수화물',
  protein: '단백질',
  fat: '지방',
};

const unit = {
  step: '걸음',
  hour: '시간',
  min: '분',
  kcal: 'kcal',
  km: 'km',
  kg: 'kg',
  cup: '컵',
  ml: 'ml',
};

const rest = {
  header: {
    logo: '대충 로고',
    signUp: '가입하기',
    profile: '프로필',
    home: '홈',
    menu1: '마제소바1',
    menu2: '마제소바2',
  },

  signUp: {
    title1: (id) => `반값읍니다, ${id}님.`,
    subtitle1: '아래 내용을 작성해주세요.',
    title2: '거의 다 끝났습니다.',
  },

  member: {
    memberId: '이름',
    gender: '성별',
    birth: '생년월일',
    male: '남',
    female: '여',
    other: '기타',
    height: '키 (cm)',
    weight: '몸무게 (kg)',
    email: '이메일',
    exerciesSteps: [
      '운동을 아예 하지 않음',
      '운동을 거의 하지 않음',
      '가끔 운동 하고 있음',
      '자주 운동 하고 있음',
      '매일 운동 하고 있음',
    ],
    goal: '몸무게를...',
    goalType: {
      losing: '줄이기',
      keeping: '유지',
      gaining: '늘이기',
    },
    title: {
      createBasic: '기본 정보를 알려주세요',
      readBasic: '기본 정보',
      createExercise: '운동 빈도를 알려주세요.',
      updateExercise: '운동 빈도가 변하였나요?',
      createGoal: '식단 관리의 목표를 알려주세요.',
      updateGoal: '식단 관리 목표가 변하셨나요?',
    },
  },

  getStartedPage: {
    title1: '마제소바로\n매일매일 식단 관리',
    subtitle1: '손 쉽게 작성하는 다이어트 일지!\n뭐쓰지\n한 3줄정도',
  },

  homePage: {
    title: {
      stepCount: '걸음 수',
      activeTime: '활동 시간',
      food: '음식',
      water: '물',
      weight: '무게',
      sleep: '수면',
      nutrition: '오늘의 영양을 확인하세요!',
      foodRecommandation: (n) => `${n}이 부족해요!`,
    },
    subheader: {
      foodRecommandation: '이런 음식은 어떠세요?',
      weightDown: (n) => `어제보다 ${n}kg 빠지셨어요!`,
    },
    mental: '정신력',
  },
};

export default { common, unit, ...rest };
