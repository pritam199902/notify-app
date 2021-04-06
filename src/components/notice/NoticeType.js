import React from 'react'
import { Link } from 'react-router-dom'

function NoticeType() {
    return (
        <React.Fragment>
            <>

                <style>{'body { background-color: #d1ddde; }'}</style>
                <div className="container my-1">
                    <div className="row m-auto">
                        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                            <div style={{ borderRadius: '20px' }} className="card shadow">
                                <div style={{ padding: '0.5rem' }} className="card-body">

                                    {/* header */}
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="text-center" style={{ fontWeight: 'revert', fontStyle: 'italic', color: '#91161a' }}>
                                                Computer Science & Engineering(CSE)
                                            </h5>
                                            <h6 style={{ fontWeight: 'normal', fontStyle: 'italic', color: '#aaa' }} class="card-title">1st year</h6>
                                            <h6 style={{ fontWeight: 'normal', color: '#666' }} class="card-title">Exam Notice</h6>
                                        </div>
                                    </div>
                                    {/* header end */}

                                </div>
                            </div>
                            {/* card1 */}
                            <div style={{ paddingTop: '5px' }}>
                                <div style={{ borderRadius: '20px' }} className="card text-center">
                                    <div style={{ padding: '0.5rem' }} className="card-body">
                                        <h6 style={{ fontWeight: 'normal' }} class="card-title">Notice 1</h6>


                                        <div>
                                            <Link to="/home/notice/Noticeview"><p style={{ fontWeight: 'bold' }}>View</p></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card1 end */}
                            {/* card2 */}
                            <div style={{ paddingTop: '5px' }}>
                                <div style={{ borderRadius: '20px' }} className="card text-center">
                                    <div style={{ padding: '0.5rem' }} className="card-body">
                                        <h6 style={{ fontWeight: 'normal' }} className="card-title">Notice 2</h6>


                                        <div>
                                            <Link to="#"><p style={{ fontWeight: 'bold' }}>View</p></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card2 end */}
                            {/* card3 */}
                            <div style={{ paddingTop: '5px' }}>
                                <div style={{ borderRadius: '20px' }} className="card text-center">
                                    <div style={{ padding: '0.5rem' }} className="card-body">
                                        <h6 style={{ fontWeight: 'normal' }} className="card-title">Notice 3</h6>


                                        <div>
                                            <Link to="#" ><p style={{ fontWeight: 'bold' }}>View</p></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card3 end */}
                        </div>
                    </div>
                </div>
            </>
        </React.Fragment>
    )
}

export default NoticeType
