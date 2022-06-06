import React from 'react';

const MapInventory = props => {
//functional component that passes the props of each vehicle in the database and maps a card so we may display this information on the ViewInventory component
  return (
    <div className='inventoryCard'>
      <div className='ui card m-2'>
        <div className='div ui segments'>
          <div className='mt-4'>
            <img className='vehicleImages' alt="car" src={require(`../media/vehicleInventory/${props.vehicle.image}`)} />
          </div>
          <div className='ui segments mt-4'><p>Make: {props.vehicle.make}</p>
          </div>
          <div className='ui segments'><p >Model: {props.vehicle.model}</p></div>
          <div className='ui segments'><p>Year: {props.vehicle.year}</p></div>
          <div className='ui segments'><p>Mileage: {props.vehicle.mileage}</p> </div>
          <div className='ui segments'><p>Price: {props.vehicle.price} </p></div>
          <div className='buyButton'>
            <button className='ui inverted green button'><a className='purchaseLink' href={'/purchase_vehicle_form/' + props.vehicle._id}>Purchase this vehicle!</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MapInventory