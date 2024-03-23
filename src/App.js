import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { getAuth } from './backend/auth';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState(null);
  useEffect( () => {
    getAuth().then((response) => {
      setToken(response);
    });
  }, []);

  if (!token) return null;

  return (
    <div className="App">
      <Header/>
      <h1>{token}</h1>
    </div>
  );
}

export default App;
