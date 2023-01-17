import React from "react";

const HomeCardComponent = (props) => {
  return (
    <>
      <div style={{ width: 330 }} className="rounded d-flex shadow p-4 mt-2 mb-2">
        <div style={{ width: 40 }}>
          <i className={`bi ${props.icon} fs-4`}></i>
        </div>
        <div style={{ width: 'calc(100% - 40px)' }}>
          <h6 className="mt-2"><b>{props.title}</b></h6>
          <div style={{ fontSize: 15 }} className="d-flex justify-content-between mt-1">
            <div>
              {props.content11}
            </div>
            <div>
              {props.content12}
            </div>
          </div>
          <div style={{ fontSize: 15 }} className="d-flex justify-content-between mt-1">
            <div>
              {props.content21}
            </div>
            <div>
              {props.content22}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCardComponent;