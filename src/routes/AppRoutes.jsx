import { Routes, Route } from "react-router-dom";

import MainLayout from '../Layouts/MainLayout'

import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import AboutPage from '../Pages/AboutPage'
import ReservationPage from '../Pages/ReservationPage'
import GalleryPage from '../Pages/GalleryPage'
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>

      {/* Layout Routes */}
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />

        <Route path="menu" element={<Menu />} />

        <Route path="about" element={<AboutPage />} />

        <Route
          path="reservation"
          element={<ReservationPage />}
        />

        <Route
          path="gallery"
          element={<GalleryPage />}
        />

        <Route path="contact" element={<Contact />} />

      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;