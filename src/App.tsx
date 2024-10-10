import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Pages/Home'

function App() {

  return (
    <Router>
      <Header />
      <div className="Main">
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
