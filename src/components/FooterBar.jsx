import React from "react";

import "../assets/css/footer.css"

const FooterBar = () => {
  return (
    <>
      <div className="w-100 bg-dark bg-gradient d-flex justify-content-between text-white" style={{ padding: '30px 200px' }}>
        <div>
          All rights reserved. @2021 Ukheshe
        </div>
        <div>
          <span className="px-3">
            Privacy Policy
          </span>
          <span className="px-3">
            Terms and Conditions
          </span>
          <span className="px-3">
            Contact Support
          </span>
        </div>
      </div>
    </>

  );
}

export default FooterBar;