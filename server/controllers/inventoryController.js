const Vendor = require('../models/VendorSchema')
const Inventory = require('../models/InventorySchema')
module.exports = {
    findInventoryForm(req, res) {
        let id = req.params.id
        Vendor.findById({ _id: id }).then((results) => res.json(results))
            .catch(err => console.log(err))
    },
    addInventory(req, res) {
        let newInventory = new Inventory()
        newInventory.image = req.body.image
        newInventory.make = req.body.make
        newInventory.model = req.body.model
        newInventory.year = req.body.year
        newInventory.mileage = req.body.mileage
        newInventory.price = req.body.price
        newInventory.save()
            .then(() => res.json("vehicle added"))
            .catch(err => console.log(err))
    },
    readInventory(req, res) {
        Inventory.find()
            .then((results) => res.json(results))
            .catch(err => console.log(err))
    },
    findVehicleByMake(req, res) {
        Inventory.findById({ _id: req.params._id })
            .then((results) => {
                res.json(results)
            })
            .catch(err => console.log(err))
    }
}