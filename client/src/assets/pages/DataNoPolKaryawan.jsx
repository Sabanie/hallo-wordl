import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function DataNoPolKaryawan() {
  const [dataNopolKaryawan, setDataNopolKaryawan] = useState([]);

  //   Ambil semua data
  const getAllData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/employe/ambilSemuaData"
      );
      console.log(data.data);
      setDataNopolKaryawan(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  // Hapus Data
  const hapusData = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/employe/hapusData/${id}`
      );
      console.log(response);
      toast.success("Data berhasil di hapus!");
      getAllData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=' container mt-5' id='daftar_tamu'>
      <h2 className=' text-center'>
        <i>Daftar No.POL Karyawan</i>
      </h2>
      <table className=' table table-striped'>
        <thead className=' text-center'>
          <tr className=' text-center  border-1'>
            <th className=' border-1'>No.</th>
            <th className=' border-1'>Nama</th>
            <th className=' border-1'>No.Pol Kendaraan ke 1</th>
            <th className=' border-1'>No.Pol Kendaraan ke 2</th>
          </tr>
        </thead>
        <tbody className=' text-center'>
          {dataNopolKaryawan.map((data, i) => {
            return (
              <tr key={data._id}>
                <td className=' border-1'>{i + 1}</td>
                <td className=' border-1'>{data.nama}</td>
                <td className=' border-1'>{data.no_pol1}</td>
                <td className=' border-1'>{data.no_pol2}</td>
                <td className=' border-1'>
                  <Link to={`/employee/EditDataNopolKaryawan/${data._id}`}>
                    <i
                      className='fa-solid fa-pen-to-square mx-2'
                      title='edit'></i>
                  </Link>
                  <i
                    className='fa-solid fa-trash mx-2'
                    title='hapus'
                    onClick={() => {
                      confirm("Apa Anda yakin akan menghapus 1 data?")
                        ? hapusData(data._id)
                        : "";
                    }}></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataNoPolKaryawan;
