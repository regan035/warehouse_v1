export default {
    getInventories : ()=>{
        return fetch('inventory')
                .then(res => res.json())
                .then(data => data);
    },
    deleteInventory : (_id)=>{
        return fetch(`inventory/${_id}`, {
          method: "delete"
        })
          .then(res => res.json())
          .then(data => data);
    },
    updateInventory : (inventory)=>{
        return fetch(`inventory/${inventory._id}`, {
          method: "put",
          body: JSON.stringify(inventory),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => data);
    },
    createInventory : (inventory)=>{
        return fetch(`inventory`,
            {method : 'post',
            body: JSON.stringify(inventory),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}