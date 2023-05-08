import './App.css';
import CarouselPage from './components/CarouselPage';
import DotsPage from './components/DotsPage';
import CompanyPage from './components/CompanyPage';
import AdminForm from './components/Admin';


import { IMG_URL } from './imgData';

import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';


function App() {

  return (
      <div className="App">
        <svg className='nav-icon' width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9935 0H0V1.99938H20.9935V0Z" fill="black"/>
          <path d="M20.9935 6.87387H0V8.87325H20.9935V6.87387Z" fill="black"/>
          <path d="M20.9935 13.7057H0V15.7051H20.9935V13.7057Z" fill="black"/>
        </svg>

        <Routes>
          <Route path='/' element={<DotsPage />} />
          <Route path='/admin' element={<AdminForm />} />
          <Route path='/:company' element={<CompanyPage />} />
          <Route path='/:company/learn-more' element={<CarouselPage />} />
        </Routes>
    </div>
  );
}

export default App;
