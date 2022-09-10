export const getRandomOpponents = (arr, num) => {
  const shuffledCarsArray = [...arr].sort(() => 0.5 - Math.random());

  return shuffledCarsArray.slice(0, num);
};
