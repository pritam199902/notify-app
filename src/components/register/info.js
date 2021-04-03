import React from 'react'
import { useState } from "react";
import { Switch, Link } from 'react-router-dom';
import Navbar from '../home/Navbar';
import { v4 } from 'uuid'

function Info() {
    const [fullName, setFullName] = useState("");
    const [shortName, setshortName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState();
    const [hlpEmail, setHlpEmail] = useState([{ id: v4(), email: "" }])
    const [hlpMobile, setHlpMobile] = useState([{ id: v4(), mobile: "" }])


    const handlefName = (e) => {
        console.log(e.target.value);
        // console.log(e.target.className);

    }
    const handleshortName = (e) => {
        if (shortName.length < 10) {
            setshortName(e.target.value);
        } else {
            alert("Short Name length should not be exceed 10");
        }
    }
    const handleEmail = (e) => {

    }
    const onSubmits = (e) => {
        e.preventDefault();
        alert('Form submitted');
    }
    const type = {
        email: "email",
        mobile: "mobile"
    }

    const addNew = (tp) => {
        switch (tp) {
            case type.email:
                const data = { id: v4(), email: "" }
                setHlpEmail([...hlpEmail, data])
                break;

            case type.mobile:
                const data1 = { id: v4(), mobile: "" }
                setHlpMobile([...hlpMobile, data1])
                break;

            default:
                break;
        }
    }


    const removeItem = (tp, id) => {
        switch (tp) {
            case type.email:
                console.log(tp, " >> ", id);
                setHlpEmail([...hlpEmail.filter((data => data.id != id))])
                break;

            case type.mobile:
                setHlpMobile([...hlpMobile.filter((data => data.id != id))])
                break;

            default:
                break;
        }
    }

    const editText = (tp, i, id, text) => {
        switch (tp) {
            case type.email:
                hlpEmail[i].email = text
                setHlpEmail(hlpEmail)
                break;

            case type.mobile:
                hlpMobile[i].mobile = text
                setHlpMobile(hlpMobile)
                break;

            default:
                break;
        }
    }

    const userRegister = (e) => {
        e.preventDefault();
        console.log(hlpEmail);
        console.log(hlpMobile);
        const userReg = {
            // fullName,
            shortName,
            email,
            mobile,
            // admissionCellEmail,
            // admissionCellMobile,

        };
        // userRegister(userReg);
    };
    return (

        <>
            <style>{'body { background-color: #d4d0c7; }'}</style>
            <div className="container my-2">
                <div className="row m-auto">
                    <div className="col-lg-9 col-md-10 m-auto">
                        <div className="card shadow">
                            <div className="card-body">
                                {/* Header */}
                                <div className="row">
                                    <div className="col">
                                        <h4 className="text-center" style={{ fontWeight: 'bold', color: '#bbb' }}>
                                            Institute Registration
                                        </h4>
                                    </div>
                                </div>
                                {/* Subheader */}
                                <div className="row">
                                    <div className="col">
                                        <h5 className="text-center" style={{ fontWeight: 'revert', fontStyle: 'italic', color: '#666' }}>
                                            Information
                                        </h5>
                                    </div>
                                </div>
                                {/* Input */}
                                <form className="mb-0" onSubmit={onSubmits}>
                                    <div className="row mt-2">
                                        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                                            {/* NAME */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fa fa-user"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Institute Full Name"
                                                    aria-label="Name"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setfullName(e.target.value)}
                                                    onChange={handlefName}
                                                    value={fullName}
                                                />
                                            </div>
                                            {/* Shortname */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fa fa-user"></i>
                                                    </span>
                                                </div>
                                                <input

                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Short Name"
                                                    aria-label="Name"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setshortName(e.target.value)}
                                                    value={shortName}
                                                    onChange={handleshortName}
                                                />

                                                <small className="text-warning float-right mt-3">max:10</small>
                                            </div>
                                            {/* logo */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-file-image"></i>
                                                    </span>
                                                </div>
                                                <input className="form-control" type="file" id="formFile" />
                                                <label className="text pt-2">Logo</label>
                                            </div>

                                            {/* EMAIL */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <p className="input-group-text mb-0 pb-0">
                                                        <i className="fa fa-envelope"></i>
                                                    </p>
                                                </div>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    aria-label="Email"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setEmail(e.target.value)}
                                                    onChange={handleEmail}
                                                    value={email}
                                                />
                                            </div>
                                            {/* Mobile Number  */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fa fa-mobile"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="10-digit mobile number"
                                                    aria-label="mobile"
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                            </div>
                                            {/* admissionCellEmail */}


                                            {hlpEmail.map((data, i) => {
                                                return (

                                                    <div key={i} className="row m-0">
                                                        <div className="col-10 m-0 p-0">

                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend mr-3 mb-0">
                                                                    <span className="input-group-text mb-0 pb-0">
                                                                        <i className="fa fa-envelope-open-text"></i>
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    placeholder="Help desk email"
                                                                    aria-label="admissionCellEmail"
                                                                    aria-describedby="basic-addon1"
                                                                    onChange={(e) => editText(type.email, i, data.id, e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        {hlpEmail.length - 1 != i &&
                                                            (<div className="col-2 m-0 p-0 float-right">
                                                                <button onClick={() => removeItem(type.email, data.id)} className="btn btn-outline-warning px-2 py-1 float-right mt-1" >x</button>
                                                            </div>)
                                                        }
                                                        {hlpEmail.length - 1 == i &&
                                                            (<div className="col-2 m-0 p-0 float-right">
                                                                <button type='button' onClick={() => addNew(type.email)} className="btn btn-outline-success px-2 py-1 float-right mt-1" >+</button>
                                                            </div>)
                                                        }
                                                    </div>

                                                )
                                            }
                                            )}


                                            {hlpMobile.map((data, i) => {
                                                return (

                                                    <div key={i} className="row m-0">
                                                        <div className="col-10 m-0 p-0">

                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend mr-3 mb-0">
                                                                    <span className="input-group-text mb-0 pb-0">
                                                                        <i className="fas fa-phone-alt"></i>
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    placeholder="Help desk mobile number"
                                                                    aria-label="admissionCellMobile"
                                                                    aria-describedby="basic-addon1"
                                                                    onChange={(e) => editText(type.mobile, i, data.id, e.target.value)}
                                                                />
                                                            </div>


                                                        </div>
                                                        {hlpMobile.length - 1 != i &&
                                                            (<div className="col-2 m-0 p-0 float-right">
                                                                <button type='button' onClick={() => removeItem(type.mobile, data.id)} className="btn btn-outline-warning px-2 py-1 float-right mt-1" >x</button>
                                                            </div>)
                                                        }

                                                        {hlpMobile.length - 1 == i &&
                                                            (<div className="col-2 m-0 p-0 float-right">
                                                                <button onClick={() => addNew(type.mobile)} className="btn btn-outline-success px-2 py-1 float-right mt-1" >+</button>
                                                            </div>)
                                                        }
                                                    </div>

                                                )
                                            }
                                            )}


                                            {/* LOGIN BUTTON */}
                                            {/* <button className="btn btn-info mt-3" type="submit">Next {">>"} </button> */}


                                        </div>
                                    </div>
                                </form>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/address" >Next</Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Info