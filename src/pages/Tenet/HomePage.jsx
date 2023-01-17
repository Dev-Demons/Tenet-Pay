import React from "react";
import HeaderBar from "../../components/HeaderBar";
import FooterBar from "../../components/FooterBar";
import HomeCardComponent from "./HomeCard";
import ButtonDashBoder from "./ButtonDashBorder";
import './tenet.css'

const HomePage = (props) => {
  return (
    <>
      <HeaderBar />
      <div className="global-bg d-flex justify-content-center" style={{ minHeight: 'calc(100vh - 164px)' }}>
        <div style={{ width: 400 }} className="mb-3">
          <div className="mt-2 mb-2 text-white px-2">
            Home
          </div>
          <div style={{ borderRadius: 10 }} className='bg-light p-4'>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-wallet2' title='My Wallet'
                content11='Balance' content12='R 1 235.25' content21='Available' content22='R 1 034.24' />
            </div>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-credit-card' title='My Virtual Card'
                content11='Balance' content12='R 1 235.25' content21='Available' content22='R 1 034.24' />
            </div>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-qr-code' title='Pay a QR Code' />
            </div>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-cash-stack' title='Get Paid with your QR code' />
            </div>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-cash' title='Make an EFT' />
            </div>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-cart4' title='Buy Airtime, Data or Electricity' />
            </div>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-file-earmark-ruled' title='Pay a Bill' />
            </div>
            <div className="d-flex justify-content-center">
              <HomeCardComponent icon='bi-clock-history' title='Transaction History' />
            </div>
            <div className="d-flex justify-content-center">
              <ButtonDashBoder />
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default HomePage;