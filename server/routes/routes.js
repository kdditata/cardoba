const router = require('express').Router()
const Controller = require('../controllers/accountController')
const PurchaseController = require('../controllers/purchaseController')
const InventoryController = require('../controllers/inventoryController')

router.route('/view_inventory').get(InventoryController.readInventory)
router.route('/add_inventory/:id').get(InventoryController.findInventoryForm)
router.route('/vendor_login/:email').get(Controller.findVendor)
router.route('/add_purchase_info/:name').get(PurchaseController.findPurchaser)
router.route('/purchase_vehicle_form/:id').get(InventoryController.findVehicleByMake)

router.route('/createVendorAccount').post(Controller.createAccount)
router.route('/create_inventory').post(InventoryController.addInventory)
router.route('/add_purchase_info').post(PurchaseController.addPurchaseInfo)

router.route('/delete_purchase/:id').delete(PurchaseController.deletePurchase)

module.exports = router

