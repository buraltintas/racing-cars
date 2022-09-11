export const getRandomCar = (arr) => {
  const randomCar = arr[Math.floor(Math.random() * arr.length)];

  return randomCar;
};
