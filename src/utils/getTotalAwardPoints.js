export const getTotalAwardPoints = (dataByMonth) => {
  return dataByMonth.reduce((data1, data2) => data1 + data2.rewardPoint, 0);
};

export const getTotalRewardPoints = (purchase) => {
  if (purchase < 50) return 0;
  else if (purchase > 100) return (Math.floor(purchase) - 100) * 2 + 50;
  else return purchase - 50;
};
