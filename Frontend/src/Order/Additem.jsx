import React from 'react'

const Additem = ({ count, id, setdata, data, amount, setaddamount}) => {
    
    function handleincreament(){
       setdata(data.map((unique)=>(unique.id === id ? {...unique, quantity: unique.quantity+1} : unique))) 
       setaddamount(amounts => amounts + amount)
    }  
    function handledecreament(){
       setdata(data.map((unique)=>(unique.id === id ? {...unique, quantity: unique.quantity-1} : unique))) 
       if(count === 0){
        setaddamount(0)
       }else{
        setaddamount(amounts  => amounts - amount)
       }
    }  
    
    return (
      <div>
          <button onClick={()=>handledecreament()} style={{border:'2px solid black', borderRadius:'4px', height:'23px', width:'23px',}}>-</button>
          <span style={{marginRight:'10px', marginLeft:'10px'}}>{count}</span>
          <button onClick={()=>handleincreament()} style={{border:'2px solid black', borderRadius:'4px', height:'23px', width:'23px',}}>+</button>
      </div>
    )
  }
  
  export default Additem