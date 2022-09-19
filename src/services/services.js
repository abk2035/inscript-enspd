import axios from 'axios';
const URL = 'http://localhost:80/inscript-enspd/api/';
//const URL = 'http://inscript-enspd.local/api/';


 // service for register students
 export const register = async (data) => {
        let res , err = null ;
                           await axios (URL,
                                        {
                                          method : 'POST',
                                          headers:{
                                                  
                                                  'Content-Type': 'application/json'
                                                  },
                                          data ,
                                          params : { route: 'register' }
                                        }).then(result => { res = result.data})
                                          .catch(error => { err = error })
          return [res,err] ;
         
}

 // service to fetch data from database
export const fetchData = ( payload,keyword) => {
  return axios( URL,
       {method : 'GET',
        headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                 },
        params: {
                route: 'data',
                payload,
                keyword,
               }
          })                
      }
  
  // service to download pdf file ;
export const download =  ( uid ) =>{
            return axios( URL,
              {
                method : 'GET',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                params: {
                      route: 'download',
                      uid
                    }
            })  
   
}