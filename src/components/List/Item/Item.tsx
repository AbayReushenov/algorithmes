import React from 'react'

interface Props{
  value: number
  index: number
}
export const Item: React.FC<Props>=({value, index})=> {
  return (
    <li>{index+1}. Value: {value}</li>
  )
}

