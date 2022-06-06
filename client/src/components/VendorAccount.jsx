import React, { useState } from 'react'
import Footer from './Footer'
import AccountCreated from './AccountCreated'
import {Link} from 'react-router-dom'
import {createAccount} from '../api'
function VendorAccount() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vendorcreated, setVendorCreated] = useState(false)
    const [failedAccount, setFailedAccount] = useState(false)
    const [vendorId, setVendorId] = useState('')

    const submit = async (e) => {
        e.preventDefault();
        const newVendor = { firstName, lastName, email, password }
        await createAccount(newVendor).then(response => {
            if (response.data.email === '') {
                setFailedAccount(true)
            } else {
                setVendorCreated(true)
                setVendorId(response.data._id)
            }  
        }).catch(err => console.log(err))
    }
   
    return (
        <>
            {vendorcreated ? <AccountCreated firstName={firstName} lastName={lastName} vendorId={vendorId} /> : failedAccount ? <div>
                <div className='ui card'>
                    <p className='thankYouMessage'>Your account has not been created at this time. Please try again.</p>
                    <Link to='/createVendorAccount'>Please try again.</Link>
                </div>
            </div> : <div>
                    <div id='content'>
                        <div className='headlightPhoto'>
                            <img id='headlights' alt="headlights" src={require('../media/headlights.jpeg')} />
                        </div>
                        <div className='row justify-content-center'>
                            <div className='column'>
                                <div className='text-center'>
                                    <h4 className='p-2 vendorText'>Thank you for your interest in creating an account. Please enter your information below.</h4>
                                    <form onSubmit={submit} className='ml-2'>
                                        <div className='col-md-3 ui left input'>
                                            <input className='m-3'
                                                type='text'
                                                placeholder='enter first name'
                                                value={firstName}
                                                onChange={e => setFirstName(e.target.value)} required />
                                        </div>
                                        <div className='col-md-3 ui left input'>
                                            <input className='m-3'
                                                type='text'
                                                placeholder='enter last name'
                                                value={lastName}
                                                onChange={e => setLastName(e.target.value)} required />
                                        </div>
                                        <div className='col-md-3 ui left input'>
                                            <input className='m-3'
                                                type='text'
                                                placeholder='enter email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)} required />
                                        </div>
                                        <div className='col-md-3 ui left input'>
                                            <input className='m-3'
                                                type='password'
                                                placeholder='enter password'
                                                value={password}
                                                onChange={e => setPassword(e.target.value)} required />
                                        </div>
                                        <div className='mb-5'>
                                            <input className='ui grey button mb-5'
                                                type='Submit'
                                                value='submit'
                                                onChange={submit}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fixed-bottom'>
                        <Footer />
                    </div>
                </div>
            }
        </>
    )
}
export default VendorAccount