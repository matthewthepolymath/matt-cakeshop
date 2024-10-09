import React, { useEffect } from 'react'
import { useState } from 'react'

export default function AllCakes() {
    const [cake, setCake] = useState([])
    const getData = async ()=>{
        const response = await fetch("http://localhost:8080/cakes")
        const data = await response.json()
        console.log(data)
        setCake(data)
    }



    useEffect(()=>{
        getData()
    }, [])
  return (
    <div className='cakeDiv'>
        {cake.map((item)=>{
            
            return(
                <div className='cake'>
                <h1>{item.cakeName}</h1>
                <h2>${item.price}</h2>
                <h4>Flavor: {item.flavor}</h4>
                <p>Cake Description: {item.description}</p>


                </div>
            )
        })}
    </div>
  )
}
