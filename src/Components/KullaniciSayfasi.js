import React from 'react'
import {Container,Button,Row,Col} from 'react-bootstrap'
import TicketTablolari from './TicketTablolari'

import ornek from './ornek-ticketlar'

const KullaniciSayfasi = () => {
    return (
        <Container className="ml-5">
            <Row>
                <Col className="text-left mt-4 mb-2" >
                <Button variant="danger">Ticket Ekle</Button>
                </Col>
            </Row>

            <Row>
                <Col className="mt-4 mb-2" >
                <h4 className="text-center"style={{color: "Sienna", fontWeight: "bold"}}>Eklenen Ticketlar</h4>
                </Col>
            </Row>

            <Row>
                <Col className="mt-2 mb-2" >
                <TicketTablolari ornek={ornek} />
                </Col>
            </Row>


        </Container>
    )
}
export default KullaniciSayfasi;