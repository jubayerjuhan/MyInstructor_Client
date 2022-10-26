import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Register/Register";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import AddToCart from "./pages/AddToCart/AddToCart";
import BookingInformation from "./pages/BookingInformation/BookingInformation";
import BookingPage from "./pages/BookingPage/BookingPage";
import BookingSuccess from "./pages/BookingSuccess/BookingSuccess";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Homepage from "./pages/Homepage/Homepage";
import InstructorList from "./pages/InstructorList/InstructorList";
import InstructorProfile from "./pages/InstructorProfile/InstructorProfile";
import Login from "./pages/Login/Login";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";

// stripe Promise

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
