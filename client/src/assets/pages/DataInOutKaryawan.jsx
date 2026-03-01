import React, { useState } from "react";
import { regexName, regexnopol } from "../index";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function DataInOutKaryawan() {
  const [nama, setNama] = useState("");
  const [errorName, setErrorName] = useState("");
  const [no_pol1, setNo_pol1] = useState("");
  const [no_pol2, setNo_pol2] = useState("");
  const [errorNopol1, setErrorNopol1] = useState("");
  const [errorNopol2, setErrorNopol2] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/employe/tambahData",
        {
          nama,
          no_pol1,
          no_pol2,
        }
      );
      console.log(response);
      toast.success(`${nama} dengan No.pol:${no_pol1} berhasil di tambahkan!`);
      navigate("/employee/dataNopolKaryawan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=' container w-75 vh-100 mb-5' id='in_out_karyawan'>
      <h3 className=' text-center mt-3'>
        {" "}
        <i>Tambah Data No.Pol Karyawan</i>
      </h3>
      <form
        onSubmit={handleSubmit}
        className=' d-flex flex-column align-content-center'>
        <div className=' form-floating mb-2 mt-2'>
          <input
            type='text'
            className='form-control'
            id='nama'
            value={nama}
            required
            onChange={(e) => {
              const value = e.target.value;
              setNama(value.toUpperCase());
              const regex = regexName;
              if (!regex.test(value)) {
                setErrorName("Nama yang anda masukan terlalu pendek");
                setDisableButton(true);
              } else {
                setErrorName("");
                setDisableButton(false);
              }
            }}
          />
          <label
            htmlFor='nama'
            className='d-flex flex-row justify-content-around'>
            Nama Karyawan
          </label>
          {errorName && <p style={{ color: "red" }}>{errorName}</p>}
        </div>
        <div className=' form-floating mb-2 mt-2'>
          <input
            type='text'
            className='form-control'
            id='nopol'
            value={no_pol1}
            required
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              setNo_pol1(value);
              const regex = regexnopol;
              if (!regex.test(value)) {
                setErrorNopol1("No.POLISI yang anda masukan tidak valid!");
                setDisableButton(true);
              } else {
                setErrorNopol1(" ");
                setDisableButton(false);
              }
            }}
          />
          <label htmlFor='nopol'>No.Pol.kendaraan ke 1</label>
          {errorNopol1 && <p style={{ color: "red" }}>{errorNopol1}</p>}
        </div>
        <div className=' form-floating mb-2 mt-2'>
          <input
            type='text'
            className='form-control'
            id='nopol'
            value={no_pol2}
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              setNo_pol2(value);
              const regex = regexnopol;
              if (!regex.test(value)) {
                setErrorNopol2("No.POLISI yang anda masukan tidak valid!");
                setDisableButton(true);
              } else {
                setErrorNopol2(" ");
                setDisableButton(false);
              }
            }}
          />
          <label htmlFor='nopol'>No.Pol.kendaraan ke 2</label>
          {errorNopol2 && <p style={{ color: "red" }}>{errorNopol2}</p>}
        </div>
        <div className=' d-flex flex-row justify-content-between'>
          <button
            type='submit'
            className={
              disableButton || !nama || !no_pol1
                ? "disabled btn btn-outline-primary w-50 mx-auto mb-2 mt-5"
                : " btn btn-outline-primary w-50 mx-auto mb-2 mt-5"
            }>
            Input
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataInOutKaryawan;
