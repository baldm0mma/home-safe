export const updateProgressReducer = (state = 'test', action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return action.num;
    default:
      return state;
  }
};
