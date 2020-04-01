import { useState } from "react";
import { signin } from '../../actions/auth';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = e => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });
  };

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const signupForm = () => {
    return (


        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Type your email"
          />
        </div>

        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>

        <div>
          <button className="btn btn-primary">Signin</button>
        </div>
      </form>
    );
  };

  return <React.Fragment>{signinForm()}</React.Fragment>;
};

export default SignupComponent;
