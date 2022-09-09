import axios from 'axios';

 // service for register students
 export const register = async (data)=>{
      try{
        const response = await axios (process.env.REACT_APP_API_URL,
                                  {
                                    method : 'POST',
                                    headers:{
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                            },
                                    body: JSON.stringify(data) 
                                  })
              return (response.json()) ;
        }catch(err){ 
          console.log(err);
        }
      
}

 // service to fetch data from database
export const fetchData = ( payload,keyword)=>{
        const URL = 'http://localhost:80/enspd-inscript-api/';
  
        return axios( URL+'?route=data&payload='+payload+'&keyword='+keyword,
                              {
                                  method : 'GET',
                                  headers:{
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json'
                                      }
                              })                
     
}