import React from 'react'
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import Home from './Page/home/Home'

import List from './Page/list/List'
import Hotel from './Page/hotle/Hotel'
import Register from './components/auth/Register'
import Login from './components/auth/login/Login'
import { ProtectedRoute } from "protected-route-react"
import { useSelector } from 'react-redux'
function App() {
  const { isAuthenticated, user, message, error, loading } = useSelector((state) => state.users);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel/:id' element={<Hotel />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/'>
            <Login />
          </ProtectedRoute>



        } />

      </Routes>
    </Router>

  )
}

export default App