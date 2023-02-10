import { FetchTransactionDataAsync } from "../../../api/Transactions.api";
import { sortByDate } from "../../../utils/sortByDate";
import { fetchTransactions, fetchTransactionsError } from "../type";

export const fetchTransatction = () => async (dispatch) => {
  try {
    const data = await FetchTransactionDataAsync();
    dispatch({ type: fetchTransactions, payload: { data: sortByDate(data) } });
  } catch (e) {
    dispatch({ type: fetchTransactionsError, payload: { data: e } });
  }
};
