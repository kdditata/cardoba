import React from 'react';

const ErrorPage = () => {
    //functional component in case there is a route error on the front end
    return (
        <div className='text-center'>
            <div className='carWreckImage'>
                <img alt="car wreck" src={require('../media/policeWreck.jpeg')} className="m-5" />
            </div>
            <div>
                <h6>Sorry! Unfortunately, this page cannot be reached.</h6>
            </div>
        </div>
    )
}
export default ErrorPage