// @flow
type Transaction = {
    id: number,
    text: string,
    amount: number,
  };
  
  type State = {
    transection: Transaction[],
  };
  
  type Action =
    | { type: 'Add_Transection', payLoad: Transaction }
    | { type: 'Delete_Transection', payLoad: number };
  
  export default (state: State, action: Action): State => {
    switch (action.type) {
      case 'Add_Transection':
        return {
          ...state,
          transection: [action.payLoad, ...state.transection],
        };
      case 'Delete_Transection':
        return {
          ...state,
          transection: state.transection.filter((obj) => obj.id !== action.payLoad),
        };
      default:
        return state;
    }
  };
  