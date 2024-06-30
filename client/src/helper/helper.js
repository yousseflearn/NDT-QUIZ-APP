export const attempt_number = (result) => {
  return result.filter((r) => r == !undefined).length;
};

export const earnPoint_number = (result, answers, point) => {
  return result
    .map((element, index) => answers[index] === element)
    .filter((index) => index)
    .map((index) => point)
    .reduce((prev, curr) => prev + curr, 0);
};

export const flagResult = (totalPoints, earnPoints) => {
  return (totalPoints * 1) / 2 < earnPoints;
};
