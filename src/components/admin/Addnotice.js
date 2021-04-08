import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Addnotice() {
    const [noticeType, setnoticeType] = useState("");
    const [noticeDpt, setnoticeDpt] = useState("");
    const [noticeSec, setnoticeSec] = useState("");
    const [noticeTitle, setnoticeTitle] = useState("");
    const [noticeDes, setnoticeDes] = useState("");
    const [noticeFile, setnoticeFile] = useState("");
    const [noticeLink, setnoticeLink] = useState("");
    const [noticeBody, setnoticeBody] = useState("");

    const handlenoticeType = (e) => {
        console.log(e.target.value);
        // setnoticeType(e.target.value);
    }
    const handlenoticeDepartment = (e) => {
        console.log(e.target.value);
        // setnoticeDpt(e.target.value);
    }
    const handlenoticeSection = (e) => {
        console.log(e.target.value);
        // setnoticeSec(e.target.value);
    }
    const handlenoticeTitle = (e) => {
        console.log(e.target.value);
        setnoticeTitle(e.target.value);
    }
    const handlenoticeDes = (e) => {
        console.log(e.target.value);
        setnoticeDes(e.target.value);
    }
    const handlenoticeFile = (e) => {
        console.log(e.target.value);
        setnoticeFile(e.target.value);
    }
    const handlenoticeLink = (e) => {
        console.log(e.target.value);
        setnoticeLink(e.target.value);
    }
    const handlenoticeBody = (e) => {
        console.log(e.target.value);
        setnoticeBody(e.target.value);
    }

    return (
        <>
            <React.Fragment>
                <style>{'body { background-color: #f0f5f1; }'}</style>
                <div className="container my-3">
                    <div className="row m-auto">
                        <div className="col-lg-12 col-md-10 col-sm-10 m-auto">
                            <div className="card shadow">
                                <div className="card-body">
                                    <form >
                                        <div className="row mt-2">
                                            <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                                                {/* header */}
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="text-center" style={{ fontWeight: 'revert', fontStyle: 'italic', color: '#91161a' }}>
                                                            Create New Notice
                                                    </h5>
                                                    </div>
                                                </div>

                                                {/* noticeType */}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <span className="input-group-text mb-0 pb-0">
                                                            <i className="fab fa-accusoft"></i>
                                                        </span>
                                                    </div>
                                                    <select
                                                        style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}
                                                        // value={noticeType}
                                                        // onChange={handlenoticeType}
                                                        className="custom-select">
                                                        <option value={null}>-Notice Type-</option>
                                                        <option value="school">School</option>
                                                        <option value="college">College</option>
                                                        <option value="office">Office</option>
                                                    </select>
                                                </div>
                                                {/* selectDepartment */}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <span className="input-group-text mb-0 pb-0">
                                                            <i class="fas fa-building"></i>
                                                        </span>
                                                    </div>
                                                    <select
                                                        style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}
                                                        // value={noticeDpt}
                                                        // onChange={handlenoticeDepartment}
                                                        className="custom-select">
                                                        <option value={null}>-Department-</option>
                                                        <option value="CSE">Computer Science & Engineering</option>
                                                        <option value="CE">Civil Engineering</option>
                                                        <option value="ECE">Electronics and Communication Engineering</option>
                                                        <option value="EE">Electrical Engineering</option>
                                                    </select>
                                                </div>
                                                {/* selectSection */}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <span className="input-group-text mb-0 pb-0">
                                                            <i className="fas fa-eye"></i>
                                                        </span>
                                                    </div>
                                                    <select
                                                        style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}
                                                        // value={noticeSec}
                                                        // onChange={handlenoticeSection}
                                                        className="custom-select">
                                                        <option value={null}>-Section-</option>
                                                        <option value="1st">1st year</option>
                                                        <option value="2nd">2nd year</option>
                                                        <option value="3rd">3rd year</option>
                                                        <option value="4th">4th year</option>
                                                    </select>
                                                </div>
                                                {/* noticeTitle */}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <span className="input-group-text mb-0 pb-0">
                                                            <i className="fab fa-tumblr-square"></i>
                                                        </span>
                                                    </div>
                                                    <input

                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Notice title"
                                                        aria-label="Name"
                                                        aria-describedby="basic-addon1"
                                                    // value={noticeTitle}
                                                    // onChange={handlenoticeTitle}
                                                    // onChange={(e) => setshortName(e.target.value)}

                                                    />

                                                    {/* <small className="text-warning float-right mt-3">max:50</small> */}
                                                </div>

                                                {/* noticeDescription */}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <span className="input-group-text mb-0 pb-0">
                                                            <i className="fas fa-file-prescription"></i>
                                                        </span>
                                                    </div>
                                                    <textarea
                                                        // value={noticeDes}
                                                        // onChange={handlenoticeDes}

                                                        className="form-control" aria-label="With textarea" placeholder="Notice Description"></textarea>


                                                </div>

                                                {/* noticeDate */}

                                                {/* <div class="input-group mb-3">
                                                <div className="input-group-prepend mr-3 mb-0">
                                                    <span className="input-group-text mb-0 pb-0">
                                                        <i class="fas fa-calendar-week"></i>
                                                    </span>
                                                </div>

                                                <input
                                                    value={noticeDate}
                                                    onChange={handlenoticeDate}
                                                    className="form-control"
                                                    type="date"
                                                    id="formFile" />
                                                <label className="text mt-2">Select notice date</label>
                                            </div> */}



                                                {/* noticeFile */}
                                                <div class="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <span className="input-group-text mb-0 pb-0">
                                                            <i className="fas fa-file"></i>
                                                        </span>
                                                    </div>
                                                    <input
                                                        // value={noticeFile}
                                                        // onChange={handlenoticeFile}
                                                        className="form-control"
                                                        type="file"
                                                        id="formFile" />
                                                    <label className="text pt-2">Upload (img/pdf/word/XL)</label>
                                                </div>

                                                {/* noticeLink */}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <p className="input-group-text mb-0 pb-0">
                                                            <i className="fas fa-link"></i>
                                                        </p>
                                                    </div>
                                                    <input
                                                        // value={noticeLink}
                                                        // onChange={handlenoticeLink}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Notice link" readonly />
                                                </div>
                                                {/* noticeBody */}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend mr-3 mb-0">
                                                        <span className="input-group-text mb-0 pb-0">
                                                            <i className="far fa-calendar"></i>
                                                        </span>
                                                    </div>
                                                    <textarea
                                                        // value={noticeBody}
                                                        // onChange={handlenoticeBody}

                                                        className="form-control" aria-label="With textarea" placeholder="Notice Body"></textarea>


                                                </div>

                                                {/* Submit Button */}
                                                <button style={{ background: '#11accf' }} className="btn btn-light" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </>
    )
}

export default Addnotice
