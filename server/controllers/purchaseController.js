const PurchaseInfo = require('../models/PurchaseInfo')
module.exports = {
  addPurchaseInfo(req, res) {
    let purchaseInfo = new PurchaseInfo()
    purchaseInfo.firstname = req.body.firstname
    purchaseInfo.lastname = req.body.lastname
    purchaseInfo.streetAddress = req.body.streetAddress
    purchaseInfo.city = req.body.city
    purchaseInfo.zipcode = req.body.zipcode
    purchaseInfo.nameOnCard = req.body.nameOnCard
    purchaseInfo.cardNumber = req.body.cardNumber
    purchaseInfo.expDate = req.body.expDate
    purchaseInfo.cvv = req.body.cvv
    purchaseInfo.billingZip = req.body.billingZip
    purchaseInfo.save()
      .then(() => res.json("Purchase Info Created"))
      .catch(err => console.log(err))
  },
  findPurchaser(req, res) {
    let firstname = req.params.name
    PurchaseInfo.findOne({ firstname: firstname }).then((results) => {
      res.json(results)
    }).catch(err => console.log(err))
      
  },
  deletePurchase(req, res) {
    PurchaseInfo.findByIdAndDelete(req.params.id).then(() => {
      res.json("Deleted Purchase")
    }).catch(err => console.log(err))
      
  }
}