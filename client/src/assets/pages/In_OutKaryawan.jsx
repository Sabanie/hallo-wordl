import axios from "axios";
import React, { useEffect, useState } from "react";
import { regexSearch } from "../index";

function In_OutKaryawan() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleChange = async (e) => {
    try {
      setValue(e.target.value);
      const { data } = await axios.get(
        "http://localhost:3000/employe/ambilSemuaData"
      );
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div
      className=' container w-75 mb-5 mt-5 d-flex flex-column justify-content-center'
      id='form_registrasi'>
      <div>
        <h3 className=' text-center mt-3'>
          <i>
            <strong>IN OUT Karyawan</strong>
          </i>
        </h3>
      </div>
      <div className=' form-floating mb-2 mt-2 mx-auto '>
        <input
          type='search'
          className='form-control border-opacity-50 border-primary mx-auto'
          id='search'
          value={value}
          name='search'
          onChange={(e) => {
            const value = e.target.value;
            setValue(value.toUpperCase());
          }}
        />
        <label htmlFor='search'>Cari Karyawan </label>
      </div>
    </div>
  );
}

export default In_OutKaryawan;
