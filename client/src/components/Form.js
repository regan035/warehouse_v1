import React from 'react';
import Input from './Input';

const Form = (props)=>{
    return (
      <form onSubmit={props.handler}>
        <h4>{props.isEditForm ? "Editing Inventoy: " : "Add Inventory: "}</h4>
        <div className="form-group">
          <Input
            name="itemName"
            placeholder="Enter Item Name"
            labelName="Item Name: "
            handleChange={props.handleChange}
            value={props.inventory.itemName}
          />
          <Input
            name="modelNumber"
            placeholder="Enter Model Number"
            labelName="Model Number: "
            handleChange={props.handleChange}
            value={props.inventory.modelNumber}
          />
          <Input
            name="serialNumber"
            placeholder="Enter Serial Number"
            labelName="Serial Number: "
            handleChange={props.handleChange}
            value={props.inventory.serialNumber}
          />
          <Input
            name="location"
            placeholder="Enter Storage Location"
            labelName="Storage Location: "
            handleChange={props.handleChange}
            value={props.inventory.location}
          />
          <Input
            name="price"
            placeholder="Enter price"
            labelName="Unit Price: "
            handleChange={props.handleChange}
            value={props.inventory.price}
          />
          <Input
            name="quantity"
            placeholder="Enter Quantity"
            labelName="On Hand Quantity: "
            handleChange={props.handleChange}
            value={props.inventory.quantity}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="log out" className="btn btn-danger" onClick={()=>window.location.replace("/")}>
          Logout
        </button>
      </form>
    );
}

export default Form;