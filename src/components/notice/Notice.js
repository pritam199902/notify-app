import React from "react";
import { Link } from "react-router-dom";

function Notice() {
  const SubSectionNotice = () => {
    return (
      <div className="card">
        <div className="card-body p-1">
          <h4 className="text-info">
            {" "}
            <b> Exam Notice </b>
          </h4>
          <Link to={`/home/notice/${"123456"}`}>
            <i
              className="fa fa-angle-double-right text-info"
              style={{ fontSize: 33 }}
            ></i>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-secondary">All Notice</h2>
      <div className="container">
        <div className="row m-0 justify-content-center">
          
          <div className="col-lg-4 col-md-4 col-sm-4 p-1">
            <SubSectionNotice />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Notice;
