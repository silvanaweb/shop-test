const setCategory = category => ({
  type: "SET_CATEGORY",
  category
});
const setTextFilter = text => ({
  type: "SET_TEXT",
  text
});

export { setCategory, setTextFilter };
