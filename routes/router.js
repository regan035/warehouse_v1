const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../model/inventory.js');

//CRUD

//read
inventoryRouter.get('/',(req,res)=>{
    Inventory.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to get inventories",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});

//create
inventoryRouter.post('/',(req,res)=>{
    const inventory = new Inventory(req.body);
    inventory.save((err,document)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to add inventory",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully Added Inventory",
                msgError : false
            }});
    });
});

// delete
inventoryRouter.delete('/:id',(req,res)=>{
    Inventory.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Delete Inventory",
                msgError : true
            }});  
        else
            res.status(200).json({message:{
                msgBody: "Successfully Deleted Inventory",
                msgError : false
            }});     
    });
});

//update 
inventoryRouter.put('/:id',(req,res)=>{
    Inventory.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Update Inventory",
                msgError : true
            }});
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated Inventory",
            msgError : false
        }});   
    });
});

module.exports = inventoryRouter;