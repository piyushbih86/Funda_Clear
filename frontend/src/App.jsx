import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AuthPage from './pages/auth/index.jsx'

const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
    </div>
  )
}

export default App
