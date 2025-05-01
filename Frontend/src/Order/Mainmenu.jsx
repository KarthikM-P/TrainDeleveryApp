import  { useEffect } from 'react'
import Additem from './Additem';
import Bottom from './Bottom';
import pizzamenu from '../../db.json'
import React from "react";

const Mainmenu = ({searchQuery, data, setdata, addAmount, setAddAmount}) => {
    
    

    function handleitems(ids, AmountData, availability){
        setdata(data.map((unique)=>(
            ids === unique.id ? {...unique, availability:!unique.availability, quantity:1} : unique
        )))
        if(availability === false){
            setAddAmount(
            addAmount + AmountData
        )
        }else{
            setAddAmount(
                addAmount - AmountData
            )
        }
        
    }
    useEffect(()=>{
       if(searchQuery === ''){
        setdata(pizzamenu)
    }
    else{
        setdata(data.filter((itemfilter)=> itemfilter.name.toLowerCase().includes(searchQuery.toLowerCase())))
    } 
    },[searchQuery])
    


  return (
    
    <div>
        <div className="grid grid-cols-3 gap-6 px-2">
            {data.map((items, id)=>(
                <div key={id} style={{border:'1px solid black', textAlign:'center',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',  borderRadius: '8px', padding: '16px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <img src={items.image} alt="" className='h-50 w-80 '/>
                    <h2 className="text-xl font-semibold mt-4">{items.name}</h2>
                    <p className="text-orange-500 font-bold mb-1"><strong>Price - </strong>{items.price}</p>
                    <span>{items.availability === true ?<Additem avai={items.availability} setdata={setdata} data={data} count={items.quantity} id={items.id} amount={items.price} setaddamount={setAddAmount}
                    />:null}</span>
                    <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600" onClick={()=>handleitems(items.id, items.price, items.availability,items.quantity )}>{items.availability === true ? "Delete": "Add to cart"}</button>
                </div>
            ))}
        </div>
        {addAmount === 0 ? null:<Bottom amount={addAmount}/>}
       
    </div>
    
  )
}

export default Mainmenu