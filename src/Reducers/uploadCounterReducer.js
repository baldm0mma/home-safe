export const uploadCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_COUNTER":
      return state + action.count;
  
    default:
      return state;
  }
}