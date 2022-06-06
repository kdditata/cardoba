import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import VendorAccount from './components/VendorAccount';
import HomePage from './components/HomePage';
import VendorLogin from './components/VendorLogin';
import AddInventory from './components/AddInventory';
import PurchaseForm from './components/PurchaseForm';
import ViewInventory from './components/ViewInventory';
import ErrorPage from './components/ErrorPage';
import '../src/styles/style.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/createVendorAccount' component={VendorAccount} />
                    <Route path='/vendor_login' component={VendorLogin} />
                    <Route path='/view_inventory' component={ViewInventory} />
                    <Route path='/add_inventory/:id' component={AddInventory} />
                    <Route path='/purchase_vehicle_form/:id' component={PurchaseForm} />
                    <Route component={ErrorPage} />
                </Switch> 
            </div>
        </Router>
    );
}

export default App;
