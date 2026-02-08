import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../AsiosConfig";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        {
          //
          email,
          password,
          username,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL;
        }, 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      console.log("Sign up Failed");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container text-center p-5">
      <h2>SignUp Account</h2>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="email">Username : </label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <br></br>
        <button
          style={{ width: "10%", margin: "0 auto", backgroundColor: "#387ed1" }}
          className="fs-5 p-2 btn btn-primary"
        >
          Submit
        </button>
        <br></br>
        <br></br>
        <span>
          Already have an account? -- [ <Link to={"/login"}>Login</Link> ]
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
