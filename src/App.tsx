import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { client } from "./client";
import AddInstructor from "./components/AddInstructor/AddInstructor";
import AdminChat from "./components/AdminChat/AdminChat";
import AdminProtected from "./components/AdminProtected/AdminProtected";
import Chat from "./components/Chat/Chat";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Register/Register";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import AddToCart from "./pages/AddToCart/AddToCart";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminApplicants from "./pages/AdminApplicantsInstructor/AdminApplicants";
import AdminBookings from "./pages/AdminBookings/AdminBookings";
import AdminCars from "./pages/AdminCars/AdminCars";
import AdminExpiredInstructor from "./pages/AdminExpiredUser/AdminExpiredUser";
import AdminInstructor from "./pages/AdminInstructor/AdminInstructor";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminSuburbs from "./pages/AdminSuburbs/AdminSuburbs";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import ApplyInstructor from "./pages/ApplyInstructor/ApplyInstructor";
import BookingInformation from "./pages/BookingInformation/BookingInformation";
import BookingPage from "./pages/BookingPage/BookingPage";
import BookingSuccess from "./pages/BookingSuccess/BookingSuccess";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import GiftcardCheckout from "./pages/GiftCardCheckout/GiftcardCheckout";
import GiftCardPage from "./pages/GiftCardPage/GiftCardPage";
import GiftcardSuccess from "./pages/GiftCardSuccess/GiftcardSuccess";
import Homepage from "./pages/Homepage/Homepage";
import InstructorDashboard from "./pages/InstructorDashboard/InstructorDashboard";
import InstructorList from "./pages/InstructorList/InstructorList";
import InstructorLogin from "./pages/InstructorLogin/InstructorLogin";
import InstructorProfile from "./pages/InstructorProfile/InstructorProfile";
import LearnerDashboard from "./pages/LearnerDashboard/LearnerDashboard";
import LiveChat from "./pages/LiveChat/LiveChat";
import Login from "./pages/Login/Login";
import PasswordResetPage from "./pages/PasswordResetPage/PasswordResetPage";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondtion/TermsAndCondition";
import ViewItemsPage from "./pages/ViewItemsPage";
import { SET_LESSON_PRICE } from "./redux/reducer/reduxNamings";
import { State } from "./typings/reduxTypings";

// stripe Promise
const title = {
  test_package: "Where Do You Want To Book Your Test Package?",
  pricing: "Check Pricing of Your Nearby Instructors",
  driving_lesson: "Where Do You Need A Driving Lesson?",
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getLessonPrices();
  }, []);

  const getLessonPrices = async () => {
    const { data } = await client.get("/lesson-price");
    dispatch({ type: SET_LESSON_PRICE, payload: data?.price });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/apply-instructor" element={<ApplyInstructor />} />
          <Route
            path="/driving-lessons"
            element={<Homepage title={title.driving_lesson} />}
          />
          <Route path="/driving-lessons/:city" element={<Homepage />} />
          <Route
            path="/test-package"
            element={<Homepage title={title.test_package} />}
          />
          <Route path="/pricing" element={<Homepage title={title.pricing} />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/reset-password/:token"
            element={<PasswordResetPage />}
          />
          <Route
            path="/reset-password/instructor/:token"
            element={<PasswordResetPage instructor />}
          />
          <Route
            path="/forget-password/instructor"
            element={<ForgetPassword instructor={true} />}
          />
          <Route path="/login" element={<Login instructor={false} />} />
          <Route path="/instructor-login" element={<InstructorLogin />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/instructors-list/:postCode/:transmission/:suburb"
            element={<InstructorList />}
          />
          <Route
            path="/instructor-profile/:id"
            element={<InstructorProfile />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms/instructor" element={<TermsAndCondition />} />
          <Route
            path="/terms/learner"
            element={<TermsAndCondition learner />}
          />

          {/* protected routes */}
          <Route
            path="/add-cart"
            element={
              <ProtectedRoute location={"/add-cart"}>
                <AddToCart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gift-card"
            element={
              <ProtectedRoute location={"/add-cart"}>
                <GiftCardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute location={"/checkout"}>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gift-checkout"
            element={
              <ProtectedRoute location={"/gift-checkout"}>
                <GiftcardCheckout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <ProtectedRoute location={"/booking"}>
                <BookingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking-info"
            element={
              <ProtectedRoute location={"/booking-info"}>
                <BookingInformation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-success"
            element={
              <ProtectedRoute location={"/payment-success"}>
                <PaymentSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/giftcard-success"
            element={
              <ProtectedRoute location={"/giftcard-success"}>
                <GiftcardSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/livechat"
            element={
              // <ProtectedRoute location={"/livechat"}>
              <LiveChat />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/booking-success"
            element={
              <ProtectedRoute location={"/booking-success"}>
                <BookingSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learner/dashboard"
            element={
              <ProtectedRoute location={"/learner/dashboard"}>
                <LearnerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor/dashboard"
            element={
              <ProtectedRoute location={"/instructor/dashboard"}>
                <InstructorDashboard />
              </ProtectedRoute>
            }
          />

          {/* admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path={"/admin/dashboard"}
            element={
              <AdminProtected location={"/admin/dashboard"}>
                <AdminDashboard />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/users"}
            element={
              <AdminProtected location={"/admin/users"}>
                <AdminUsers />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/cars"}
            element={
              <AdminProtected location={"/admin/cars"}>
                <AdminCars />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/bookings"}
            element={
              <AdminProtected location={"/admin/bookings"}>
                <AdminBookings />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/instructors"}
            element={
              <AdminProtected location={"/admin/instructors"}>
                <AdminInstructor />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/suburbs"}
            element={
              <AdminProtected location={"/admin/suburbs"}>
                <AdminSuburbs />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/expired-instructors"}
            element={
              <AdminProtected location={"/admin/expired-instructors"}>
                <AdminExpiredInstructor />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/add-instructor"}
            element={
              <AdminProtected location={"/admin/add-instructor"}>
                <AddInstructor />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/instructor-applicants"}
            element={
              <AdminProtected location={"/admin/instructor-applicants"}>
                <AdminApplicants />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/user/:id"}
            element={
              <AdminProtected location={"/admin/user/:id"}>
                <ViewItemsPage type={"user"} />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/instructor/:id"}
            element={
              <AdminProtected location={"/admin/instructor/:id"}>
                <ViewItemsPage type={"instructor"} />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/booking/:id"}
            element={
              <AdminProtected location={"/admin/booking/:id"}>
                <ViewItemsPage type={"booking"} />
              </AdminProtected>
            }
          />
          <Route
            path={"/admin/chat"}
            element={
              <AdminProtected location={"/admin/chat"}>
                <AdminChat />
              </AdminProtected>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
