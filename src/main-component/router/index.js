import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ServicePage from "../ServicePage";
import ServiceSingle from "../ServiceDetails";
import CarListingPage from "../CarListingPage";
import CarBookingPage from "../CarBookingPage";
import CarDetailsPage from "../CarDetailsPage";
import CategoryCarsPage from "../CategoryCarsPage";
import GalleryPage from "../GalleryPage";
import ProductPage from "../ProductPage";
import ProductSinglePage from "../ProductSingle";
import CartPage from "../CartPage";
import Checkout from "../Checkout";
import BlogPage from "../BlogPage";
import BlogSinglePage from "../BlogSinglePage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import ForgotPasswordPage from "../ForgotPasswordPage";
import DashboardPage from "../DashboardPage";
import RegisterPage from "../RegisterPage";
import ContactPage from "../ContactPage";
import MakeBookings from "../MakeBookings";
import UserBookings from "../UserBookings";
import Favourites from "../Favourites";
import UserProfile from "../UserProfile";
import TermsNdConditions from "../Terms&ConditionsPage"
import VerifyCode from "../VerifyCodePage"
import ResetPassword from '../ResetPasswordPage'

const AllRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/service-single" element={<ServiceSingle />} />
          <Route path="/cars" element={<CarListingPage />} />
          <Route path="/car-booking" element={<CarBookingPage />} />
          <Route path="/car-details" element={<CarDetailsPage />} />
          <Route path="/category-cars" element={<CategoryCarsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-single" element={<ProductSinglePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-single" element={<BlogSinglePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-code" element = {<VerifyCode />} />
          <Route path="/reset-password" element = {<ResetPassword />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/make-bookings" element={<MakeBookings />} />
          <Route path="/user-bookings" element={<UserBookings />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/user-profile" element={<UserProfile />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route element={<ErrorPage />} />
          <Route path="/terms-and-conditions" element={<TermsNdConditions />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
