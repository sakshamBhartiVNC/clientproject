import React from 'react'
import img1 from'D:/kv ni project/src/assets/WhatsApp Image 2026-10-26 at 2.03.49 PM-Photoroom.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="pp">

    <div className='nav'  >
        <img src={img1} className='img1'/>




        <Link to='/'>
        <h4 className='home'>Home</h4>

        </Link>
        


      <Link to='/service'>
       <h4 className='serbook'>Services & Bookoing</h4>
      </Link>

<Link to='/gallry'>
       <h4 className='gal'>Gallery</h4>
</Link>

      <Link to='/about'>
       <h4 className='ab'>About Us</h4>
      </Link>

      <Link to='/trm'>
       <h4 className='tmc'>Terms & Conditions</h4>
      </Link>

       <button className='plain' > Plan your wish</button>

    </div>
    </div>
  )
}

export default Nav