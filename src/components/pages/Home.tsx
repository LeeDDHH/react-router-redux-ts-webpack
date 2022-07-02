'use strict';

import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const loginAccess = async () => {
      const res = await fetch('/login', { method: 'POST' });
      console.log(res);
    };
    const fetchUserData = async () => {
      const res = await fetch('/user');
      console.log(res);
    };
    loginAccess();
    fetchUserData();
  }, []);
  return <div>Home</div>;
};

export default Home;
