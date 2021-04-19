const messages = {
  common: {
    next: '다음',
    confirm: '확인',
  },

  menu: {
    home: '홈',
    history: '기록',
    menu: '메뉴',
    profile: '프로필',
    account: '계정 설정',
    logout: '로그아웃',
  },

  signUp: {
    title: (id) => `반값읍니다, ${id}님.`,
    subtitle: '아래 내용을 작성해주세요.',
    email: 'Email 주소',
    gender: '성별',
    male: '남',
    female: '여',
    other: '기타',
    height: '키 (cm)',
    weight: '몸무게 (kg)',
    exercise: '운동량',
    exerciesSteps: [
      '운동을 아예 하지 않음',
      '운동을 거의 하지 않음',
      '가끔 운동 하고 있음',
      '자주 운동 하고 있음',
      '매일 운동 하고 있음',
    ],
  },
};

export default messages;
