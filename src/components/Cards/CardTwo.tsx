import React from 'react';
import { Card } from 'reactstrap';

export class CardTwo extends React.Component {
  render() {
    return (
      <Card>
        <h6>Второй метод</h6>
        <pre>
          {`
const lineParityTwo = (arr: number[]) => {
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
    }
  }
  return result;
};
        `}
        </pre>
      </Card>
    );
  }
}
