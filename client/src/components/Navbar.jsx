import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div className='navbar'>
                <span className='title'>Cardoba</span>
                <Link to="/" ><i className='homeLogo fa fa-home' /></Link>
            </div>
        </>
    )
}
export default Navbar
