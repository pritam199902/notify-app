import React, { useState } from 'react'
import { Switch, Link } from 'react-router-dom';

function Address() {
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [pin, setPin] = useState("");
    const [dstate, setDstate] = useState("");
    const [country, setCountry] = useState("");

    const handleAdress = (e) => {
        setAddress(e.target.value);
        console.log(e.target.value)
    }
    const handleDistrict = (e) => {
        setDistrict(e.target.value);
        console.log(e.target.value);
    }
    const handlePin = (e) => {
        if (pin.length < 6) {
            setPin(e.target.value);
        } else {
            alert("Pin number length should not be exceed 6");
        }

    }
    const handleDstate = (e) => {
        console.log(e.target.value);
        setDstate(e.target.value);
    }
    const handleCountry = (e) => {
        console.log(e.target.value);
        setCountry(e.target.value);
    }

    const userAdress = (e) => {
        e.preventDefault();
        const userAdd = {
            address,
            district,
            pin,
            dstate,
            country
        };
    };

    return (
        <>
            <style>{'body { background-color: #d4d0c7; }'}</style>
            <div className="container my-2">
                <div className="row m-auto">
                    <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
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
                                            Address
                                        </h5>
                                    </div>
                                </div>
                                {/* Input */}
                                <form >
                                    <div className="row mt-2">
                                        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                                            {/* ADDRESS */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fa fa-address-card"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    aria-label="address"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setAddress(e.target.value)}
                                                    value={address}
                                                    onChange={handleAdress}
                                                />
                                            </div>
                                            {/* District */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fab fa-cc-discover"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="District"
                                                    aria-label="district"
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => setDistrict(e.target.value)}
                                                    value={district}
                                                    onChange={handleDistrict}
                                                />
                                            </div>
                                            {/* PIN */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fa fa-map-marker"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Pin number"
                                                    aria-label="pin"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setPin(e.target.value)}
                                                    onChange={handlePin}
                                                    value={pin}
                                                />
                                            </div>
                                            {/* STATE */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-location-arrow"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="State"
                                                    aria-label="state"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setDstate(e.target.value)}
                                                    value={dstate}
                                                    onChange={handleDstate}
                                                />
                                            </div>
                                            {/* Country */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-globe-asia"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Country"
                                                    aria-label="country"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setCountry(e.target.value)}
                                                    value={country}
                                                    onChange={handleCountry}
                                                />
                                            </div>


                                        </div>
                                    </div>
                                </form>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/" >Previous</Link>
                                        </li>

                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/desc" >Next</Link>
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

export default Address
