import React from 'react'

function Employee({ id, isim, soyisim, yas }) {
  return (
    <div className='employee'>
      <h4 className='employee-name'>{isim}</h4>
      <h4 className='employee-surname'>{soyisim}</h4>
      <h3 className='employee-age'>{yas} ₺</h3>
    </div >
  )
}

export default Employee

