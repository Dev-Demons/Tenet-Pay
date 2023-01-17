import React from "react";

const ButtonDashBoder = (props) => {
  return (
    <>
      <div style={{ width: 330, border: '2px dashed #fd6a01', color: '#fd6a01' }} className="rounded p-4 mt-2 mb-2 d-flex justify-content-center">
        <div>
          <i class="bi bi-plus-circle fs-5 mx-2"></i>
        </div>
        <div className="pt-1">
          <b>Add a Physical Card</b>
        </div>
      </div>
    </>
  );
}

export default ButtonDashBoder;