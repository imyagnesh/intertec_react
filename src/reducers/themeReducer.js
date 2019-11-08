const initialState = {
  theme: "dark"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_THEME":
      return { ...state, ...payload };

    default:
      return state;
  }
};
