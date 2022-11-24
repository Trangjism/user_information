import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import InputForm from './component/InputForm';
import NamceCard from './component/NameCard';
import Loading from './component/Loading';
import NoUser from './component/NoUser';

function App() {
  const [data, setData] = useState(null);
  const[nameUserInput, setNameUserInput] = useState('');  
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    getUserData(`https://api.github.com/users/${nameUserInput}`)
    .then(respone => {    
      console.log(respone.data)  
      setData(respone.data);
      setLoading(null)
    })
    .catch(erro => {      
      setLoading(null)
    })
    
  }, [nameUserInput])

  const getUserData = (url) => {
    return axios.get(url)
  };
  return (
    <div className="App"> 
      {loading && <Loading/>  }   
      <InputForm setNameUserInput={setNameUserInput} setLoading={setLoading}/>
      {nameUserInput === "" ? <NoUser/> :<NamceCard value={data}/>}      
    </div>
  );
}

export default App;


