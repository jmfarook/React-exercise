import React from 'react';
import { Link } from 'react-router-dom';

const displayStyle = {
  display:'none'
}
// navigate  between different routes.
const Header = () => (
    <header>
      <nav>
        <ul>
          <li id='tbl-link'style={displayStyle} ><Link to='/table'>Switch to Table View</Link></li>
          <li id='card-link'><Link to='/card'>Switch to Card View </Link></li>
        </ul>
      </nav>
    </header>
  )
  
  export default Header
  