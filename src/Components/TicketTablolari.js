import React from 'react'
import {Table} from 'react-bootstrap'

const TicketTablolari = ({ornek}) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th style={{width:"10%"}}>Ticket ID</th>
                <th style={{width:"50%"}}>Konu</th>
                <th style={{width:"20%"}}>Gönderim Tarihi</th>
                <th style={{width:"20%"}}>Ticket Durumu</th>
                </tr>
            </thead>

            <tbody>
            {ornek.length ? 
                ornek.map((row)=> (
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.konu}</td>
                <td>{row.tarih}</td>
                <td>{row.durum}</td>
                </tr>
                )) :
            <tr>
                <td colSpan="4" className="text-center">Gönderilmiş Ticket Bulunmamaktadır!</td>
            </tr>
            }

                


            </tbody>
            </Table>
    )
}
export default TicketTablolari;