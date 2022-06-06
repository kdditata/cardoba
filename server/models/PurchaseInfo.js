const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PurchaseSchema = new Schema({
    firstname: String,
    lastname: String,
    streetAddress: String,
    city: String,
    zipcode:String,
    nameOnCard: String,
    cardNumber: String,
    expDate: String,
    cvv: String,
    billingZip: String,
    
})

const PurchaseInfo = mongoose.model('purchase', PurchaseSchema)

module.exports = PurchaseInfo                          