import numeral from "numeral";

export const duration = (timeInSeconds) => {
  return numeral(timeInSeconds).format("00:00:00");
};

export const viewCount = (timeInSeconds) => {
  return numeral(timeInSeconds).format("0a");
};
