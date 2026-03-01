import React from "react";
import DataInOutKaryawan from "./assets/pages/DataInOutKaryawan";
import Registrasi from "./assets/pages/Registrasi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DaftarTamu from "./assets/pages/DaftarTamu";
import NavbarComponent from "./assets/components/NavbarComponent";
import UpDate from "./assets/pages/UpDate";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import DataNoPolKaryawan from "./assets/pages/DataNoPolKaryawan";
import EditDataNopolKrywn from "./assets/pages/EditDataNopolKrywn";
import In_OutKaryawan from "./assets/pages/In_OutKaryawan";
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/guest/registrasi' element={<Registrasi />} />
          <Route path='/guest/daftartamu' element={<DaftarTamu />} />
          <Route
            path='/employee/datainoutkaryawan'
            element={<DataInOutKaryawan />}
          />
          <Route path='/guest/editData/:id' element={<UpDate />} />
          <Route
            path='/employee/dataNopolKaryawan'
            element={<DataNoPolKaryawan />}
          />
          <Route
            path='/employee/EditDataNopolKaryawan/:id'
            element={<EditDataNopolKrywn />}
          />
          <Route path='/employee/inoutkaryawan' element={<In_OutKaryawan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
