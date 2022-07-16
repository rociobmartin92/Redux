/* eslint-disable prettier/prettier */
const add = () => {
  return {
    type: 'ADD_VALUE',
    payload: 10,
  };
};

const remove = () => {
  return {
    type: 'REMOVE_VALUE',
    payload: -10,
  };
};

export {add, remove};
