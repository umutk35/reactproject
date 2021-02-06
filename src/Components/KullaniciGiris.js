import React from 'react';
import {Container,Form,Button,Row,Col,FormGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'

const KullaniciGiris = ( {handleOnChange, kullaniciAd, sifre, handleOnSubmit, formDegistir } ) => {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h2 className="text-center">Kullanıcı Girişi</h2> <hr/>
                        <Form onSubmit= {handleOnSubmit}>
                            <FormGroup controlId="formGroupKullanıcıAdi">
                                <Form.Label>Kullanıcı Adı</Form.Label>
                                <Form.Control
                                    type="username"
                                    name="kullaniciAdi"
                                    placeholder="Kullanıcı Adı Giriniz..."
                                    onChange = {handleOnChange}
                                    value = {kullaniciAd}
                                    required/>
                            </FormGroup>

                            <FormGroup controlId="formGroupParola">
                                <Form.Label>Şifre</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="parola"
                                    placeholder="Şifre Giriniz..."
                                    onChange = {handleOnChange}
                                    value = {sifre}
                                    required/>
                            </FormGroup>
                            <hr/><br/>
                            <div className="kayitGiris">
                                <div className="block block-left"> <a href="#!" onClick={()=>formDegistir("kayit")}>Kayıt Ol</a> </div>
                                <div className="block block-right"><Button type="submit" >Giriş Yap</Button></div>
                            </div> 
                            
                        </Form>
                      
                        </Col>
                    </Row>
                 
                </Container>
               
            </div>
        )
    }

KullaniciGiris.propTypes ={
    kullaniciAd: PropTypes.string.isRequired,
    sifre: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formDegistir: PropTypes.func.isRequired
}

export default KullaniciGiris;
