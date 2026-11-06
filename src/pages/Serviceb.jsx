import React, { useState } from 'react'
import wed from 'D:/kv ni project/src/assets/wed kv ni pr copy 2.jpg'
import bir from 'D:/kv ni project/src/assets/kv ni brit pr.jpg'
import ani from 'D:/kv ni project/src/assets/kv ani pr.jpg'
import cor from 'D:/kv ni project/src/assets/cor kv ni pr.jpg'
import pri from 'D:/kv ni project/src/assets/fm pr kv pr.jpg'
import baby from 'D:/kv ni project/src/assets/baby.jpg'
const Serviceb = () => {
  const [inp, setinp] = useState("")
  return (
    <div className='ser'>












      <div className="box1">

        <h5>01/ OUR SERVICES</h5>
      </div>

      <div className="box2">
        <h2>
          Every Occasion, beautifully <br></br>
          imagined.
        </h2>
      </div>

      <div className="box3">
        <h5>
          Six ways to celebrate. One thoughtfuly approved <br></br>
          shaped entirely around you
        </h5>
      </div>

      <div className="box4">


        <div className="imgBo">
          <img src={wed} className='imgbb' />

        </div>
        <div className="wed0">

          <h2 className='wed'>  Weddings and engagements </h2>



          <h5 className='wed2'>A beautifully personal beginning to your forever.</h5>

        </div>
      </div>

      <div className="box5">
        
        <div className="bir0">

          <h1 className='bir'> Birthday parties</h1>
          <h5 className='bir2'> Another year, Celebrated in our distinctive style </h5>
        </div>
        <img src={bir} className='imgBox1' />

      </div>

      <div className="box6">
        
        <img src={ani} className='imgBox' />

        <div className="ani0">

        <h1 className='ani1'> Anniversaries</h1>
        <br></br>

        <h5 className='ani2'>An intimate tribule to the moments you share.</h5>
      </div>
        </div>

      <div className="box7">
          <div className="cr0">

        <h1 className='cor1'>Corporate events</h1>
        <h5 className='cor2' >Considered experiences that birng people together.</h5>
         
          </div>
        <img src={cor} className='imgBox1' />
      </div>

      <div className="box8">
        <h6>05</h6>
        <img src={pri} className='imgBox' />

        <div className="pri0">

        <h1 className='pri1' > Private parties </h1>
        <h5 className='pri2'>Exceptional gatherings for your favourite people.</h5>
        </div>

      </div>


      <div className="box9">
        
        <div className="baby0">

        <h1 className='baby1'>Baby showers and
         special Occasions.</h1>

        <h5 className='baby2'>Thoughful settings for lifes sweetest milestores.</h5>
        </div>
        <img className='imgBox1 ' src={baby} />

      </div>

      <div className="box10" id='srvform'>
        <h5 className='b'> 02 /BOOKING</h5>
        <form>

          <fieldset className='booking'>

            <legend><h1 className='bye'>Book your Experience </h1></legend>

            <h4 className='detail'> Fill in your details to reserve your expereience. </h4>

            <h2 className='bt'>Booking type</h2>

            <label className='booking2'>
              <input type="radio" className='radio1' name="rd" id="table" value={inp} />
              Table Reservation
            </label>

            <br></br>


            <label className='booking2'>

              <input type='radio' className='radio1' name="rd" value={inp} id="birthday" />
              Birthday Celebration
            </label>


            <br></br>



            <label className='booking2'>
              <input type='radio' className='radio1' name="rd" value={inp} id="Aniversey" />
              Anniversary
            </label>


            <br></br>

            <label className='booking2' for="rd">

              <input type='radio' className='radio1' name="rd" value={inp} id="wedding " />
              Wedding / Engagement
            </label>


            <br></br>



            <label className='booking2'>

              <input type='radio' className='radio1' name="rd" value={inp} id='corporate' />
              Corporate / Private Event
            </label>



            <br></br>

            <label className='booking2'>


              <input type='radio' className='radio1' value={inp} name="rd" id='other' />
              Other Special Event
            </label>









          </fieldset>


          <h3 className='pd'>Personal details</h3>

          <h4 className='fh'>
            CUSTOMER NAME
          </h4>

          <input type='text' placeholder='Enter your full Name ' className='inpt' />

          <h3 className='fh'>Phone number</h3>

          <input type='number' placeholder='Enter Phone Number ' className='inpt' />


          <h3 className='fh'> Email Address   </h3>
          <input type='text' placeholder='Email Address' className='inpt' />



          <h2 className='bd' > Booking Details</h2>

          <h3 className='fh' > Booking Date </h3>
          <input type='number' placeholder=' 🗓️1-1-2000' className='inpt' />
          <br></br>


          <button className='bc'> Booking Confirm</button>



        </form>



      </div>









    </div>
  )
}

export default Serviceb