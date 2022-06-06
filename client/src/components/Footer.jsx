import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className='sticky-bottom footer'>
                    <div className='row justify-content-center text-center w-100'>
                        <div className='col-md-3 text-center pt-2 '>
                           <i className='ml-2'>Cardoba...putting you in the driver's seat.</i>
                        </div>
                        <div className='col-md-3 text-center'>
                            <img id='media' alt="socialMedia" src={require('../media/footerImages/media.png')}
                                className="social p-1" />
                        </div>
                        <div className='col-md-3 text-center pt-2'>
                            <img alt="gplay" src={require('../media/footerImages/footer_google_play.png')} className="store" />
                            <img alt="app store" src={require('../media/footerImages/footer_app_store.png')} className="store" />
                        </div>
                        <div className='col-md-3 pt-2'>
                            <Link className='linkHover' to="/view_inventory" >
                                View Inventory <i className='carLogo fa fa-car pt-2' /></Link>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
