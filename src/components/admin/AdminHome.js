import React from 'react'
import { Link } from 'react-router-dom'

function adminHome() {
    return (
        <>
            <React.Fragment>
                <style>{'body { background-color: #f0f5f1; }'}</style>
                <div className="container my-3">
                    <div className="row m-auto">
                        <div className="col-lg-10 col-md-10 col-sm-10 m-auto">
                            <div className="card shadow">
                                <div className="card-body">
                                    {/* card */}
                                    <div class="row">

                                        <div class="col-sm-6">
                                            <Link to="#">
                                                <div class="card">
                                                    <div style={{ background: '#7913a8' }} class="card-body">
                                                        <h5 class="card-title" style={{ color: 'white', fontWeight: 'bold' }}>Department List</h5>

                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div style={{ paddingTop: '1px' }} class="col-sm-6">
                                            <Link to="/admin/Addnotice">
                                                <div style={{ background: '#e0850d' }} class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title" style={{ color: 'white', fontWeight: 'bold' }}>Add new notice</h5>

                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </>
    )
}

export default adminHome;
