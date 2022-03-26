import React from 'react'
import {market} from '../data.js'
import Items from './items/items'
import './products.css'

function product() {
    return (
        <div className='p'>
        <h1 id='p-title'>Top restaurants and more in Moldova</h1>
        <div className="p-items wigh">
        { market?.map((item,index)=>(
            
            <Items 
            key={index}
            id={item.id}
            title={item.title}
            img={item.img}
            />
            
            ))
        }
        </div>
     
    </div>
  )
}

export default product