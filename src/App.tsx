import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProtected from "./components/AdminProtected/AdminProtected";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Register/Register";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import AddToCart from "./pages/AddToCart/AddToCart";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminBookings from "./pages/AdminBookings/AdminBookings";
import AdminCars from "./pages/AdminCars/AdminCars";
import AdminInstructor from "./pages/AdminInstructor/AdminInstructor";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import BookingInformation from "./pages/BookingInformation/BookingInformation";
import BookingPage from "./pages/BookingPage/BookingPage";
import BookingSuccess from "./pages/BookingSuccess/BookingSuccess";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Homepage from "./pages/Homepage/Homepage";
import InstructorDashboard from "./pages/InstructorDashboard/InstructorDashboard";
import InstructorList from "./pages/InstructorList/InstructorList";
import InstructorLogin from "./pages/InstructorLogin/InstructorLogin";
import InstructorProfile from "./pages/InstructorProfile/InstructorProfile";
import LearnerDashboard from "./pages/LearnerDashboard/LearnerDashboard";
import Login from "./pages/Login/Login";
import PasswordResetPage from "./pages/PasswordResetPage/PasswordResetPage";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import ViewItemsPage from "./pages/ViewItemsPage";

// stripe Promise

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<PasswordResetPage />} />
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
        <Route path="/instructor-profile/:id" element={<InstructorProfile />} />
        <Route
          path="/add-cart"
          element={
            <ProtectedRoute location={"/add-cart"}>
              <AddToCart />
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
          path={"/admin/user/:id"}
          element={
            <AdminProtected location={"/admin/user/:id"}>
              <ViewItemsPage type={"user"} />
            </AdminProtected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
