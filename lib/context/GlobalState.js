import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transection: [{
    id: 1,
    text: "Flower",
    amount: -20
  }, {
    id: 2,
    text: "Salary",
    amount: 300
  }, {
    id: 3,
    text: "Book",
    amount: -10
  }, {
    id: 4,
    text: "Camera",
    amount: 150
  }]
};
export const GlobalContext = createContext({
  transection: initialState.transection,
  addTrasnsection: () => {},
  deleteTransection: () => {}
});
export function GlobalContextProvider({
  children
}) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransection(id) {
    dispatch({
      type: "Delete_Transection",
      payLoad: id
    });
  }
  function addTrasnsection(transection) {
    dispatch({
      type: "Add_Transection",
      payLoad: transection
    });
  }
  return <GlobalContext.Provider value={{
    transection: state.transection,
    addTrasnsection,
    deleteTransection
  }}>
      {children}
    </GlobalContext.Provider>;
}