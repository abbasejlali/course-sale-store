const ProductTF = (state, id) => {
  return !!state.selectedItems.find((item) => item.id === id);
};

const discount = (state) => {
  const number_main = state.total - (state.total * 10) / 100;
  return state.discount === number_main;
};
export { ProductTF, discount };
