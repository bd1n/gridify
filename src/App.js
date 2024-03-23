import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import * as auth from './backend/auth';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect( () => {
    auth.getAuth()
    .then((response) => {
      setToken(response);
    });
    // auth.getAudioFeatures_Track('07A0whlnYwfWfLQy4qh3Tq')
    // .then((search) => {
    //   // setSearch(search);
    // });
    auth.getSearch("Drake")
    .then((search) => {
      if (!search) {
        // THIS IS AN ERROR
        console.log("APP SIDE no artist")
      }
      else{
        // FILL SQUARE
        console.log("APP SIDE", search)
      }
    });
  }, []);

  if (!token && !search) return null;

  return (
    <div className="App">
      <Header/>
      <h1>{token}</h1>
      {/* <h1>{search}</h1> */}
    </div>
  );
}

export default App;
