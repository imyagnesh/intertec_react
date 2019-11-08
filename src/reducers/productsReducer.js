const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return payload;

    case "DELETE_PRODUCTS_SUCCESS":
      return state.filter(x => x.id !== payload);

    case "CREATE_PRODUCT_SUCCESS":
      return [...state, payload];

    case "EDIT_PRODUCT_SUCCESS": {
      const index = state.findIndex(x => x.id === payload.id);
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
