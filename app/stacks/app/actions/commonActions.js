export const addProduct = item => {
  return {
    type: 'ADD_PRODUCT',
    payload: item,
  };
};
