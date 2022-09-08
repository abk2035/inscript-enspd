
 export const register = async (data)=>{
  try{
     const response = await fetch(process.env.REACT_APP_API_URL,
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