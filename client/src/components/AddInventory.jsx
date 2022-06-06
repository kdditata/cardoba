import React, { useState, useEffect, useCallback } from 'react'
import { addInventory, findInventoryForm } from '../api';
import Footer from './Footer'

function AddInventory(props) {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [mileage, setMileage] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [results, setResults] = useState([])
 
    const getResults = useCallback(() => {
      let id = props.match.params.id
        findInventoryForm(id).then((response) => {
            setResults(response.data)
        }).catch(err => {
            console.log(err)
        })
}, [props.match.params.id])
 
    useEffect(() => {
        let abortController = new AbortController()
        getResults()
        return () => {
            abortController.abort()
        }
    }, [getResults])

    const submit = async (e) => {
        e.preventDefault()
        const newInventory = { make, model, year, mileage, price, image }
        await addInventory(newInventory).then(response => {
            console.log(response)
             window.location ='/add_inventory/' + results._id
        }).catch(err => console.log(err))
    }
   
    return (
        <>
            <div>
                <div className='text-center' >
                    <div>
                        <div className='m-3 row justify-content-center' >
                            <img id='inventoryImage' alt="carImg" src={require('../media/inventory.jpg')} className="ui large image" />
                        </div>
                        <h4 className='mt-2 text-center'>Please upload your vehicle inventory here.</h4>
                    </div>
                    <form onSubmit={submit} >
                        <select className='mt-2' value={image}
                            onChange={e => setImage(e.target.value)} >
                            <option value="">Add Photo </option>
                            <option value="carOne.jpeg">Blue BMW</option>
                            <option value="carTwo.jpeg">White Range Rover</option>
                            <option value="carThree.jpeg">Grey Mercedes</option>
                            <option value="carFour.jpeg">Silver Mercedes</option>
                            <option value="carFive.jpeg">Black BMW</option>
                            <option value="carSix.jpeg">Blue Mercedes</option>
                            <option value="carSeven.jpeg">Blue Audi</option>
                            <option value="carEight.jpeg">Black Audi</option>
                        </select>
                        <div className='ui input d-block m-3'>
                            <input
                                type='text'
                                placeholder='enter make of vehicle'
                                value={make}
                                onChange={e => setMake(e.target.value)} required />
                        </div>
                        <div className='ui input d-block m-3'>
                            <input
                                type='text'
                                placeholder='enter model of vehicle'
                                value={model}
                                onChange={e => setModel(e.target.value)} required />
                        </div>
                        <div className='ui input d-block m-3'>
                            <input
                                type='text'
                                placeholder='enter year of vehicle'
                                value={year}
                                onChange={e => setYear(e.target.value)} required />
                        </div>
                        <div className='ui input d-block m-3'>
                            <input
                                type='text'
                                placeholder='enter mileage'
                                value={mileage}
                                onChange={e => setMileage(e.target.value)} required />
                        </div>
                        <div className='ui input d-block m-3'>
                            <input
                                type='text'
                                placeholder='enter price of vehicle'
                                value={price}
                                onChange={e => setPrice(e.target.value)} required />
                        </div>
                        <input className='m-3 ui olive button'
                            type='submit'
                            value='Submit'
                        />
                    </form>
                </div>
                <div className='fixed-bottom'>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default AddInventory