import axios from "axios"
const url = `http://localhost:3001/cardoba`

export const findInventoryForm = (id) => axios.get(url + '/add_inventory/' + id)
export const addInventory = (newInventory) => axios.post(url + '/create_inventory', newInventory)
export const createAccount = (newVendor) => axios.post(url + '/createVendorAccount', newVendor)
export const findVehicleByMake = (id) => axios.get(url + '/purchase_vehicle_form/' + id )
export const findPurchaser = (name) => axios.get(url + '/add_purchase_info/' + name)
export const addPurchaseInfo = (purchaseInfo) => axios.post('/add_purchase_info', purchaseInfo)
export const deletePurchase = (id) => axios.delete(url + '/delete_purchase/' + id)

const apis = {
    addInventory,
    findInventoryForm,
    createAccount,
    findVehicleByMake,
    addPurchaseInfo,
    findPurchaser,
    deletePurchase
}

export default apis
