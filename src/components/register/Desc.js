import React, { useState } from 'react';
import { Switch, Link } from 'react-router-dom';



function Desc() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estabyear, setEstabyear] = useState("");
    const [insType, setInsType] = useState("");
    const [insDes, setInsDes] = useState("");

    const handleTitle = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value);
    }
    const handleDescription = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value);
    }
    const handleEstabyear = (e) => {
        console.log(e.target.value);
        setEstabyear(e.target.value);
    }
    const handleInstype = (e) => {
        console.log(e.target.value);
        setInsType(e.target.value);
    }
    const handleInsdes = (e) => {
        console.log(e.target.value);
        setInsDes(e.target.value);
    }
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
                                            Description
                                        </h5>
                                    </div>
                                </div>
                                {/* Input */}
                                <form >
                                    <div className="row mt-2">
                                        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                                            {/* Title */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fab fa-tumblr-square"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Title"
                                                    aria-label="title"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e)=>setAddress(e.target.value)}
                                                    value={title}
                                                    onChange={handleTitle}
                                                />
                                            </div>
                                            {/* description */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-file-prescription"></i>
                                                    </span>
                                                </div>

                                                <textarea
                                                    value={description}
                                                    onChange={handleDescription}
                                                    className="form-control" aria-label="With textarea" placeholder="Description"></textarea>

                                            </div>
                                            {/* EstablishedOn */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-vote-yea"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Established Year"
                                                    aria-label="establishedOn"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e) => setEstablished(e.target.value)}
                                                    value={estabyear}
                                                    onChange={handleEstabyear}
                                                />
                                            </div>
                                            {/* instituteType */}
                                            {/* TODO:should be select type:school,college,office */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-university"></i>
                                                    </span>
                                                </div>

                                                <select className="custom-select"
                                                    style={{ borderLeft: '0', borderRight: '0', borderTop: '0' }}
                                                    value={insType}
                                                    onChange={(e) => {
                                                        if (e.target.value) {

                                                            const selectedType = e.target.value;
                                                            setInsType(selectedType);
                                                        } else {
                                                            alert("Select a valid Name ")
                                                        }
                                                    }}


                                                >

                                                    <option value={null}>-Select Institute-</option>
                                                    <option value="school">School</option>
                                                    <option value="college">College</option>
                                                    <option value="office">Office</option>
                                                </select>
                                                {insType}




                                            </div>
                                            {/* instituteTypeDescription */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-file-prescription"></i>
                                                    </span>
                                                </div>
                                                <textarea
                                                    value={insDes}
                                                    onChange={handleInsdes}
                                                    className="form-control" aria-label="With textarea" placeholder="InstituteTypeDescription"></textarea>
                                            </div>
                                            <center>

                                            </center>

                                        </div>
                                    </div>
                                </form>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/address" >Previous</Link>
                                        </li>

                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/dpt" >Next</Link>
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

export default Desc
