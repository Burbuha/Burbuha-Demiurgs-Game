export const makePredicateFor = (arr, condition, count) => {
  return (
    arr.length >= count &&
    arr.slice(-count).every((item) => item.id === condition.id)
  );
};
export const randomFn = () => Math.floor(Math.random() * 2);

export const castLots = (randomFn) => Boolean(randomFn());