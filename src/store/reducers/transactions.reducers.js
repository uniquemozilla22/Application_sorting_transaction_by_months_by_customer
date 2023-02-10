import { fetchTransactions, fetchTransactionsError } from "./../actions/type";
const initialState = {
  status: "idle",
  data: null,
  error: null,
};

export const transactions = (state = initialState, action) => {
  switch (action.type) {
    case fetchTransactions: {
      const ModifiedState = {
        ...state,
        status: "success",
        data: action.payload.data,
        error: null,
      };
      return ModifiedState;
    }
    case fetchTransactionsError: {
      const ModifiedState = {
        ...state,
        status: "error",
        data: null,
        error: action.payload.data,
      };

      return ModifiedState;
    }

    default: {
      return state;
    }
  }
};
