import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer'
export default class VendorLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            results: [],
            id: '',
            message: '',
            loginError: false
        }
        this.onChangeemail = this.onChangeemail.bind(this)
        this.onChangepassword = this.onChangepassword.bind(this)
        this.submit = this.submit.bind(this)
        this.handleGet = this.handleGet.bind(this)
    }
    //the following onChange functions are capturing inputs
    onChangeemail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangepassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    //calling the handleGet function upon submission
    submit(e) {
        e.preventDefault()
        this.handleGet(this.state.results)
    }
    handleGet() {
        let email = this.state.email
        let errorMessage = 'You have entered incorrect login information. Please click the link below to create an account.'
        //making an axios get call to the dynamin route below with the email
        axios.get(`http://localhost:3001/cardoba/vendor_login/${email}`)
            .then(res => {
                //setting the state of results to the response
                this.setState({ results: res.data })
                //setting a condition if the email does not exist in the database
                if (this.state.results === null) {
                    //if the email is not found in the accounts collection setting the state so we may deliver error messages
                    this.setState({
                        message: errorMessage,
                        loginError: true
                    })
                }
                //setting a condition if the user enters the incorrect password
                if (this.state.password === this.state.results.password) {
                    //setting the state of id to the resulting object id 
                    this.setState({ id: this.state.results._id })
                    //setting a window location which passes said id along the following route
                    window.location = `/add_inventory/${this.state.id}`
                    //setting a condition if the password does not match the email and setting the state in order to provide an error message
                } else if (email !== this.state.results.password) {
                    this.setState({
                        message: errorMessage,
                        loginError: true
                    })
                } else {
                    this.setState({
                        message: errorMessage,
                        loginError: true
                    })
                }
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div className='ui container'>
                <div className="vendorLogin mt-5">
                    <div className='row justify-content-center'>
                        <img alt="hwy img" src={require('../media/hwyBlurNew.jpeg')} className="hwy mb-2" />
                    </div>
                    <div className='mt-5'>
                        <div className='ui dividing header mt-3'>
                            <h4 className='text-center mb-4'>Welcome back! Please enter your login information below to add your vehicle inventory.</h4>
                        </div>
                        <form onSubmit={this.submit}>
                            <div className='text-center'>
                                <div className='ui input mx-1'>
                                    <input className=''
                                        type='text'
                                        placeholder='enter email'
                                        value={this.state.value}
                                        onChange={this.onChangeemail} required />
                                </div>
                                <div className='ui input mx-1 my-2'>
                                    <input className=''
                                        type='password'
                                        placeholder='enter password'
                                        value={this.state.value}
                                        onChange={this.onChangepassword} required />
                                </div>
                                <input className='m-5 green ui button'
                                    type='Submit' />
                            </div>
                        </form>
                        {this.state.loginError ? <div className='row justify-content-center text-center'><div className='w-50'>
                            <div className='ui error message'>
                                <h6>{this.state.message}</h6>
                            </div>
                            <div className='ui message'>
                                <Link style={{ 'textDecoration': 'none' }} to='/createVendorAccount'>Sign Up</Link>
                            </div>
                        </div>
                        </div> : <></>}
                    </div>
                    <div className='fixed-bottom'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    };
};