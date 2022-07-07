const random = (from: number, to: number) => {
  return Math.round(Math.random() * (to - from) + from);
};

export const data = (n: number) => (from: number, to: number) => {
  const funRundom = () => random(from, to);
  return Array.from(Array(n).keys()).map(funRundom);
};

export const sortedData=(newData: number[]) => [...newData].sort((a, b) => a - b);

export const lineParity = (arr: number[]) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr.slice(i + 1).filter((e) => arr[i] === e).length;
  }
  return result;
};
