import Search from './components/Search';
import './App.css';
import names from './constants/babyNamesData.json'
import ListNames from './components/ListNames';
import { useEffect, useState } from 'react';
import Favourites from './components/Favourites';
import { Divider } from '@chakra-ui/react';

function App() {
  const [favouriteNames, setFavouriteNames] = useState(JSON.parse(localStorage.getItem('favouriteNames')) || []);
  const [namesFiltered, setNamesFiltered] = useState(names);
  const [searchQuery, setSearchQuery] = useState('');
  const [gender, setGender] = useState('All');
  
  useEffect(() => {
    console.log(gender)
    setNamesFiltered(names.filter(({name, sex}) => (gender === 'All' || gender === sex) && name.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery, gender]);

  const addOrRemoveFavourites = (id) => {
    if (favouriteNames?.includes(id)) {
      setFavouriteNames(favouriteNames.filter(name => name !== id));
    } else {
    const newFavouriteNames = [...favouriteNames, id];
    setFavouriteNames(newFavouriteNames);
    localStorage.setItem('favouriteNames', JSON.stringify(newFavouriteNames));
    }
    console.log(favouriteNames)
  }
  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} gender={gender} setGender={setGender}/>
      {favouriteNames.length > 0 && <Favourites favouriteNames={favouriteNames} names={names.filter(e=> favouriteNames.includes(e.id))} addOrRemoveFavourites={addOrRemoveFavourites}/>}
      <Divider mt='3' mb='3'/>
      <ListNames names={namesFiltered} favouriteNames={favouriteNames} addOrRemoveFavourites={addOrRemoveFavourites}/>
    </div>
  );
}

export default App;
