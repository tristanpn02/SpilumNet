import React, { useEffect } from 'react';
import Announce from '../components/Announce/Announce';
  
const Home = () => {
    useEffect(() => {document.title = "Home"})
  return (
    <div>
        <Announce/>
        <h1>Welcome to Spilum.Net</h1>
    </div>
  );
};
  
export default Home;