import {
  getTotalAwardPoints,
  getTotalRewardPoints,
} from "./getTotalAwardPoints";

export const sortByDate = (transactions) => {
  const monthsArrayData = [];
  const monthsAvailable = [];

  //
  transactions.forEach((data, index) => {
    if (!monthsAvailable.includes(data.date.getMonth())) {
      monthsAvailable[index] = data.date.getMonth();
    }
  });

  //   Adding the reward points update to the transactions
  const transactionsUpdatedWithRewards = transactions.map((data, index) => {
    return {
      ...data,
      rewardPoint: getTotalRewardPoints(data.purchase),
    };
  });

  //   sorting Month wise
  monthsAvailable.sort((a, b) => a - b === -1);

  //   filtering the array and appending to the month array strategy by seperating the months data with rest
  monthsAvailable.forEach((monthNumber, index) => {
    const data = transactionsUpdatedWithRewards.filter(
      (data, i) => data.date.getMonth() === monthNumber
    );

    monthsArrayData[index] = {
      monthNumber,
      totalAwardPoints: getTotalAwardPoints(data),
      data: getByCustomers(data),
    };
  });

  console.log(monthsArrayData);

  return monthsArrayData;
};

const getByCustomers = (data) => {
  const customersByMonth = [];

  data.forEach((transaction, index) => {
    if (!customersByMonth.includes(transaction.customerId))
      customersByMonth[index] = transaction.customerId;
  });
  const customerData = [];
  customersByMonth.forEach((customer, index) => {
    const dataByCustomersByMonth = data.filter(
      (data, i) => data.customerId === customer
    );
    customerData[index] = {
      customerId: customer,
      data: dataByCustomersByMonth,
      customerTotalReward: getTotalAwardPoints(dataByCustomersByMonth),
    };
  });

  return customerData;
};
