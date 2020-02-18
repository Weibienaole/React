const ListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          compeleted: false
        }
      ];
    case "UPDATE":
      return state.map(list => (
        (list.id === action.id)
        ? { ...list, compeleted: !list.compeleted }
        : list
      ));
    default:
      return state;
  }
};

export default ListReducer;
