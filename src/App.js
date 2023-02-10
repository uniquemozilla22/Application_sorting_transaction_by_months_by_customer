import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransactionComponent } from "./components/Transaction.comp";
import { fetchTransatction } from "./store/actions/Transations/FetchTransactions.action";
import { sortByDate } from "./utils/sortByDate";

function App() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.data);
  

  useEffect(() => {
    if (!transactions) dispatch(fetchTransatction());
  }, [dispatch, transactions]);

  return transactions ? (
    <div className="App">
      {transactions.map((transaction, index) => (
        <TransactionComponent key={index} transaction={transaction} />
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
