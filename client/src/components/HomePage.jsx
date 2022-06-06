import React from "react";
import { Link } from 'react-router-dom';
import Footer from './Footer';
function HomePage() {
    return (
        <>
        <div>
            <div className='home'>
                <p id='homeHeading' style={{ 'color': 'whitesmoke', 'fontSize': '1.20rem', 'backgroundColor': 'rgba(70, 84, 97, 0.616)', 'textAlign': 'center', 'padding': '1.7rem' }}>Cardoba minimizes the miles between consumer and seller by uniting potential purchasers and vendors. Whether you are looking to sell inventory or seeking to purchase a vehicle, Cardoba will meet your automotive needs.</p>
                <div className='ui card ui inverted segment p-3 ml-5 mt-5'>
                    <h5 className='heading'>Are you a vendor?</h5>
                    <p className='subheading mt-1'>Create an account now</p>
                    <div>
                        <button className='ui inverted blue button mb-2'>
                            <Link style={{ 'color': 'white', 'textDecoration': 'none' }} to="/createVendorAccount" >
                                Create Account</Link>
                        </button>
                    </div>
                    <p className='subheading mt-1'>Already have an account?</p>
                    <div>
                        <button className='ui inverted blue button mb-2'>
                            <Link style={{ 'color': 'white', 'textDecoration': 'none' }} to="/vendor_login" >
                                Login</Link>
                        </button>
                    </div>
                </div>
                <div className='ui card ui inverted segment p-3 ml-5 mt-5'>
                    <h5 className='heading'>Looking to purchase a vehicle?</h5>
                    <p className='subheading mt-1'>Are you shopping for an automobile?</p>
                    <div>
                        <button className=' ui inverted blue button mb-2'>
                            <Link style={{ 'color': 'white', 'textDecoration': 'none' }} to="/view_inventory" >
                            View Inventory</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </div>
        </>
    )
}
export default HomePage