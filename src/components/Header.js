import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <NavLink to="/">home </NavLink>
      <NavLink to="/admin"> admin</NavLink>
    </header>
  );
}
