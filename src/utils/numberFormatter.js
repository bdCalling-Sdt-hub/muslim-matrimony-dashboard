export const formatNumber = (num) => {
  if (num < 1000) {
    return num;
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num < 1000000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else {
    return (num / 1000000000).toFixed(1) + "B";
  }
};