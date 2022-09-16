import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Header from './components/Header'
import WorkTodo from './components/WorkTodo'
import AssignmentApp from './components/assignment/AssignmentApp'
import Assignments from './components/assignment/Assignments'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {

  const [setAuthor]=useState('')
    const [setWork]=useState('')
    const [setCategory]=useState('')

  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
       {/* <Route exact path='/' element={<Assignments/>}/> */}
       <Route exact path='/work' element={<AssignmentApp/>}/>
      </Routes>
    </Router>

  )
}


export default App
