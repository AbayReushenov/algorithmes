import React from 'react';
import { Item } from './Item/Item';

interface Props {
  list: number[];
  title: string;
  className?: string
}
export const List: React.FC<Props> = ({ list , title, className}) => {
  return (
    <div className={className ? 'box '.concat(className): 'box' }>
      <h4 className='blue'>{title}</h4>

      <ul className='data-list'>
        {list && list.map((value, index) => <Item key={index} index={index} value={value} />)}
      </ul>
    </div>
  );
};
