import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import AddPage from '../Pages/AddPage';
import EditPage from '../Pages/EditPage';
import Signin from '../Pages/Signin';
import SignUp from '../Pages/SignUp';


export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Add' element={<AddPage/>}></Route>
        <Route path='/Edit' element={<EditPage/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
  )
}
