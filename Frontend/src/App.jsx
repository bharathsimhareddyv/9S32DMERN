import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Register from './Components/Register'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
