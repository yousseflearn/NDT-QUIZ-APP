import axios from 'axios';
export const attempt_number = (result) => {
  return result.filter((r) => r !== undefined).length;
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

/** get server data */
export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

/** post server data */
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
