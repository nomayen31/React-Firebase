import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let styles = {
        marginRight: '20px',  
      };

    return (
        <div>
            <Link style={styles} to='/'>Home</Link>
            <Link  to='/login'>Login</Link>
        </div>
    );
};

export default Header;