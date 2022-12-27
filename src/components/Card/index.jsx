import React from 'react'

export const Card = ({name,flag,region, population}) => {
  return (
    <div className='card'>
        <img src={flag} alt="flag" />
        <p>{name}</p>
        <p>{region}</p>
        <p>{population}</p>
        </div>
  )
}
