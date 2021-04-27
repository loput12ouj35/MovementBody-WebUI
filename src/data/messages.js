const common = {
  next: '다음',
  confirm: '확인',
  highPriority: '중요',
  other: '기타',
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
  menu: {
    profile: '프로필',
    account: '계정 설정',
    logout: '로그아웃',
  },

  header: {
    signUp: '가입하기',
    profile: '프로필',
  },

  signUp: {
    title: (id) => `반값읍니다, ${id}님.`,
    subtitle: '아래 내용을 작성해주세요.',
  },

  member: {
    gender: '성별',
    male: '남',
    female: '여',
    other: '기타',
    height: '키 (cm)',
    weight: '몸무게 (kg)',
    basicInfoTitle: '기본 정보를 알려주세요',
    exerciseTitle: '운동 빈도를 알려주세요.',
    exerciesSteps: [
      '운동을 아예 하지 않음',
      '운동을 거의 하지 않음',
      '가끔 운동 하고 있음',
      '자주 운동 하고 있음',
      '매일 운동 하고 있음',
    ],
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
      foodRecommandation: (n) => `${n}이 부족해요!`,
    },
    subheader: {
      foodRecommandation: '이런 음식은 어떠세요?',
      weightDown: (n) => `어제보다 ${n}kg 빠지셨어요!`,
    },
    protein: '단백질',
    mental: '정신력',
  },
};

export default { common, unit, ...rest };
