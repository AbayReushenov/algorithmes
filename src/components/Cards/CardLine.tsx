import React from 'react';
import { Card } from 'reactstrap';

export class CardLine extends React.Component {
  render() {
    return (
      <Card>
        <h6>Линейный метод</h6>
        <pre>
          {`
const lineParity = (arr: number[]) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr.slice(i + 1).filter((e) => arr[i] === e).length;
  }
  return result;
        };
        `}
        </pre>
      </Card>
    );
  }
}
