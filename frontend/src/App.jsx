import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import Profile from  './pages/Profile';
import Reward from './pages/Reward';
import Upload from './pages/Upload';
import Setting from './pages/Setting';
import Logout from './pages/Logout';
import ProfilePhoto from './pages/ProfilePhoto';
import Notification from './pages/Notification'

import { Routes, Route, Navigate } from 'react-router-dom'
const App=()=>{

  return (
   <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path ="/register" element={<Register/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path ="/Reward" element={<Reward/>}/>
    <Route path="/Setting" element={<Setting/>}/>
    <Route path="/Upload" element ={<Upload/>}/>
    <Route path="/Logout"  element ={<Logout/>}/>
    <Route path="/ProfilePhoto" element ={<ProfilePhoto/>}/>
    <Route path="/Notification" element={<Notification/>}/>



   </Routes>
  )
}

export default App;