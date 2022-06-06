const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema ({
    make: String,
    model: String,
    year: String, 
    mileage: String,
    price: String,
    image: String
})

const NewInventory = mongoose.model('vehicle', InventorySchema)

module.exports = NewInventory