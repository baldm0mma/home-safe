export const defaultQuestions = [
  {
    id: 1,
    answer: false,
    completed: false
  },
  {
    id: 2,
    answer: false,
    completed: false
  },
  {
    id: 3,
    answer: false,
    completed: false
  },
  {
    id: 4,
    answer: '',
    completed: false
  },
  {
    id: 5,
    answer: '',
    completed: false
  },
  {
    id: 6,
    answer: 0,
    completed: false
  },
  {
    id: 7,
    answer: '',
    completed: false
  },
  {
    id: 8,
    answer: false,
    completed: false
  },
  {
    id: 9,
    answer: [],
    completed: false
  },
  {
    id: 10,
    answer: 0,
    completed: false
  },
  {
    id: 11,
    answer: false,
    completed: false
  },
  {
    id: 12,
    answer: [],
    completed: false
  }
];

export const preIncidentReducer = (state = defaultQuestions, action) => {
  switch (action.type) {
    case 'LOG_ANSWER':
      return state.map(question => {
        if (question.id === action.id) {
          return { ...question, answer: action.answer };
        } else {
          return question;
        }
      });
    default:
      return state;
  }
};
