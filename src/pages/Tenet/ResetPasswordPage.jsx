import React from "react";
import HeaderBar from "../../components/HeaderBar";
import FooterBar from "../../components/FooterBar";

const ResetPasswordPage = (props) => {
  return (
    <>
      <HeaderBar />
      <div className="global-bg d-flex justify-content-center" style={{ minHeight: 'calc(100vh - 164px)' }}>
        <div>
          <div style={{ width: 400 }} className="mb-3">
            <div className="mt-2 mb-2 text-white px-2">
              My Password
            </div>
            <div style={{ borderRadius: 10 }} className='bg-light p-4 text-center'>
              <h5><b>Reset your password.</b></h5>
              <img className="mt-5 mb-5" width={100} src={require("../../assets/images/verifyConfirm.png")} alt="passwordIcon" />
              <div>
                <p><b>Please enter the OTP PIN sent to you via SMS</b></p>
                <p><b>to +27 ** *** 5437.</b></p>
              </div>
              <div className="d-flex justify-content-center">
                <div>
                  <input maxlength="1" className="form-control mt-2 mx-2" style={{ width: 60, height: 60, fontSize: 30, paddingLeft: 20 }} />
                </div>
                <div>
                  <input maxlength="1" className="form-control mt-2 mx-2" style={{ width: 60, height: 60, fontSize: 30, paddingLeft: 20 }} />
                </div>
                <div>
                  <input maxlength="1" className="form-control mt-2 mx-2" style={{ width: 60, height: 60, fontSize: 30, paddingLeft: 20 }} />
                </div>
                <div>
                  <input maxlength="1" className="form-control mt-2 mx-2" style={{ width: 60, height: 60, fontSize: 30, paddingLeft: 20 }} />
                </div>
              </div>
              <h6 className="mt-4"><b>Didn't receive the SMS? <span style={{ color: '#fd6a01' }}>Resend PIN</span></b></h6>
            </div>
          </div>
          <div style={{ width: 400 }}>
            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4 text-center'>
              <h5><b>Verification Successful.</b></h5>
              <h5><b>Set your new password.</b></h5>
              <img className="mt-5 mb-5" width={100} src={require("../../assets/images/passwordKey.png")} alt="passwordIcon" />
              <input style={{ height: 60 }} className="form-control mt-2" id="create" placeholder="Create Your Password" />
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Next
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 400 }}>
            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4 text-center'>
              <h5><b>Confirm your password.</b></h5>
              <img className="mt-5 mb-5" width={100} src={require("../../assets/images/passwordKey.png")} alt="passwordIcon" />
              <input style={{ height: 60 }} className="form-control mt-2" id="confirm" placeholder="Confirm Your Password" />
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Next
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 400 }}>
            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4 text-center'>
              <img className="mt-5 mb-5" width={100} src={require("../../assets/images/passwordReset.png")} alt="passwordIcon" />
              <h5><b>Your new password was set</b></h5>
              <h5><b>successfully</b></h5>
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Done
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default ResetPasswordPage;