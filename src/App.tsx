import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { MyCart } from './pages/MyCart';
import { Category } from './pages/Category';

function App() {
  return (
    <BrowserRouter>
      <div className='overflow-hidden'>
        <Header />
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/mycart' element={<MyCart />} />
            <Route path='/category/:category' element={<Category />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
