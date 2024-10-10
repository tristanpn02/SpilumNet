import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import routesConfig from './routesConfig';

function App() {
  return (
    <Router>
      <Header routes={routesConfig} />
      <div className="Main">
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;