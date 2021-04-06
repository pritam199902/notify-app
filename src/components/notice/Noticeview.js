import React from 'react'
import { Link } from 'react-router-dom'

function Noticeview() {
    return (
        <React.Fragment>
            <>

                <style>{'body { background-color: #d1ddde; }'}</style>
                <div className="container my-1">
                    <div className="row m-auto">
                        <div className="col-lg-10 col-md-11 col-sm-10 m-auto">
                            <div className="card shadow">
                                <div style={{ padding: '0.5rem' }} className="card-body">
                                    {/* header */}
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="text-center" style={{ fontWeight: 'revert', fontStyle: 'italic', color: '#91161a' }}>
                                                Computer Science & Engineering(CSE)
                                            </h5>
                                            <h6 style={{ fontWeight: 'normal', fontStyle: 'italic', color: '#aaa' }} className="card-title">1st year</h6>
                                            <h6 style={{ fontWeight: 'normal', color: '#666' }} className="card-title">Exam Notice</h6>
                                        </div>
                                    </div>
                                    {/* header end */}

                                </div>
                            </div>
                            {/* card1 */}
                            <div style={{ paddingTop: '3px' }}>
                                <div className="card text-center">
                                    <div style={{ padding: '0.5rem' }} className="card-body">
                                        <h6 style={{ fontWeight: 'normal' }} className="card-title">Notice Title </h6>
                                        <hr />

                                        <p>

                                            <Link to="#">
                                                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                    Notice 1
                                        </button>
                                            </Link>
                                        </p>
                                        <div className="collapse" id="collapseExample">
                                            <div className="card card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card1 end */}
                        </div>

                    </div>
                </div>
            </>
        </React.Fragment>
    )
}

export default Noticeview
