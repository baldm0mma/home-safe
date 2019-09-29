export const addProgress = percentage => ({
  type: 'ADD_PROGRESS',
  percentage
});

export const subtractProgress = percentage => ({
  type: 'SUBTRACT_PROGRESS',
  percentage
});

export const updateProgress = percentage => ({
  type: 'UPDATE_PROGRESS',
  percentage
});

export const checkItem = id => ({
  type: 'CHECK_ITEM',
  id
});

export const unCheckItem = id => ({
  type: 'UNCHECK_ITEM',
  id
});

export const logAnswer = (id, answer) => ({
  type: 'LOG_ANSWER',
  id,
  answer
});

export const updateCounter = count => ({
  type: 'UPDATE_COUNTER',
  count
});
