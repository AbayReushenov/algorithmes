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

export const lineParityTwo = (arr: number[]) => {
  const objRes = arr.reduce((acc: { [key: number]: number } , cur: number) => {
    if (acc.hasOwnProperty(cur)) {
      acc[cur] = acc[cur] + 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  let result = 0;
  for (const value of Object.values(objRes)) {
    if (value >= 2) {
      result = result + (value * (value - 1)) / 2;
      // Количество пар = ((Общее число элементов) * ( Общее число элементов — 1)) / 2
      // Сумма чисел от 1 до N = (N(N+1))/2, где N - наибольшее число ряда.
    }
  }
  return result;
};

export const lineParityThreeSorted = (arr: number[]) => {
  let result = 0;
  let index = 0;
  for (let i = 1; i <= arr.length; ++i) {
    if (arr[i - 1] !== arr[i]) {
      const gap = i - index;
      if (gap >= 2) {
        result = result + (gap * (gap - 1)) / 2;
      }
      index = i;
    }
  }
  return result;
};
