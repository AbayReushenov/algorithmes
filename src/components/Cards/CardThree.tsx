import React from 'react';
import { Card } from 'reactstrap';

export class CardThree extends React.Component {
  render() {
    return (
      <Card>
        <h6>Третий метод</h6>
        <pre>
          {`
const lineParityThreeSorted = (arr: number[]) => {
  let result = 0;
  let index = 0;
  for (let i = 1; i <= arr.length; ++i) {
    if (arr[i - 1] !== arr[i]) {
      const gap = i - index;
      if (gap >= 2) {
        result = result + (gap * (gap - 1)) / 2;
// Количество пар = ((Общее число элементов) * ( Общее число элементов — 1)) / 2
      }
      index = i;
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
