import React from 'react'
import g1m from 'D:/kv ni project/src/assets/wed kv ni pr copy 2.jpg'
import g2m from 'D:/kv ni project/src/assets/kv ani pr.jpg'
import g3m from 'D:/kv ni project/src/assets/fm pr kv pr.jpg'
import g4m from 'D:/kv ni project/src/assets/special kc ni.jpg'



const Gallry = () => {
  return (
    <div className='gallry'>

  <div className="gl1">

<h4 className='tic'> THE INSPIRATION COLLECTION </h4>



  </div>







  <div className="gl2">

    <div className="d1g">

<img src={g1m} className='g1m' width={720}/>
<br></br>
<h4 className='wdc'> WEDDING DECORATIONS . CONCEPT  </h4>
<h1 className='g'>A garden in ivory</h1>
<h4 className='fl'>White florals and a softly framed garedn ceremony.</h4>
    </div>
<div className="d1g">
<img src={g2m} width={720} height={370} />
<br></br>
<h4  className='wdc'> ANNIVERSERY CELEBRATION CONCEPT  </h4>

<h1 className='g'> just the two of you</h1>

<h4 className='fl'> Romantic couple dinnerkv </h4>

<div className="dlg">

<img src={g3m} width={720} height={370}/>
<h4 className='wdc'>PRIVATE PARTIES CONCEPET </h4>
<br></br>
<h1 className='g' > Under the evening sky</h1>

<h4 className='fl'>A relaxed garden dinner beneath a cnopy of lights.</h4>




</div>

<div className="dlg">

<img src={g4m}  width={720} height={370}/>
<br></br>
<h4 className='wdc' >LUXURY CANDLE DECORATION </h4>

<h1 className='g'>The Candlelight Affair</h1>

<h4 className='fl'> An Evening of Elegance & Romance </h4>





</div>


















</div>




  </div>




  
  <div className="gl3">



    <h1 className='tells'> 
      Every Celebration <br></br>
      Tell a Story.


    </h1>
  </div>

   





  <div className="gl4">


    <h4 className='awf' > A world of atmosphere, considered details
       and beautiful possibilities. Find the <br></br>
    feeling for your next celebration.  </h4>



  </div>










  <div className="gl5">

<h5 gl51> Illustrative event concepts, curated for inspiration. 
  These images are not presented as completed <br></br>
  Evevtora client projects. </h5>




  </div>







 



    </div>
  )
}

export default Gallry