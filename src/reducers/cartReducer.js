const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART": {
      const index = state.findIndex(x => x.id === payload.id);
      if (index === -1) {
        return [...state, payload];
      } else {
        return [
          ...state.slice(0, index),
          { ...state[index], quantity: state[index].quantity + 1 },
          ...state.slice(index + 1)
        ];
      }
    }

    case "UPDATE_TO_CART": {
      if (payload.quantity === 0) {
        return state.filter(x => x.id !== payload.id);
      } else {
        const index = state.findIndex(x => x.id === payload.id);
        return [...state.slice(0, index), payload, ...state.slice(index + 1)];
      }
    }

    case "DELETE_FROM_CART": {
      return state.filter(x => x.id !== payload.id);
    }

    default:
      return state;
  }
};
