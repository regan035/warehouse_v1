import React from 'react';
import InventoryAPI from '../InventoryAPI';
import Cookies from "js-cookie";




class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
     

    }

    componentDidMount(){
        InventoryAPI.getInventories().then(data=>{
            console.log(data);
            console.log("componentDidMount")
            console.log(Cookies.get("email"));
            this.setState({inventories : data.response})});
    }

      handleSignout(){
      document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      window.location.replace("/");
    }

    render(){
        return (
          <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            Your total inventoryies value is :${this.props.total}
            {Cookies.get("email")}
            <button
              type="log out"
              className="btn btn-danger"
              onClick={this.handleSignout}
            >
              Logout
            </button>
          </nav>
        );
    }
}

export default NavBar;