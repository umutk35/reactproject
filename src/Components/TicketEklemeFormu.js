import React from 'react'
import {Jumbotron, Form, Button,FormGroup} from 'react-bootstrap'
import  PropTypes from 'prop-types'
import './TicketEklemeFormuStyle.css'


const TicketEklemeFormu = ({handleOnChange, handleOnSubmit, frmVeri }) => {
    
    console.log(frmVeri);
    return (
            <Jumbotron className="ticketFormu">
             <h2 className="text-center">Ticket Gönder</h2> 
            <Form autoComplete="off" onSubmit= {handleOnSubmit}>
                <hr/>
                            <FormGroup controlId="formGroupKonu">
                                <Form.Label>Konu</Form.Label>
                                 <Form.Control
                                    type="text"
                                    name="konu"
                                    placeholder="Konuyu Belirtiniz..."
                                    onChange = {handleOnChange}
                                    value = {frmVeri.konu}
                                    required/>
                            </FormGroup>

                            <FormGroup controlId="formGroupParola">
                                <Form.Label>Açıklama</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="aciklama"
                                    placeholder="Açıklama Giriniz..."
                                    onChange = {handleOnChange}
                                    value = {frmVeri.aciklama}
                                    required/>
                            </FormGroup>
                            <br/>
                            
                            <div className="gonder"><Button className="gonderButonu" type="submit">Gönder</Button></div>
                            
                            
                        </Form>
            </Jumbotron>
       
    )
}

TicketEklemeFormu.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmVeri: PropTypes.object.isRequired
}

export default TicketEklemeFormu;