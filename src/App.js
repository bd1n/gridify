import { React, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Board from './Components/Board';
import Square from './Components/Square';
import SearchBar from './Components/SearchBar';
import Categories from './Components/Categories';
import ColumnCategories from './Components/ColumnCategories';
import { setEnum, setOrder, getEnum,  } from './CategoryEnum';
import RowCategories from './Components/RowCategories';

function App() {
  const [show, setShow] = useState(false);
  const [rowCatClicked, setRowCatClicked] = useState(-1);
  const [colCatClicked, setColCatClicked] = useState(-1);
  const [columnCriteria, setColumnCriteria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colCategories, setColCategories] = useState([]);
  const [rowCategories, setRowCategories] = useState([]);

  useEffect(() => {
    const fetchEnum = async () => {
        setEnum();
        setOrder();
        var categories = getEnum();
        for(var i = 1; i <= 6; i++){
            switch(i){
                case 1:
                    rowCategories.push("Within " + categories[i] + " Genre");
                    break;
                case 2:
                    rowCategories.push("More than " + categories[i] + " Followers");
                    break;
                case 3:
                    rowCategories.push("Begins with letter " + categories[i]);
                    break;
                case 4:
                    colCategories.push("Studio debut in the " + categories[i] + "'s");
                    break;
                case 5:
                    colCategories.push("Most recently released an album in " + categories[i]);
                    break;
                default:
                    colCategories.push("Name contains " + categories[i] + " words");
                    break;
            }
        }
        //setColumnCategories(colCategories);
        setLoading(false);
    }
    fetchEnum();

}, []);

  return (
    <div className="App">
      <Header/>
      <SearchBar className='search-bar' show={show} rowCatClicked={rowCatClicked} colCatClicked={colCatClicked}/>
        <div style={{paddingLeft: '400px', paddingBottom: '30px', backgroundColor: "#7cc7ab", display: "flex", flexDirection: 'row'}}>
            <ColumnCategories categories={colCategories}/>
          <div>
          <RowCategories categories={rowCategories}/>
          <Board show={show} setShow={setShow} rowCatClicked={rowCatClicked} setRowCatClicked={setRowCatClicked} colCatClicked={colCatClicked} setColCatClicked={setColCatClicked}/>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
