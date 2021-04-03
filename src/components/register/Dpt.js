import React, { useState } from 'react'
import { Switch, Link } from 'react-router-dom';


function Dpt() {
    const [depttitle, setDepttitle] = useState("");
    const [deptdes, setDeptdes] = useState("");

    const handleDeptitle = (e) => {
        console.log(e.target.value);
        setDepttitle(e.target.value);
    }
    const handleDeptdes = (e) => {
        console.log(e.target.value);
        setDeptdes(e.target.value);
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
                                            Department
                                        </h5>
                                    </div>
                                </div>
                                <form >
                                    <div className="row mt-2">
                                        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                                            {/* departmentTitle */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fab fa-tumblr-square"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Section Title (exp: CSE,CE..."
                                                    aria-label="sectionTitle"
                                                    aria-describedby="basic-addon1"
                                                    // onChange={(e)=>setAddress(e.target.value)}
                                                    value={depttitle}
                                                    onChange={handleDeptitle}
                                                />
                                            </div>
                                            {/* departmentDescription */}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i className="fas fa-file-prescription"></i>
                                                    </span>
                                                </div>
                                                <textarea
                                                    value={deptdes}
                                                    onChange={handleDeptdes}
                                                    className="form-control" aria-label="With textarea" placeholder="DepartmentDescription"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/desc" >Previous</Link>
                                        </li>

                                        <li className="page-item">
                                            <Link className="page-link" to="/insreg/sec" >Next</Link>
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

export default Dpt
