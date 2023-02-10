import { TableComponent } from "./Table.comp";
import classes from "./Table.module.css";

export const TransactionComponent = ({ transaction }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className={classes.tablecontainer}>
      <h1>
        {months[transaction.monthNumber]}'s Total Reward is{" "}
        {transaction.totalAwardPoints}
      </h1>
      {transaction.data.map((customerData, index) => {
        return (
          <div key={index}>
            <h2>Customer : {customerData.customerId}</h2>
            <h3>Reward Points : {customerData.customerTotalReward}</h3>
            <TableComponent data={customerData.data} />
            <hr />
          </div>
        );
      })}
      {/* <TableComponent data={}/> */}
    </div>
  );
};
