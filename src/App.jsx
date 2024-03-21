import React from 'react';
import NoteForm from './components/NoteForm/NoteForm'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} exact />
      <Route path='/notes' element={<NoteForm />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
