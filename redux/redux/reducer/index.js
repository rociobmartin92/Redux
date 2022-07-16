/* eslint-disable prettier/prettier */
const initialState = {
  amount: 0,
};

const amountReducer = (state = initialState, action) => {
  if (action.type === 'ADD_VALUE') {
    return {
      ...state,
      amount: state.amount + 10,
    };
  }
  if (action.type === 'REMOVE_VALUE') {
    return {
      ...state,
      amount: state.amount - 10,
    };
  }
  return state;
};

export default amountReducer;
