import React from 'react';

const InventoryTableRow = (props)=>{
    const {itemName,modelNumber,serialNumber,location,price,quantity,_id} = props.inventory;
    return (
      <tr>
        <th scope="row">{_id}</th>
        <td>{itemName}</td>
        <td>{modelNumber}</td>
        <td>{serialNumber}</td>
        <td>{location}</td>
        <td>{price}</td>
        <td>{quantity}</td>

        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={props.showEditForm.bind(this, props.inventory)}
              className="btn btn-secondary"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={props.deleteHandler.bind(this, _id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
}

export default InventoryTableRow;