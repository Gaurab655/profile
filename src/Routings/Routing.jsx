import React from 'react'
import {Route , Routes, BrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      
    </div>
  )
}

export default Routing
