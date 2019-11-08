export default (state = {}, { type, payload }) => {
  const matches = /(.*)_(REQUEST|ERROR)/.exec(type);
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  if (requestState === "ERROR") {
    return { ...state, [requestName]: payload.message };
  }
  const { [requestName]: data, ...rest } = state;
  return rest;
};
