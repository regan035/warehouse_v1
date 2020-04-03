import React, {useState} from 'react';
import axios from "axios";

function Signin(){
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    //let [formData, setFormData] = useState({username: "", password: ""});

    const regularLogin = (event) => {
        event.preventDefault()
        console.log("logging in as " + email)
        document.cookie = "loggedIn=true&email="+email;
      
        axios.post("auth/signin", {email, password})
        .then(res=>{
            console.log(res)
            setEmail("");
            setPassword("");
            window.location.replace("/warehouse");
        })
        .catch(err=>{
            alert("Please verify your login credential and try again.");
            console.log(err)
        })
    }

    return (
      <section>
        <nav className="navbar ">
          <div className="container-fluid">
            <div className="navbar-header"></div>
          </div>
        </nav>

        <div className="container modal-dialog text-center">
          <div className="row">
            <div className="card-body">
              <div className="col-md-12 modal-content">
                <div className="col-12 user-img">
                  <img src={require("./asset/face1.png")} />
                </div>

                <h2>Warehouse Management Application</h2>
                <h3>Sign In Form</h3>
                <form className="login">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email-input"
                      placeholder="Email"
                      onChange={event => setEmail(event.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password-input"
                      placeholder="Password"
                      onChange={event => setPassword(event.target.value)}
                      value={password}
                    />
                  </div>
                  <div
                    style={{ display: "none" }}
                    id="alert"
                    className="alert alert-danger"
                    role="alert"
                  >
                    <span
                      className="glyphicon glyphicon-exclamation-sign"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Error:</span>{" "}
                    <span className="msg"></span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-default"
                    onClick={regularLogin}
                  >
                    Sign In
                  </button>
                </form>
                <br />
                <p>
                  First time user? Please <a href="/signup">sign up.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Signin;