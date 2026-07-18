import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import AdminDashboard from './Dashboards/AdminDashboard'
import UserDashboard from './Dashboards/UserDashboard'
import OrganizerDashboard from './Dashboards/OrganizerDashboard'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/orgdashboard' element={<OrganizerDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
