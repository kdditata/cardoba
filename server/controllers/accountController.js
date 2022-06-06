const Vendor = require('../models/VendorSchema')

module.exports = {
  createAccount(req, res) {
    let vendorAccount = new Vendor()
    vendorAccount.firstName = req.body.firstName
    vendorAccount.lastName = req.body.lastName
    vendorAccount.email = req.body.email
    vendorAccount.password = req.body.password
    vendorAccount.save()
      .then(() => res.json("Vendor Created"))
      .catch(err => console.log(err))
  },
  findVendor(req, res) {
    Vendor.findOne({ email: req.params.email }).then((results) => res.json(results)).catch(err => console.log(err))
  }
}