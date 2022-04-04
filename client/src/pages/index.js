import React from 'react';
import Announce from '../components/Announce';
  
const Home = () => {
  return (
    <div>
        <Announce>THE WEBSITE IS USEABLE</Announce>
        <h1>Welcome to Spilum.Net</h1>
        <h2>What is this website?</h2>
        <p>
          Well this website doesn't really serve a specific purpose
          other than being a sort of personal playground of mine.<br/>
          I suppose there are some source of use that can be found here
          and by all means, feel free to use it.<br/><br/>
          
          <b>I would appreciate it that credit is given where it's due.</b>
        </p>
    </div>
  );
};
  
export default Home;