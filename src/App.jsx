import React, { useState } from 'react';
import Dashboard from './pages/Admin/Dashboard'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Webiform from './pages/Admin/Webiform'
import Webitable from './pages/Admin/Webitable'
import Home from './pages/User/Home'
import ProductList from './pages/User/ProductList'
import DetailProduct from './pages/User/DetailProduct'
import Webibot from './pages/User/Webibot'

// Import AdminLogin component here
import AdminLogin from './pages/Admin/AdminLogin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<ProductList />} path='/productlist' />
        <Route element={<DetailProduct />} path='/detailproduct/:id' />
        <Route element={<Webibot />} path='/webibot' />

        
      
    
        <Route element={<Dashboard />} path="/admin/dashboard" />
        <Route element={<Webiform />} path="/admin/form" />
        <Route element={<Webitable />} path="/admin/list" />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App;
