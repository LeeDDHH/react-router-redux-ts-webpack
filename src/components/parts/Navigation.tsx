'use strict'

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const linkStyle = (isActive: boolean) => {
  return (
    {
      color: isActive ? '#fff' : '#545e6f',
      background: isActive ? '#7600dc' : '#f0f0f0',
      marginRight: '10px'
    }
  )
}

const aboutToProps = {
  pathname: '/about',
  search: '?class=B',
  hash: '#about-hash'
};

const usersToProps = {
  pathname: '/users',
  search: '?class=A',
  hash: '#user-hash'
};

const Navigation = () => {
  const location = useLocation();
  const currentLocationInfo = () => {
    console.log('location: ' + JSON.stringify(location, null, 2));
    if (!location) return;
    return (
      <>
        <p>pathname：{location.pathname}</p>
        <p>search：{location.search}</p>
        <p>hash：{location.hash}</p>
        <p>state：{JSON.stringify(location.state)}</p>
      </>
    );
  };
  return (
    <>
      <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>Home</NavLink>
      <NavLink to={aboutToProps} style={({ isActive }) => linkStyle(isActive)}>About</NavLink>
      <NavLink to={usersToProps} style={({ isActive }) => linkStyle(isActive)}
      >Users</NavLink>
      {currentLocationInfo()}
    </>
  );
};

export default Navigation;
