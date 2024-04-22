import { createContext, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import Home2 from './components/Home2'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Prologin from './components/Prologin'

export const myContext = createContext();

function App() {
  
const [btn,setBtn]=useState(true)

  return (
    <div  >
    <myContext.Provider  value={{btn,setBtn} } >  
    <Routes>
     <Route    path='/'    element={<Home/>}         />
     <Route    path='/login'    element={<Login/>}    />
     <Route    path='/prologin'    element={<Prologin/>}   />
   </Routes>
   </myContext.Provider  > 
    </div>
  )
}

export default App
