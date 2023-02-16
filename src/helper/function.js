const ProductTF = (state, id) => {
  return !!state.selectedItems.find((item) => item.id === id);
};

const purchasedPR = (state, id) => {
  return !!state.purchased_products.find((item) => item.id === id);
};

export { ProductTF, purchasedPR };
