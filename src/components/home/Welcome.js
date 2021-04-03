import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


function Welcome() {
  // global data
  const Institute = useSelector((state) => state.Institute);
  const dispatch = useDispatch();

  // local data
  const [isRegistered, setIsRegistered] = useState(Institute.isRegistered.flag)
  const [goto, setGoto] = useState(false)

  const Information = Institute.Information()
  const Description = Institute.Description()

  const Info = () => {
    return (
      <div className="container">
        <h1
          className="m-4 text-secondary"
          style={{ fontSize: 40, fontWeight: 500 }}
        >
          {Information.fullName}
        </h1>
        <h4
          className="m-4 text-secondary"
          style={{ fontSize: 20, fontWeight: 400 }}
        >
          {Description.title}
        </h4>
        <button
          className="btn btn-info active"
          onClick={() => {
            setGoto(true)
          }}
        >
          <i className="fa fa-home mr-2"></i>
          Notify Home
        </button>
      </div>
    );
  };

  const Registration = () => {
    return (
      <div className="container">
        <p className="text-success">
          Please register your Institute/Office for FREE!
        </p>
        <button
          className="btn btn-success active"
          onClick={() => {
            setGoto(true)
          }}
        >
          <i className="fa fa-plus mr-2"></i>
          Registration Now!
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1 className="m-4 text-info" style={{ fontSize: 35, fontWeight: 700 }}>
        Welcome to Notify
      </h1>

      {
        goto && isRegistered ? <Redirect to="/home" /> : <Redirect to="/insreg" />
      }
      {isRegistered ? Info() : Registration()}
      {/* {Info()} */}

    </div>
  );
}

export default Welcome;
