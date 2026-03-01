import React from "react";
import { Modal, Button } from "react-bootstrap";

function Modals(props) {
  const nama = props.nama;
  const perusahaan = props.perusahaan;
  return (
    <div>
      {" "}
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header
          closeButton
          className=' d-flex flex-column justify-content-center'>
          <Modal.Title
            id='contained-modal-title-vcenter'
            className=' text-center'>
            Selamat Datang Bpk/Ibu:
            <h1>
              <i>{nama}</i>
            </h1>{" "}
            dari PT.{" "}
            <h3>
              <i>{perusahaan}</i>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <h4 className=' text-center'>Ketentuan Umum</h4>
            <li>
              {" "}
              <p>
                Memakai kartu identitas diri sesuai yang di berikan oleh
                security.{" "}
              </p>
            </li>
            <li>
              {" "}
              <p>
                Patuhilah tanda di larang merokok,Merokok di ijinkan di area
                yang telah di tentukan.{" "}
              </p>
            </li>
            <li>
              {" "}
              <p>
                Buanglah sampah pada tempatnya,jagalah kebersihan,tidak merusak
                fasilitas perusahaan.{" "}
              </p>
            </li>
            <li>
              {" "}
              <p>Di larang memasuki area terbatas tanpa ijin komite LK3. </p>
            </li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modals;
