export default {
    getEmployees : ()=>{
        return fetch('/inventory')
                .then(res => res.json())
                .then(data => data);
    },
    deleteEmployee : (_id)=>{
        return fetch(`/inventory/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    updateEmployee : (inventory)=>{
        return fetch(`/inventory/${inventory._id}`,
                    {method : "put",
                     body: JSON.stringify(inventory),
                     headers : {
                         "Content-Type" : "application/json"
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createEmployee : (inventory)=>{
        return fetch(`/inventory`,
            {method : 'post',
            body: JSON.stringify(inventory),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}