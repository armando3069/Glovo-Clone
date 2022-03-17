import React from 'react'
import './items.css'
function items({title,img}) {
  return (
    <div className='item'>
     <div className='item-wrapper'>
     <img className='item-img'  src={img} />
      <p className='item-title'>{title}</p>
     </div>
    </div>
  )
}

export default items