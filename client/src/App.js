import React from 'react';
import InventoryTable from './components/InventoryTable';
import Form from './components/Form';
import Message from './components/Message';
import InventoryAPI from './InventoryAPI';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inventories : [],
            isEditForm : false,
            inventory : {
                itemName : "",
                modelNumber : "",
                serialNumber: "",
                location : "",
                price : "",
                quantity : ""
            },
            message : ""
        };

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    componentDidMount(){
        InventoryAPI.getInventories().then(data=>{
            console.log(data);
            console.log("componentDidMount")
            this.setState({inventories : data.response})});
    }

    resetForm(){
        this.setState({
          inventory: {
            itemName: "",
            modelNumber: "",
            serialNumber: "",
            location: "",
            price: "",
            quantity: ""
          }
        });
    }

    handleChange(e){
        this.setState({
            inventory : {
                ...this.state.inventory,
                [e.target.name] : e.target.value
            }
        });
    }

    showEditForm(inventory){
        this.setState({isEditForm : true, inventory : inventory});
    }

    async deleteHandler(id){
        const deleteData = await InventoryAPI.deleteInventory(id);
        const message = deleteData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await InventoryAPI.getInventories();
            this.setState({message,inventories : data.response})
        }
    }

    async updateHandler(e){
        e.preventDefault();
        const updateData = await InventoryAPI.updateInventory(this.state.inventory);
        const message = updateData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await InventoryAPI.getInventories();
            this.setState({message,inventories : data.response})
        }
        this.setState({isEditForm: false});
        this.resetForm();
    }

    async addHandler(e){
        e.preventDefault();
        console.log(JSON.stringify(this.state.inventory))
        const postData = await InventoryAPI.createInventory(this.state.inventory);
        const message = postData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await InventoryAPI.getInventories();
            this.setState({message,inventories : data.response});
        }
        this.resetForm();
    }

     renderInventoryTable=()=>{
        if(this.state.inventories.length > 0){
            return(
                <InventoryTable inventories={this.state.inventories}
                               deleteHandler={this.deleteHandler}
                               showEditForm={this.showEditForm}/>
            );
        }
        return null;
    }

    renderForm(){
       return(
           <Form isEditForm={this.state.isEditForm}
                 inventory={this.state.inventory}
                 handleChange={this.handleChange}
                 handler={!this.state.isEditForm ? this.addHandler : this.updateHandler}/>
       ); 
    }

    renderMessage(){
        if(this.state.message === "")
            return null;
        return(
            <Message message={this.state.message}/>
        );
    }

    render(){
        return (
          <div className="row">
            <div className="col"></div>
            <div>
            
              {this.renderInventoryTable()}
              {this.renderForm()}
              {this.renderMessage()}
            </div>
            <div className="col"></div>
          </div>
        );
    }
}

export default App;