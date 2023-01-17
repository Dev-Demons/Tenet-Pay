import React from "react";

const VirtualCard = (props) => {
  return (
    <>
      <div style={{ width: 250, borderRadius: 20 }} className="shadow-sm p-4">
        <div className="w-100 text-end">
          <img width={80} height={60} src={require("../../assets/images/simcard.png")} alt="sim" />
        </div>
        <img className="mt-4" width={170} height={60} src={require("../../assets/images/ukheshe.png")} alt="sim" />
        <h6 className="mt-5"><b>MR J M CARDHOLDER</b></h6>
        <h6><b>**** **** **** 8888</b></h6>
        <div className="d-flex">
          <div className="d-flex w-50">
            <div style={{ fontSize: 10 }}>
              <span>WID</span><br />
              <span>THR</span>
            </div>
            <div>
              **/**
            </div>
          </div>
          <div className="d-flex">
            <div style={{ fontSize: 10 }}>
              CW2
            </div>
            <div>
              ***
            </div>
          </div>
        </div>
        <div className="text-end">
          <img width={120} src={require("../../assets/images/mastercard.png")} alt="sim" />
        </div>
      </div>
    </>
  );
}

export default VirtualCard;