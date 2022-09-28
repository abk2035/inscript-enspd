import axios from 'axios';
const URL1 = 'http://localhost:80/inscript-enspd/api/';


 // service for register students
 export const register = async (num) => {
        let res , err = null ;
                           await axios (URL1,
                                        {
                                          method : 'POST',
                                          headers:{
                                                  
                                                  'Content-Type': 'application/json'
                                                  },
                                          data: {numInsc : num},
                                          params : { route: 'register' }
                                        }).then(result => { res = result.data; })
                                          .catch(error => { err = error })
          return [res,err] ;
         
}

// service for update student
export const update = async (data) => {
  let res , err = null ;
                     await axios (URL1,
                                  {
                                    method : 'PUT',
                                    headers:{
                                            
                                            'Content-Type': 'application/json'
                                            },
                                    data,
                                    params : { route: 'update' }
                                  }).then(result => { res = result.data; console.log(res)})
                                    .catch(error => { err = error })
    return [res,err] ;
   
}

 // service to fetch data from database
export const fetchData = ( payload,keyword) => {
  return axios( URL1,
       {method : 'GET',
        headers:{
                'Content-Type': 'application/json'
                 },
        params: {
                route: 'data',
                payload,
                keyword,
               }
          })                
      }
  
