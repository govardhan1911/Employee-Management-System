import React from 'react'
import Header from './pages/header/Header'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Nomatch from './pages/nomatch/Nomatch'
import Postuser from './pages/employee/Postuser'
import './App.css'
import UpdateUser from './pages/employee/UpdateUser'

function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<Postuser />} />
        <Route path='/employee/:id' element={<UpdateUser/>}/>
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  )
}

export default App
