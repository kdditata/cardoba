import MapInventory from './MapInventory'
import React, { Component } from "react";
import axios from 'axios';
import Footer from './Footer';
export default class ViewInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            counter: 0
        }
        this.showInventory = this.showInventory.bind(this)
    }
    //when the page loads, using an axios get route to get a response of vehicles from the database and setting the state of results to this response
    componentDidMount() {
        axios.get('http://localhost:3001/cardoba/view_inventory')
            .then(response => {
                this.setState({
                    results: response.data
                })
            }).catch(err => console.log(err))
    }
    //creating a function to map these vehicles and display them to the user
    showInventory() {
        return this.state.results.map(vehicle => {
            return <MapInventory key={vehicle._id} vehicle={vehicle} />
        })
    }
    render() {
        let counter = this.state.results.length
        return (
            <>
                <div className='mb-5'>
                    <div className='inventory mb-5'>
                        <div className='text-container'>
                            <h4 className='m-3'>Thank you for shopping with Cardoba. Browse our inventory of quality vehicles now.</h4>
                        </div>
                        <div >
                            {this.showInventory()}
                        </div>
                        <div className='mt-2'>
                            <h4>Available Vehicles: {counter}</h4>
                        </div>
                    </div>
                </div>
                <div className='fixed-bottom'>
                    <Footer />
               </div>
            </>
        );
    };
};