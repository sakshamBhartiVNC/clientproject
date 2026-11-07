import React from 'react'
import'../src/App.css'
import Nav from './component/Nav'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Serviceb from './pages/Serviceb'
import Gallry from './pages/Gallry'
import About from './pages/About'
import Term from './pages/Term'
import { FallingLeaves } from 'falling-leaves/react'

const App = () => {
  return (

    <BrowserRouter>
    <div>

      <FallingLeaves
      fullScreen
      shape ="maple" 
      />

<Nav/>


<Routes>
  <Route path='/srv' element={<Serviceb/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/service' element={<Serviceb/>}/>
<Route path='/Gallry' element={<Gallry/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/trm'  element={<Term/>}/>
</Routes>
    </div>

    </BrowserRouter>
  )
}

export default App