export const progressReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_PROGRESS':
      return (state += action.percentage);
    case 'SUBTRACT_PROGRESS':
      return (state -= action.percentage);
    case 'UPDATE_PROGRESS':
      return action.percentage;
    default:
      return state;
  }
};
