import React from 'react'
import SingleName from './SingleName';

export default function ListNames({names, favouriteNames, addOrRemoveFavourites}) {
  return (
    <div className='names-container'>
        {names.map(name => <SingleName favourited={favouriteNames.includes(name.id)} key={name.name} name={name} addOrRemoveFavourites={addOrRemoveFavourites}/>)}
    </div>
  )
}