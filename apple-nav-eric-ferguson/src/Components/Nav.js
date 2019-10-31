import React from 'react';

import { Link } from 'react-router-dom'

import SubNav from './SubNav';

function Nav() {
    return (
      <div className="NavWrapperApp">
        <Link to="/Nav">from Nav: </Link>
        <Link to ="/Mac">Mac</Link>
        <Link to ="/iPad">iPad</Link>
        <Link to ="/iPhone">iPhone</Link>
        <Link to ="/Watch">Watch</Link>
        <Link to ="/TV">TV</Link>
        <Link to ="/Music">Music</Link>
        <SubNav />
      </div>
    );
  }
  
  export default Nav;