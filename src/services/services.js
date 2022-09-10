import axios from 'axios';
const URL = 'http://localhost:80/enspd-inscript-api/';


 // service for register students
 export const register = async (data) => {
           try{
                     return   axios (URL,
                                        {
                                          method : 'POST',
                                          headers:{
                                                  
                                                  'Content-Type': 'application/json'
                                                  },
                                          data ,
                                          params : { route: 'register' }
                                        })
            }catch(err){ 
             console.log(err);
          }   
}

 // service to fetch data from database
export const fetchData = ( payload,keyword) => {
  
                return axios( URL,
                                {
                                  method : 'GET',
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