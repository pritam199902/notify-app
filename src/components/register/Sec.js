import React, { useState } from 'react'
import { Switch, Link } from 'react-router-dom';


function Sec() {
    const [department, setDepartment] = useState("");
    const [sectitle, setSectitle] = useState("");
    const [secdesc, setSecdesc] = useState("");

    const handleDepartment = (e) => {
        console.log(e.target.value);
        setDepartment(e.target.value);
    }
    const handleSectiontitle = (e) => {
        console.log(e.target.value);
        setSectitle(e.target.value);
    }
    const handleSecdesc = (e) => {
        console.log(e.target.value);
        setSecdesc(e.target.value);
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
                                            Section
                                        </h5>
                                    </div>
                                </div>
                                <form >
                                    <div className="row mt-2">
                                        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                                            {/* department */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-id-badge"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Department"
                                                    aria-label="department"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e)=>setDepartment(e.target.value)}
                                                    value={department}
                                                    onChange={handleDepartment}
                                                />
                                            </div>
                                            {/* sectionTitle */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fab fa-tumblr-square"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Section Title (exp: 1st,2nd,3rd,4th year..."
                                                    aria-label="sectionTitle"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e)=>setSectitle(e.target.value)}
                                                    value={sectitle}
                                                    onChange={handleSectiontitle}
                                                />
                                            </div>
                                            {/* sectionDescription */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-file-prescription"></i>
                                                    </span>
                                                </div>
                                                <textarea
                                                    value={secdesc}
                                                    onChange={handleSecdesc}
                                                    className="form-control" aria-label="With textarea" placeholder="Section Description"></textarea>
                                            </div>

                                            <center>
                                                <button style={{ background: '#e32929', color: '#fff' }} className="btn btn-danger pb-2 px-4">
                                                    Register <i className="fa fa-user-plus ml-2"></i>
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </form>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/dpt" >Previous</Link>
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

export default Sec
