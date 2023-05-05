import { configureStore } from "redux";

const initialState = {
  // начальное состояние
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // обработка действий
    default:
      return state;
  }
}

const store = configureStore(rootReducer);

export default store;
