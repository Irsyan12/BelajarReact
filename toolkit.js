import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
    // state.cart = [...state.cart, action.payload]
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store: ", store.getState());


store.subscribe(() => {
  console.log("onchange store: ", store.getState());
});

store.dispatch(
  addToCart({
    id: 2,
    qty: 20,
  })
);

store.dispatch(login())