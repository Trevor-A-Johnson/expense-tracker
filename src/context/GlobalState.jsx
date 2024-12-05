// @flow
import React, { useReducer, createContext, type Node, type Context } from "react";
import AppReducer from "./AppReducer";

type Transaction = {
  id: number,
  text: string,
  amount: number,
};

type State = {
  transection: Transaction[],
};

type ContextProps = {
  transection: Transaction[],
  addTrasnsection: (transection: Transaction) => void,
  deleteTransection: (id: number) => void,
};

const initialState: State = {
  transection: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Explicitly type the context
export const GlobalContext: Context<ContextProps> = createContext<ContextProps>({
  transection: initialState.transection,
  addTrasnsection: () => {},
  deleteTransection: () => {},
});

export function GlobalContextProvider({ children }: { children: Node }): React$Node {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransection(id: number): void {
    dispatch({
      type: "Delete_Transection",
      payLoad: id,
    });
  }

  function addTrasnsection(transection: Transaction): void {
    dispatch({
      type: "Add_Transection",
      payLoad: transection,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transection: state.transection,
        addTrasnsection,
        deleteTransection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
