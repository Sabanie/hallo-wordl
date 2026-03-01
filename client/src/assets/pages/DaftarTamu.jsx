import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DaftarTamu() {
  const [dataGuests, setDataGuests] = useState([]);

  // get data

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/getData");
      console.log(data.data);
      setDataGuests(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className=' container mt-5' id='daftar_tamu'>
        <h2 className=' text-center'>
          <i>Daftar Tamu</i>
        </h2>
        <table className=' table table-striped'>
          <thead>
            <tr className=' text-center  '>
              <th>No.</th>
              <th>Nama</th>
              <th>Perusahaan</th>
              <th>No.Pol.</th>
              <th>Keperluan</th>
              <th>Pic</th>
              <th>Identitas</th>
              <th>Jam Masuk</th>
              <th>Jam Keluar </th>
            </tr>
          </thead>
          <tbody className=' text-center'>
            {dataGuests.map((data, i) => {
              let wib = new Date(data.jam_masuk);
              return (
                <tr key={data._id} className=''>
                  <td className=''>{i + 1}</td>
                  <td className=' border-1'>{data.nama}</td>
                  <td className=' border-1'>{data.perusahaan}</td>
                  <td className=' border-1'>{data.no_pol}</td>
                  <td className=' border-1'>{data.keperluan}</td>
                  <td className=' border-1'>{data.pic}</td>
                  <td className=' border-1'>{data.identitas}</td>
                  <td className=' border-1'>
                    {wib.toLocaleString("id-ID", {
                      weekday: "long",
                      year: "2-digit",
                      month: "2-digit",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </td>
                  <td className=' border-1'>
                    {data.jam_keluar == null ? (
                      <Link to={`/guest/editData/${data._id}`}>
                        <i
                          className='fa-solid fa-pen-to-square'
                          title='keluar'></i>
                      </Link>
                    ) : (
                      new Date(data.jam_keluar).toLocaleString("id-ID", {
                        weekday: "long",
                        year: "2-digit",
                        month: "2-digit",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DaftarTamu;
