export const preIncidentReducer = (state = [], action) => {
  switch (action.type) {
    case "LOG_ANSWER":
      return state.map(question => {
        if (question.id === action.id) {
          return { ...question, answer };
        } else {
          return question;
        }
      });
    default:
      return state;
  }
};
