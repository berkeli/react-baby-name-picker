import { Box } from '@chakra-ui/react'
import React from 'react'
import SingleName from './SingleName'

export default function Favourites({names, addOrRemoveFavourites, favouriteNames}) {
  return (
    <Box>
    Favourites: {names.map(name => <SingleName key={name.name} favourited={favouriteNames.includes(name.id)} name={name} addOrRemoveFavourites={addOrRemoveFavourites}/>)}
    </Box>
  )
}
