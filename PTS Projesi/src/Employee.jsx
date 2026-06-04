import React from 'react'

function Employee({ id, isim, soyisim, yas }) {
  return (
    <div className='employee'>
      <h4 className='employee-name'>{isim}</h4>
      <p className='employee-surname'>{soyisim}</p>
      <h3 className='employee-age'>{yas} ₺</h3>
      <div className='employee-details'><a style={{ textDecoration: 'none' }} href={link}>Detaylar</a></div>
    </div >
  )
}

export default Employee

