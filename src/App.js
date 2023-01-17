import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import AboutUsPage from './pages/AboutUsPage';
// import LandingPage from './pages/LandingPage';
// import MainLayout from './pages/MainLayout';
// import CoursesPage from './pages/CoursesPage';
// import CourseMainPage from './pages/courses/CourseMainPage';
// import OnlineCoursePage from './pages/courses/OnlineCoursePage';
// import OnlineCourseDetailPage from './pages/courses/OnlineCourseDetailPage'
// import CourseProgressPage from './pages/courses/CourseProgressPage'
// import SignInPage from './pages/SignInPage';
// import ContactUs from './pages/ContactUsPage'
// import DonationPage from './pages/donations/DonationPage'
// import UpcomingPage from './pages/donations/UpcomingPage'
// import PaymentPage from './pages/donations/PaymentPage'
// import DashboardLayout from './layout/DashboardLayout';
// import Home from './pages/dashboard/home';
// import Classroom from './pages/dashboard/classroom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css'

import SignupPage from './pages/Tenet/SignupPage'
import LoginPage from './pages/Tenet/LoginPage';
import MyWalletPage from './pages/Tenet/MyWalletPage';
import ResetPasswordPage from './pages/Tenet/ResetPasswordPage';
import HomePage from './pages/Tenet/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/signup" element={ <SignupPage /> }/>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route path="/my_wallet" element={ <MyWalletPage /> }/>
        <Route path="/reset_password" element={ <ResetPasswordPage /> }/>

        {/* <Route path="/" element={ <LandingPage /> }/>

        <Route path='/ty' element={ <MainLayout /> }>
          <Route path="about" element={ <AboutUsPage /> } />
          <Route path="courses" element={ <CoursesPage /> }>
            <Route path="main" element={ <CourseMainPage /> }/>
            <Route path="online" element={ <OnlineCoursePage /> } />            
          </Route>
          <Route path="courses_detail" element={ <OnlineCourseDetailPage /> } />
          <Route path="courses_progress" element={ <CourseProgressPage /> } />
          <Route path="library" element={ <></> } />
          <Route path="contactus" element={ <ContactUs /> } />          
        </Route>
        <Route path="/donations" element={ <DonationPage /> } >
          <Route path="payment" element={ <PaymentPage /> } />
          <Route path="upcomings" element={ <UpcomingPage /> } />
        </Route>
        <Route path="/signin" element={ <SignInPage /> } />
        <Route
          path="/dashboard"
          element={<DashboardLayout/>}
        >
          <Route path="" element={<Home/>}/>
          <Route path="classroom" element={<Classroom/>}/>
          <Route path="playlist" element={<></>}/>
          <Route path="library" element={<></>}/>
          <Route path="community" element={<></>}/>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
