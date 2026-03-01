import React, { useState } from "react";
import { regexnopol, regexnohp, regexName, regexCompany } from "../index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Registrasi() {
  const [nama, setNama] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [no_hp, setNo_hp] = useState("");
  const [no_pol, setNo_pol] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pic, setPic] = useState("");
  const [identitas, setIdentitas] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorNopol, setErrorNopol] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorCompany, setErrorCompany] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [jam_masuk, setJam_masuk] = useState("");
  const [jam_keluar, setJam_keluar] = useState(null);
  const [jenis_barang, setJenisBarang] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/addData", {
        nama,
        perusahaan,
        no_hp,
        no_pol,
        keperluan,
        pic,
        identitas,
        jam_masuk,
        jam_keluar,
        jenis_barang,
        quantity,
      });
      console.log(response);
      navigate("/guest/daftartamu");
      toast.success(`ibu/bapak ${nama},silahkan masuk!!`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=' container w-75 mb-5 mx-auto' id='form_registrasi'>
        <h3 className=' text-center mt-3'>
          <i>Registrasi Masuk Tamu</i>
        </h3>
        <form
          onSubmit={handleSubmit}
          className=' d-flex flex-column align-content-center mx-auto'
          style={{ maxWidth: 400 }}>
          <div className=' form-floating mb-2 mt-2'>
            <input
              type='text'
              className='form-control'
              id='nama'
              placeholder='Nama'
              value={nama}
              name='nama'
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
            <label htmlFor='nama'>Nama</label>
            {errorName && <p style={{ color: "red" }}>{errorName}</p>}
          </div>
          <div className=' form-floating mb-2 mt-2'>
            <input
              type='text'
              className='form-control'
              id='perusahaan'
              placeholder='perusahaan'
              value={perusahaan}
              name='perusahaan'
              onChange={(e) => {
                const value = e.target.value;
                setPerusahaan(value.toUpperCase());
                const regex = regexCompany;
                if (!regex.test(value)) {
                  setErrorCompany("Nama perusahaan terlalu pendek");
                  setDisableButton(true);
                } else {
                  setErrorCompany("");
                  setDisableButton(false);
                }
              }}
            />
            <label htmlFor='perusahaan'>Perusahaan</label>
            {errorCompany && <p style={{ color: "red" }}>{errorCompany}</p>}
          </div>
          <div className=' form-floating mb-2 mt-2'>
            <input
              type='number'
              className='form-control'
              id='no_hp'
              placeholder='No.HP'
              value={no_hp}
              name='no_hp'
              onChange={(e) => {
                const value = e.target.value;
                setNo_hp(value);
                const regex = regexnohp;
                if (!regex.test(value)) {
                  setErrorPhone("No.HP yang anda masukan tidak valid!");
                  setDisableButton(true);
                } else {
                  setErrorPhone(" ");
                  setDisableButton(false);
                }
              }}
            />
            <label htmlFor='phone'>No.HP</label>
            {errorPhone && <p style={{ color: "red" }}>{errorPhone}</p>}
          </div>
          <div className=' form-floating mb-2 mt-2'>
            <input
              type='text'
              className='form-control'
              id='no_pol'
              placeholder='No.Pol. Kendaraan'
              value={no_pol}
              name='no_pol'
              onChange={(e) => {
                const value = e.target.value.toUpperCase();
                setNo_pol(value);
                const regex = regexnopol;
                if (!regex.test(value)) {
                  setErrorNopol("No.POLISI yang anda masukan tidak valid!");
                  setDisableButton(true);
                } else {
                  setErrorNopol(" ");
                  setDisableButton(false);
                }
              }}
            />
            <label htmlFor='nopol'>No.Pol.kendaraan</label>
            {errorNopol && <p style={{ color: "red" }}>{errorNopol}</p>}
          </div>
          <div>
            <label htmlFor='keperluan' className=' form-label'>
              Keperluan:
            </label>
            <select
              name='keperluan'
              id='keperluan'
              className=' form-select'
              value={keperluan}
              onChange={(e) => {
                setKeperluan(e.target.value);
              }}>
              <option value=''>...</option>
              <option value='Meeting'>Meeting</option>
              <option value='Ambil Material'>Ambil Material</option>
              <option value='Ambil Barang Non Materials'>
                Ambil Barang Non Materials
              </option>
              <option value='Kirim Material'>Kirim Material</option>
              <option value='Kirim Barang Non Material'>
                Kirim Barang Non Material
              </option>
              <option value='Proses GR'>Proses GR</option>
              <option value='Perawatan/perbaikan Utility dan Mesin'>
                Perawatan/perbaikan Utility dan Mesin
              </option>
            </select>
          </div>
          <div className=' form-floating mb-2 mt-2'>
            <input
              type='text'
              className='form-control'
              id='pic'
              placeholder='PIC'
              value={pic}
              name='pic'
              onChange={(e) => {
                setPic(e.target.value.toUpperCase());
              }}
            />
            <label htmlFor='pic'>PIC</label>
          </div>
          <div>
            <label htmlFor='identitas' className=' form-label'>
              Identitas:
            </label>
            <select
              name='identitas'
              id='identitas'
              className=' form-select'
              value={identitas}
              onChange={(e) => {
                setIdentitas(e.target.value);
              }}>
              <option value=''>...</option>
              <option value='KTP'>KTP</option>
              <option value='SIM'>SIM</option>
            </select>
          </div>

          <div className=' d-flex flex-row justify-content-between'>
            <button
              type='submit'
              onClick={() => {
                setJam_masuk(new Date());
              }}
              className={
                disableButton ||
                !nama ||
                !perusahaan ||
                !no_hp ||
                !no_pol ||
                !identitas ||
                !pic ||
                !keperluan
                  ? " disabled btn btn-outline-primary w-50 mx-auto mb-2 mt-5"
                  : "  btn btn-outline-primary w-50 mx-auto mb-2 mt-5"
              }>
              Masuk
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registrasi;
