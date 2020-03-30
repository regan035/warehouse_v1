import React from 'react';

const InventoryTableRow = (props)=>{
    const {itemName,modelNumber,location,price,quantiy,_id} = props.inventory;
    return (
      <tr>
        <th scope="row">{_id}</th>
        <td>{itemName}</td>
        <td>{modelNumber}</td>
        <td>{location}</td>
        <td>{price}</td>
        <td>{quantiy}</td>

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