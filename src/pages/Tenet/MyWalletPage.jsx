import React, { useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import FooterBar from "../../components/FooterBar";
import HomeCardComponent from "./HomeCard";
import VirtualCard from "./VirtualCard";

const ResetPasswordPage = (props) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <HeaderBar />
      <div className="global-bg d-flex justify-content-center" style={{ minHeight: 'calc(100vh - 164px)' }}>
        <div>
          <div style={{ width: 400 }} className="mb-3">
            <div className="mt-2 mb-2 text-white px-2">
              My Wallet
            </div>
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-wallet2' title='My Wallet'
                  content11='Balance' content12='R 1 235.25' content21='Available' content22='R 1 034.24' />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-cash' title='Top Up' />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-arrow-left-right' title='Transfer' />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-cash-stack' title='Withdrawal' />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-clock-history' title='Transaction History' />
              </div>
            </div>
          </div>
          <div style={{ width: 400 }} className="mb-3">
            <div style={{ height: 20 }} />
            <div style={{ borderRadius: 10 }} className='bg-light p-4'>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-wallet2' title='My Wallet'
                  content11='Balance' content12='R 1 235.25' content21='Available' content22='R 1 034.24' />
              </div>
              <div className="d-flex justify-content-center">
                <VirtualCard />
              </div>
              <div className="text-center mt-3 mb-3" style={{ color: '#fd6a01' }}>
                <i className="bi bi-eye"></i> <b>View card details</b>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                  <label className="custom-control-label" for="customSwitch1">Active</label>
                </div>
                <div style={{ marginRight: 10 }}>
                  <i style={{ cursor: 'pointer' }} onClick={() => setVisible(true)} class="bi bi-three-dots-vertical"></i>
                </div>
              </div>
              <div className="position-absolute" style={{ display: `${visible ? 'block' : 'none'}` }}>
                <div className="rounded shadow p-1 position-absolute bg-white" style={{ zIndex: 10, width: 140, left: 180, top: -10 }}>
                  <div className="w-100 text-end" style={{ zIndex: 10, cursor: 'pointer' }}>
                    <i onClick={() => setVisible(false)} class="bi bi-x fs-4"></i>
                  </div>
                  <div className="position-relative" style={{ left: 19, bottom: 15, cursor: 'pointer' }}>
                    <b>Cancel Card</b>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-cash' title='Top Up' />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-arrow-left-right' title='Transfer' />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-cash-stack' title='Withdrawal' />
              </div>
              <div className="d-flex justify-content-center">
                <HomeCardComponent icon='bi-clock-history' title='Transaction History' />
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