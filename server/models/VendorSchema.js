const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VendorSchema = new Schema ({
   
    firstName: String,
    lastName: String ,
    email: String,
    password: String
})

const VendorAccount = mongoose.model('account', VendorSchema)

module.exports = VendorAccount