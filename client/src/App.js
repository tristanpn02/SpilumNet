import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages';
import About from './pages/about';
import Housing from './pages/housing';

export default class App extends React.Component {
  componentDidMount() {
    document.title = "Spilum.net | Home"
  }

  render() {
    return (
      <Router>
        <Header/>
        <div className='Main'>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path='/home' exact element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/housing' element={<Housing/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    );
  }
}
