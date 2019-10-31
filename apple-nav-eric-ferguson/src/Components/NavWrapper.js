import React from 'react';

import { Link } from 'react-router-dom'
import Nav from './Nav';

function NavWrapper() {
    return (
      <div className="X">
        <Link to="/">from NavWrapper: </Link>
        <Nav />
      </div>
    );
  }
  
  export default NavWrapper;