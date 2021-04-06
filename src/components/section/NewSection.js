import React from 'react'
import { Link } from 'react-router-dom'

function NewSection() {
    return (
        <React.Fragment>
            <>
                <style>{'body { background-color: #d1ddde; }'}</style>
                <div>
                    <div className="row m-0">
                        <div className="col-sm-8 col-md-8 col-lg-8 my-2 m-0">
                            {/* <div className="container my-2"> */}
                            <div className="row m-0">
                                <div className="col-lg-12 col-md-10 col-sm-10 m-0">
                                    {/* card1 */}
                                    <div class="card text-center">
                                        <div style={{ padding: '0.2rem' }} class="card-body">
                                            {/* header */}
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="text-center" style={{ fontWeight: 'revert', fontStyle: 'italic', color: '#91161a' }}>
                                                        Computer Science & Engineering(CSE)
                                            </h5>
                                                    <h6 style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#666' }} className="card-title">1st year</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card1 end */}
                                    {/* card2 */}
                                    <div style={{ paddingTop: '2px' }}>
                                        <div className="card text-center">
                                            <div style={{ padding: '0.3rem' }} className="card-body">
                                                <h5 style={{ fontWeight: 'normal' }} className="card-title">Exam Notice</h5>

                                                <label style={{ color: 'blue' }}>Click in View and see all notice</label>
                                                <div>
                                                    <Link to="/home/notice/NoticeType"><button style={{ background: '#17d4d4', color: 'white' }} className="btn">View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card2 end */}
                                    {/* card3 */}
                                    <div style={{ paddingTop: '5px' }}>
                                        <div className="card text-center">
                                            <div style={{ padding: '0.5rem' }} className="card-body">
                                                <h5 style={{ fontWeight: 'normal' }} className="card-title">Admission Fees Notice</h5>

                                                <label style={{ color: 'blue' }}>Click in View and see all notice</label>
                                                <div>
                                                    <Link to="#"><button style={{ background: '#17d4d4', color: 'white' }} className="btn">View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card3 end */}
                                    {/* card4 */}
                                    <div style={{ paddingTop: '5px' }}>
                                        <div className="card text-center">
                                            <div style={{ padding: '0.5rem' }} className="card-body">
                                                <h5 style={{ fontWeight: 'normal' }} className="card-title">Exam Fees Notice</h5>

                                                <label style={{ color: 'blue' }}>Click in View and see all notice</label>
                                                <div>
                                                    <Link to="#"><button style={{ background: '#17d4d4', color: 'white' }} className="btn">View</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card4 end */}
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-md-4 my-2 m-0">
                            {/* <div className="container my-2"> */}
                            <div className="row m-0">
                                <div className="col-lg-12 col-md-10 col-sm-10 m-0">
                                    <div className="card shadow">
                                        <div style={{ padding: '0.5rem' }} className="card-body">
                                            {/* heading */}
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="text-center" style={{ fontWeight: 'revert', fontStyle: 'italic', color: '#91161a' }}>
                                                        Recent notice of 1st year
                                        </h5>
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <Link to="#"><p style={{ fontWeight: 'bold' }}>notice 1</p></Link>
                                                <Link to="#"><p style={{ fontWeight: 'bold' }}>notice 1</p></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        </React.Fragment>
    )
}

export default NewSection
