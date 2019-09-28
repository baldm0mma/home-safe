export const defaultQuestions = [
  {
    id: 1,
    question: "Do you have a gate or locked entrance to your residence?",
    type: "boolean",
    answer: false
  },
  {
    id: 2,
    question:
      "Do you have a fire hydrant within one block, or 200ft of your residence?",
    type: "boolean",
    answer: false
  },
  {
    id: 3,
    question:
      "Do you have a pond, creek, or river within 1/4 mile of your residence?",
    type: "boolean",
    answer: false
  },
  {
    id: 4,
    question: "What type of roof do you have?",
    type: "radio",
    answer: ""
  },
  {
    id: 5,
    question: "What type of basement do you have?",
    type: "radio",
    answer: ""
  },
  {
    id: 6,
    question: "How many direct exits (doors) do you have in your residence?",
    type: "number",
    answer: 0
  },
  {
    id: 7,
    question:
      "Do you have access to your attic from the interior of your residence?",
    type: "radio",
    answer: ""
  },
  {
    id: 8,
    question: "Do you have a fire alarm system?",
    type: "boolean",
    answer: false
  },
  {
    id: 9,
    question: "Do you have a fire suppression system?",
    type: "checkbox",
    answer: []
  },
  {
    id: 10,
    question: "How many smoke detectors are in your residence?",
    type: "number",
    answer: 0
  },
  {
    id: 11,
    question: "Do you have a carbon monoxide detector in your residence?",
    type: "boolean",
    answer: false
  },
  {
    id: 12,
    question: "Are you storing any hazardous materials? If so, where?",
    type: "checkbox",
    answer: []
  }
];

export const preIncidentReducer = (state = defaultQuestions, action) => {
  switch (action.type) {
    case "LOG_ANSWER":
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
