export const defaultQuestions = [
  {
    id: 1,
    question: 'Do you have a gate or locked entrance to your residence?',
    answer: false,
    completed: false
  },
  {
    id: 2,
    question: 'Do you have a fire hydrant within one block, or 200ft of your residence?',
    answer: false,
    completed: false
  },
  {
    id: 3,
    question: 'Do you have a pond, creek, or river within 1/4 mile of your residence?',
    answer: false,
    completed: false
  },
  {
    id: 4,
    question: 'What type of roof do you have?',
    answer: '',
    completed: false
  },
  {
    id: 5,
    question: 'What type of basement do you have?',
    answer: '',
    completed: false
  },
  {
    id: 6,
    question: 'How many direct exits (doors) do you have in your residence?',
    answer: 0,
    completed: false
  },
  {
    id: 7,
    question: 'Do you have access to your attic from the interior of your residence?',
    answer: '',
    completed: false
  },
  {
    id: 8,
    question: 'Do you have a fire alarm system?',
    answer: false,
    completed: false
  },
  {
    id: 9,
    question: 'Do you have a fire suppression system?',
    answer: [],
    completed: false
  },
  {
    id: 10,
    question: 'How many smoke detectors are in your residence?',
    answer: 0,
    completed: false
  },
  {
    id: 11,
    question: 'Do you have a carbon monoxide detector in your residence?',
    answer: false,
    completed: false
  },
  {
    id: 12,
    question: 'Are you storing any hazardous materials? If so, where?',
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
