export default {
    getInventories : ()=>{
        return fetch('http://localhost:3001/inventory')
                .then(res => res.json())
                .then(data => data);
    },
    deleteInventory : (_id)=>{
        return fetch(`http://localhost:3001/inventory/${_id}`, {
          method: "delete"
        })
          .then(res => res.json())
          .then(data => data);
    },
    updateInventory : (inventory)=>{
        return fetch(`http://localhost:3001/inventory/${inventory._id}`, {
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
        return fetch(`http://localhost:3001/inventory`,
            {method : 'post',
            body: JSON.stringify(inventory),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}