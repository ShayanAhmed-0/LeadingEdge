import React from 'react'
import My_Anni_Cards from './anni_card'

const Cards = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'> 
 <My_Anni_Cards/>
 <My_Anni_Cards/>
 <My_Anni_Cards/>
   </div>
    </div>
  )
}

export default Cards
