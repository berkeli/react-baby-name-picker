import { Button, Input,  InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BiSearch, BiFemaleSign, BiMaleSign } from 'react-icons/bi'

export default function Search({searchQuery, setSearchQuery, gender, setGender}) {
  return (
      <InputGroup sx={{width: 'fit-content'}} mb='5'>
          <InputLeftElement children={<BiSearch/>} pointerEvents='none'/>
          <Input size='md' placeholder='Search for a name' width='auto' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <Button mx='2' onClick={() => setGender('All')}>All</Button>
        <Button mx='2' onClick={() => setGender('m')}><BiFemaleSign/></Button>
        <Button mx='2' onClick={() => setGender('f')}><BiMaleSign/></Button>
      </InputGroup>
  )
}
