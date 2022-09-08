
import { useEffect, useState } from 'react';
import Routes from './components/Routes';
import { DBContext } from './components/Routes/Context';

function App() {
  const [DBData,setDBData]=useState({});
  const URL = 'http://localhost:80/enspd-inscript-api/';
  
  
  useEffect(()=>{
    const fetchData = async ()=>{
      await fetch( URL+'?route=data',
      {
          method : 'GET',
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              }
      }).then((res)=> res.json())
        .then((res)=>{
        console.log(res);
        setDBData(res); })
        .catch((err)=> console.log('erreur '+ err))
    }

    fetchData();
  },[]);

  return (
    <DBContext.Provider value={ DBData }>
      <Routes />
    </DBContext.Provider>
  );
}

export default App;
