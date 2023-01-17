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
              Log in
            </div>
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>Welcome</b></h1>
              <h1><b>Back!</b></h1>
              <h6 className="mt-4 mb-5"><b>Sign in with your username and password</b></h6>
              <input style={{ height: 60 }} className="form-control mt-4" id="username" placeholder="Username" />
              <input style={{ height: 60 }} className="form-control mt-4" id="password" type='password' placeholder="Password" />
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Next
                </div>
              </div>
              <div className="text-center">
                <h6 className="mt-4">Forgot your username or password? <span style={{ color: '#fd6a01' }}>Reset it here</span></h6>
                <h6 className="mt-5">Is your account not set up yet? <span style={{ color: '#fd6a01' }}>Register here</span></h6>
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