let initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
          if (state[i].newItem.id === action.payload.newItem.id) {
            state[i].qty += 1;
            return [...state];
          }
        }
      }
      state.push(action.payload);
      return [...state];

    case "SUB_ITEM":
      if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
          if (state[i].newItem.id === action.payload.newItem.id) {
            state[i].qty -= 1;
            return [...state];
          }
        }
      }
      state.push(action.payload);
      return [...state];
    default:
      return [...state];
  }
};

export default orderReducer;
