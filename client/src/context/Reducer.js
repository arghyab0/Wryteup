const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, isFetching: true, error: false };
      break;

    case "LOGIN_SUCCESS":
      return { user: action.payload, isFetching: false, error: false };
      break;

    case "LOGIN_FAILURE":
      return { user: null, isFetching: false, error: true };
      break;

    case "LOGOUT":
      return { user: null, isFetching: false, error: false };
      break;

    default:
      return state;
  }
};

export default Reducer;
