import React from 'react'
import {Link} from 'react-router-dom'
function AccountCreated (props) {
    return (
        <div className='vendorAccount'>
            <div className='row justify-content-center'>
                <div className='mt-5 ui card p-5'>
                    <h4 className='thankYouMessage'>Thank you {props.firstName} {props.lastName}, your account has been created.</h4>
                    <Link id='addInventoryLink' to={`/add_inventory/${props.vendorId}`}>Click here to add your vehicle inventoy now.</Link>
                </div>
            </div>
        </div>)
}
export default AccountCreated