const ProductTF = (state, id) => {
  return !!state.selectedItems.find((item) => item.id === id);
};
export { ProductTF };
