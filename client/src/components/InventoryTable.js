import React from 'react';
import InventoryTableRow from './InventoryTableRow';

const InventoryTable = (props)=>{
    return (
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Item Name</th>
            <th scope="col">Model Number</th>
            <th scope="col">Serial Number</th>
            <th scope="col">Storage Location</th>
            <th scope="col">Unit Price</th>
            <th scope="col">On Hand Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.inventories.map(inventory => {
            return (
              <InventoryTableRow
                key={inventory._id}
                inventory={inventory}
                deleteHandler={props.deleteHandler}
                showEditForm={props.showEditForm}
              />
            );
          })}
        </tbody>
      </table>
    );
}

export default InventoryTable;