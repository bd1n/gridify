import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import * as auth from './backend/auth';
import { useEffect, useState } from 'react';
import { getEnum, setEnum, setOrder, getOrder } from "./CategoryEnum"


function App() {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  useEffect( () => {
    setEnum();
    setOrder();
    console.log("ORDER IS ", getOrder());

    auth.getAuth()
    .then((response) => {
      setToken(response);
    });
    // auth.getAudioFeatures_Track('07A0whlnYwfWfLQy4qh3Tq')
    // .then((search) => {
    //   // setSearch(search);
    // });
    auth.getSearch("Drake")
    .then((a_id) => {
      if (!a_id) {
        // THIS IS AN ERROR
        console.log("APP SIDE no artist")
      }
      else{
        // FILL SQUARE
        console.log("APP SIDE", a_id)
        setId(a_id);
      }
    });

    console.log("enum is", getEnum());
  }, []);

  if (!token || !id) return null;

  return (
    <div className="App">
      <Header/>
      <h1>token: {token}</h1>
      <h1>id: {id}</h1>
    </div>
  );
}

export default App;
