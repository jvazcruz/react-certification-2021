import React from 'react';
import { Nav, IconLogo, SearchBar } from './Navbar.elements';
import { FaRegUserCircle } from 'react-icons/fa';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './Navbar.styles.css';

function Navbar() {
  return (
    <>
      <Nav>
        <IconLogo />
        <SearchBar />
        <FormControlLabel className="sw-dark-mode" control={<Switch />} label="Dark Mode" />
        <FaRegUserCircle color="white" size="1.5rem" />
      </Nav>
    </>
  );
}

export default Navbar;
