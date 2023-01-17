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
              Signup
            </div>
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>Hey there!</b></h1>
              <h6 className="mt-4 mb-5"><b>Let's sign you up</b></h6>
              <div className="rounded p-3" style={{ border: '1px solid #fd6a01', background: '#fff5d9' }}>
                What is your mobile number?<br />
                <span style={{ color: '#fd6a01' }}><b>082 345 3453</b></span>
              </div>
              <div class="d-flex">
                <div>
                  <input style={{ width: 30, height: 30, marginLeft: 0, marginTop: 20 }} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div>
                  <h6 style={{ marginLeft: 40 }} className="mt-4">I accept the  <span style={{ color: '#fd6a01' }}>terms and conditions</span></h6>
                </div>
              </div>
              <div class="form-check">
                <input style={{ width: 30, height: 30 }} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <h6 style={{ marginLeft: 15 }} className="mt-4">Keep me in the loop with infomation and promotions</h6>
              </div>
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Let's go
                </div>
              </div>
              <div className="text-center">
                <h6 className="mt-4">Already have an account? <span style={{ color: '#fd6a01' }}>Log in</span></h6>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>Just to</b></h1>
              <h1><b>Verify</b></h1>
              <div className="mt-3 mb-5">
                <span><b>Please enter the OTP PIN sent to you via SMS</b></span>
                <span><b>to +27 ** *** 5437.</b></span>
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
              <div style={{ height: 100 }}></div>
              <div className="text-center">
                <h6 className="mt-4"><b>Didn't receive the SMS? <span style={{ color: '#fd6a01' }}>Resend PIN</span></b></h6>
                <h6 className="mt-4"><b>Wrong phone number? <span style={{ color: '#fd6a01' }}>Go back</span></b></h6>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>Let's keep</b></h1>
              <h1><b>you safe!</b></h1>
              <div className="mt-3 mb-5">
                <span><b>Create your Passcode</b></span>
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
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Next
                </div>
              </div>
              <div style={{ height: 100 }}></div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>And confirm</b></h1>
              <div className="mt-3 mb-5">
                <span><b>Confirm your Passcode</b></span>
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
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Next
                </div>
              </div>
              <div style={{ height: 100 }}>
              </div>
              <div className="text-center">
                <h6 className="mt-4"><b>Can't remember your password? <span style={{ color: '#fd6a01' }}>Go back</span></b></h6>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>We need to </b></h1>
              <h1><b>authenticate</b></h1>
              <h1><b>your identity.</b></h1>
              <div className="mt-3 mb-5">
                <span><b>Which document would you like to use to verify your identity</b></span>
              </div>
              <div class="form-check mb-2">
                <input style={{ width: 25, height: 25 }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{ paddingLeft: 10, paddingTop: 3 }} class="form-check-label" for="flexRadioDefault1">
                  South Africa Id
                </label>
              </div>
              <div class="form-check mb-2">
                <input style={{ width: 25, height: 25 }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{ paddingLeft: 10, paddingTop: 3 }} class="form-check-label" for="flexRadioDefault1">
                  Valid South African passport
                </label>
              </div>
              <div class="form-check mb-2">
                <input style={{ width: 25, height: 25 }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{ paddingLeft: 10, paddingTop: 3 }} class="form-check-label" for="flexRadioDefault1">
                  Valid SA driver's license
                </label>
              </div>
              <div class="form-check mb-2">
                <input style={{ width: 25, height: 25 }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{ paddingLeft: 10, paddingTop: 3 }} class="form-check-label" for="flexRadioDefault1">
                  Valid foreign passport
                </label>
              </div>
              <div class="form-check mb-2">
                <input style={{ width: 25, height: 25 }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label style={{ paddingLeft: 10, paddingTop: 3 }} class="form-check-label" for="flexRadioDefault1">
                  Valid asylum document
                </label>
              </div>

              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Next
                </div>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>Take a photo </b></h1>
              <h1><b>of your valid </b></h1>
              <h1><b>South African</b></h1>
              <h1><b>passport</b></h1>
              <div className="mt-3 mb-2">
                <span><b>Make sure your name, all numbers and photo are clear and visible</b></span>
              </div>
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Let's go
                </div>
              </div>
              <div style={{ height: 100 }}>

              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <div style={{ height: 50 }}>

              </div>
              <div className="text-center" style={{ height: 300 }}>
                <div >
                  <img className="mt-5 mb-5" width={300} height={180} src={require("../../assets/images/SApassport.png")} alt="passwordIcon" />
                  <div style={{ height: 40, width: 40, borderTop: '2px solid #fd6a01', borderLeft: '2px solid #fd6a01', position: 'relative', top: -235, left: 20 }} />
                  <div style={{ height: 40, width: 40, borderTop: '2px solid #fd6a01', borderRight: '2px solid #fd6a01', position: 'relative', top: -275, right: -292 }} />
                  <div style={{ height: 40, width: 40, borderBottom: '2px solid #fd6a01', borderRight: '2px solid #fd6a01', position: 'relative', top: -161, right: -292 }} />
                  <div style={{ height: 40, width: 40, borderBottom: '2px solid #fd6a01', borderLeft: '2px solid #fd6a01', position: 'relative', top: -201, left: 20 }} />
                </div>
              </div>
              <div style={{ height: 50 }}>

              </div>
              <div className="d-flex justify-content-center">
                <div className="btn-circle bg-primary fs-2">
                  <i class="bi bi-camera text-white"></i>
                </div>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <div className="mt-3 mb-4">
                <span><b>Upload your document.</b></span>
              </div>
              <div className="text-center rounded border">
                <img className="mt-5 mb-5" width={300} height={180} src={require("../../assets/images/SApassport.png")} alt="passwordIcon" />
              </div>
              <div className="text-center">
                <h6 className="mt-4"><b><span style={{ color: '#fd6a01' }}><i class="bi bi-trash3"></i> Delete and upload another image</span></b></h6>
              </div>
              <div style={{ height: 10 }}>

              </div>
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Upload my document
                </div>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>Upload your </b></h1>
              <h1><b>selfie.</b></h1>
              <div className="mt-3 mb-5">
                <span><b>Please take a selfie with a thumbs up close to your face.</b></span>
              </div>
              <div class="d-flex">
                <i style={{ color: '#fd6a01' }} class="bi bi-check-circle fs-4"></i>
                <label style={{ paddingLeft: 10, paddingTop: 5 }} class="form-check-label" for="flexRadioDefault1">
                  Stand in front of a plain, light-coloured wall.
                </label>
              </div>
              <div class="d-flex">
                <i style={{ color: '#fd6a01' }} class="bi bi-check-circle fs-4"></i>
                <label style={{ paddingLeft: 10, paddingTop: 5 }} class="form-check-label" for="flexRadioDefault1">
                  Give us a thumb up
                </label>
                <i style={{ color: '#fd6a01' }} class="bi bi-hand-thumbs-up fs-4"></i>
                <label style={{ paddingTop: 5 }} class="form-check-label" for="flexRadioDefault1">
                  close to your face.
                </label>
              </div>
              <div class="d-flex">
                <i style={{ color: '#fd6a01' }} class="bi bi-check-circle fs-4"></i>
                <label style={{ paddingLeft: 10, paddingTop: 5 }} class="form-check-label" for="flexRadioDefault1">
                  Check that your face and thumb are in focus and not blurry
                </label>
              </div>
              <div className="mt-3">
                <span><b>See the example below.</b></span>
              </div>
              <div className="text-center">
                <img className="mt-5 mb-5" width={300} src={require("../../assets/images/selfieEx.png")} alt="passwordIcon" />
              </div>
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Let's do it
                </div>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <div className="mt-3 mb-4">
                <span><b>Upload your document.</b></span>
              </div>
              <div className="text-center rounded border">
                <img width='100%' src={require("../../assets/images/selfie.png")} alt="passwordIcon" />
              </div>
              <div className="text-center">
                <h6 className="mt-4"><b><span style={{ color: '#fd6a01' }}><i class="bi bi-trash3"></i> Delete and upload another image</span></b></h6>
              </div>
              <div style={{ height: 10 }}>

              </div>
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Upload my selfie
                </div>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <h1><b>Almost done with</b></h1>
              <h1><b>your verification!</b></h1>
              <h6 className="mt-4 mb-5"><b>Please complete the following personal information.</b></h6>
              <input style={{ height: 60 }} className="form-control mt-4" id="full" placeholder="Your full name(s) as on your ID" />
              <input style={{ height: 60 }} className="form-control mt-4" id="sur" placeholder="Your surname as on your ID" />
              <input style={{ height: 60 }} className="form-control mt-4" id="number" placeholder="Your identity number" />
              <input style={{ height: 60 }} className="form-control mt-4" id="expiry" placeholder="The expiry date of the document" />
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Done
                </div>
              </div>
            </div>

            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <div className="text-center mt-4 mb-5">
                <img width={60} src={require("../../assets/images/confirmWallet.png")} alt="passwordIcon" />
              </div>
              <h1><b>Your account</b></h1>
              <h1><b>is ready!</b></h1>
              <h6 className="mt-4 mb-5"><b>Next you can add your wallets and cards.</b></h6>
              <div className="d-flex primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', height: 56, color: '#fff' }}>
                <div style={{ margin: 'auto' }}>
                  Done
                </div>
              </div>
              <div style={{ height: 100 }}>

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