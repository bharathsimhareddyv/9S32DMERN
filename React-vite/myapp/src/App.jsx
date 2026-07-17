import React from 'react'
import Signup from './Forms/Signup'
import Parent from './Parent'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import Useref from './Hooks/Useref'
import PrevCount from './Hooks/PrevCount'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/useeffect' element={<UseEffect/>}/>
     <Route path='/usestate' element={<UseState/>}/>
     <Route path='/' element={<Signup/>}/>
     <Route path="/useref" element={<Useref/>}/>
     <Route path='/prevcount' element={<PrevCount/>}/>

     </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
