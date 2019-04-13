// Filters Reducer

const filtersReducerDefaultState = {
  category: ""
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.category
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
