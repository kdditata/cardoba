import React, { useState, useEffect, useCallback } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { findVehicleByMake, addPurchaseInfo, deletePurchase, findPurchaser } from '../api'


function PurchaseForm(props) {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [nameOnCard, setNameOnCard] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expDate, setExpDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [billingZip, setBillingZip] = useState('')
    const [orderSubmitted, setOrderSubmitted] = useState(false)
    const [purchaseResults, setPurchaseResults] = useState([])
    const [orderDeleted, setOrderDeleted] = useState(false)
    const [results, setResults] = useState([])

    const getResults = useCallback(() => {
        let id = props.match.params.id
        findVehicleByMake(id).then((response) => {
            setResults(response.data)
        }).catch(err => { console.log(err) })
    }, [props.match.params.id])
    useEffect(() => {
        let abortController = new AbortController()
        getResults()
        return () => {
            abortController.abort()
        }
    }, [getResults])

    const getPurchaseResults = async () => {
        await findPurchaser(firstname).then((response) => {
            setPurchaseResults(response.data)
        }).catch(err => console.log(err))
    }
    const showPurchaseInfo = () => {
        const deleteOrder = async (id) => {
       
            await deletePurchase(id).then(() => {
                setOrderDeleted(true)
            }).catch(err => console.log(err))
        }
        return <div id='arrangeFooter'><div className='text-center'>  <img alt="red car" src={require('../media/redCar.jpeg')} className="m-5" /><h4>Thank you {purchaseResults.firstname} for shopping with Cardoba. Your {results.make} {results.model} will be delivered to {purchaseResults.streetAddress} {purchaseResults.city} within 5 business days.</h4>
            <h6>Having second thoughts? Click the button below to cancel your purchase.</h6>
            <button className='ui inverted red button' onClick={(e) => {
                e.preventDefault()
                deleteOrder(purchaseResults._id)
            }}>Cancel this purchase!</button> </div>
            </div>
    }
    const submit = (e) => {
        e.preventDefault()
        const purchaseInfo = { firstname, lastname, streetAddress, city, zipcode, nameOnCard, cardNumber, expDate, cvv, billingZip }
   addPurchaseInfo(purchaseInfo).then((response) => {
        getPurchaseResults(response.data)
        setOrderSubmitted(true)
    })
  
  

    }

    return (
        <>
            {orderDeleted ? <div className='text-center'>
                <img alt="scenic road" src={require('../media/scenicRoad.jpeg')} className="m-5" />
                <h5>Your order was cancelled.</h5>
                <Link id='viewInventoryLink' to='/view_inventory'>View Inventory <i className='fa fa-car pt-2' /></Link>
                <Link id='goHomeLink' to='/'>Go Home <i className='fa fa-home' /></Link>
            </div>
                :
                orderSubmitted ? <div>{showPurchaseInfo()} </div> :
                    <form onSubmit={submit} >
                        <div className='w-100 p-3 purchaseHeading'>
                            <h5 className='text-center'>Thank you for your interest in purchasing a vehicle. Please provide your shipping/purchase information now.</h5></div>
                        <div className='ui left input d-block container-fluid'>
                            <h5 className='ml-2'>Shipping Info</h5>
                            <input className='d-block m-3'
                                type='text'
                                placeholder='enter your first name'
                                value={firstname}
                                onChange=
                                {e => setFirstName(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='enter your last name'
                                value={lastname}
                                onChange=
                                {e => setLastName(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='street address'
                                value={streetAddress}
                                onChange=
                                {e => setStreetAddress(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='city'
                                value={city}
                                onChange=
                                {e => setCity(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='zipcode'
                                value={zipcode}
                                onChange=
                                {e => setZipcode(e.target.value)} required />
                        </div>
                        <div className='ui divider'></div>
                        <div className='ui left input d-block mb-5 container-fluid'>
                            <h5 className='ml-2'>Billing Info</h5>
                            <input className='d-block m-3'
                                type='text'
                                placeholder='Name on card'
                                value={nameOnCard}
                                onChange=
                                {e => setNameOnCard(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='card number'
                                value={cardNumber}
                                onChange=
                                {e => setCardNumber(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='expiration date'
                                value={expDate}
                                onChange=
                                {e => setExpDate(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='cvv'
                                value={cvv}
                                onChange=
                                {e => setCvv(e.target.value)} required />
                            <input className='d-block m-3'
                                type='text'
                                placeholder='billing zipcode'
                                value={billingZip}
                                onChange=
                                {e => setBillingZip(e.target.value)} required />
                            <input className='ui teal button mt-4 ml-3'
                                type='Submit'
                                value='Submit'
                                onChange={submit} required />
                        </div>
                    </form>

            }
            <div>
                <Footer></Footer>
            </div>
        </>

    )
}
export default PurchaseForm