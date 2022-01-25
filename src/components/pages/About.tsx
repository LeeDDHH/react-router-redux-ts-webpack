import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  let navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/?class=C#home-hash', { state: { test:'string'}});
  }

  return (
    <>
      <div>About</div>
      <div onClick={navigateToHome}>ToHome</div>
    </>
  );
}

export default About;
