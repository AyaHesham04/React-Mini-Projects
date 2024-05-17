import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ItemsList from './components/ItemsList';
import { items } from './data';
import { useState } from 'react';

function App() {

  const [itemsData, setItemsData]=useState(items);
  
  
  const allCategory = ['all', ...new Set(items.map((i) => i.category))] //new set removes duplicate values
  //All is now the first value in the array followed by the values of categories
  
  //filter by category
  const filterbyCategory = (cat) => {
    if(cat === 'all'){
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)

    }
  }

   //filter by search
   const filterbySearch = (word) => {
    if(word !== ''){
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
      console.log(newArr)
    }
  }

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
