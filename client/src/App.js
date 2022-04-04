import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages';
import ApiTest from './pages/apitest';
import Tools from './pages/tools';
import Odie from './pages/odie';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <div className='Main'>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path='/home' exact element={<Home/>}/>
            <Route path='/tools' element={<Tools/>}/>
            <Route path='/apitest' element={<ApiTest/>}/>
            <Route path='/cutie' element={<Odie/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    );
  }
}
