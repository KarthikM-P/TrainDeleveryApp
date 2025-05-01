import { ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import React from "react";

const Bottom = ({amount}) => {
    const navigate = useNavigate()
  return (
    <div style={{display:'flex', alignItems:"center", justifyContent:"space-between", height:"70px", width:'98%',backgroundColor:'#333', color:'white',padding:"5px 15px", }}>
        <h3>Total cart value: {amount}</h3>
        <button style={{backgroundColor:'transparent', border:'none',color:'white'}} onClick={()=>navigate('/cart')}><ShoppingCart/></button>
    </div>
  )

  
}

export default Bottom