import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div  className=' Header fw-bold fs-5 mb-5  d-flex justify-content-between  w-75 mx-auto bg-light p-1 '>
           <CustomLink  to="/" >Home</CustomLink>
           <CustomLink to="/reviews" >Reviews</CustomLink>
           <CustomLink  to="/dashboard" >DashBoard</CustomLink >
           <CustomLink  to="/blogs" >Blogs</CustomLink>
           <CustomLink to="/About" >About</CustomLink>
        </div>
    );
};

export default Header;