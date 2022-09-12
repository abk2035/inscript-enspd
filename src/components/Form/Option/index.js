

const Option = (array)=>{
    return array.map((value,key)=>{
       const entries = Object.entries(value)
       return( <option key={key} value={entries[0][0]}>{entries[0][1]}</option>)
    });
  }

  export default Option ;