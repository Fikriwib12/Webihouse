import React from 'react'
import {Accordion } from 'react-bootstrap'

const Question = () => {
  return (
    <div>
         <Accordion  style={{width:'400px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tips Membeli Rumah</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Lakukan survey Lokasi</li>
            <li>Datangi Kantor Pemasaran</li>
            <li>Ketahui status kepemilikan rumah</li>
            <li>Bandingkan harga dan fasilitas</li>
         </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bagaimana cara mebeli dan menyewa ruamh di webihouse?</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Pilih rumah yang anda mau di menu unit list</li>
            <li>Hubungi kontak yang ada di halaman detail rumah</li>
            <li>Lakukan Perjanjian dengan pemilik rumah</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Bagaimana jika terindikasi adanya penipuan atau tindak kriminal lainnya?</Accordion.Header>
        <Accordion.Body>
         Segera laporkan unit rumah di kontak kami. klik menu contact us dan akan diarahkan ke whatsapp tim kami. Kami mempriotaskan kenyamanan anda
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Question