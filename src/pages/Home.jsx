import React from 'react'
import wed from 'D:/kv ni project/src/assets/wed kv ni pr.jpg'
import bir from '../assets/kv ni brit pr.jpg'
import ani from '../assets/kv ani pr.jpg'
import { Link } from 'react-router-dom'







const Home = () => {
    return (
       

        

        <div className='home2'>
            <h4 className='th'> THOUGHFULLY PLAND. BEAUTIFULLY CELEBRATED  </h4>
            <div className='svg'>
                <h1 className='we'> We Make Every Moment Extraordinary.</h1>

                <h4 className='l'>Frome intimate getherings to grand celebration,
                     Eventora brings your vision to life through thoughatful planning,
                      inspired desing and considered details.</h4>

                  <button className='book'>Book Your Event ↗</button>
                    

                  <Link to="/srv"> 
                    <button className='expl'>Explore Services ↗</button>

                  </Link>
        


            </div>
            

        <fieldset className='field'>
        <legend className='add'><h1>Address</h1></legend>
       


        </fieldset>
        </div>
    
    )
}

export default Home