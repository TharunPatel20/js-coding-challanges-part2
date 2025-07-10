// ShipmentForm.js
import React, { useState } from "react";
import { addShipment, getAllShipments } from "./ShipmentService";
import './App.css';
function ShipmentForm() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    origin: "",
    destination: "",
    status: "",
    expectedDelivery: "",
  });
 
  const handleChange = (e) => {
 
    setFormData({...formData,[e.target.name]:e.target.value})
    // set form data on chainge
  };
  const generateTrackingId = (shipments) => {
    // generate proper tracking ID
  };
  const [errors, setErrors] = useState({
    sender: "",
    receiver: "",
    origin: "",
    destination: "",
    status: "",
    expectedDelivery: "",
  });
  const validateForm = () => {
    //let isValid = true;
    const newErrors = {};
    const {sender,recevier,origin,destination,status,expectedDelivery} = formData
 
    if(!sender || sender === " "){
      newErrors.sender = 'Sender is required'
    }
    if(!recevier || recevier === " "){
      newErrors.receiver = 'Receiver is required'
    }
    if(!origin){
      newErrors.origin = 'Origin is required'
    }
    if(!destination){
      newErrors.destination = 'Destination is required'
    }
    if(!status){
      newErrors.status= 'Status is required'
    }
    if(!expectedDelivery){
      newErrors.expectedDelivery = 'Expected Delivery is required'
    }
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
 
    // Validation rules and display appropriate erros
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm()
//   validate form before posting data
// handle submit and post shipment data by calling shipmentServer function
  };
 
  return (
    <div className="shipment-form-container">
      <h2>Register New Shipment</h2>
     {/* crete shipment form */}
     <form onSubmit={handleSubmit}>
      <label htmlFor="sender">Sender:</label><input type="text" name="sender" id="sender" onChange={handleChange} />
      {errors && <div>{errors.sender}</div>}
      <label htmlFor="recevier">Receiver:</label><input type="text" name="recevier" id="recevier" onChange={handleChange} />
      {errors && <div>{errors.receiver}</div>}
      <label htmlFor="origin">Origin:</label><input type="text" name="origin" id="origin" onChange={handleChange} />
      {errors && <div>{errors.origin}</div>}
      <label htmlFor="destination">Destination:</label><input type="text" name="destination" id="destination" onChange={handleChange} />
      {errors && <div>{errors.destination}</div>}
      <label htmlFor="status">Status:</label><input type="text" name="status" id="status" onChange={handleChange} />
      {errors && <div>{errors.status}</div>}
      <label htmlFor="expectedDelivery">Expected Delivery:</label><input type="text" name="expectedDelivery" id="expectedDelivery" onChange={handleChange} />
      {errors && <div>{errors.expectedDelivery}</div>}
      <button type="submit">Register Shipment</button>
     </form>
    </div>
  );
}
 
export default ShipmentForm;
 
 