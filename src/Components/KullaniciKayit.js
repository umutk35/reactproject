import React from 'react';
import {Container,Form,Button,Row,Col,FormGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'

const KullaniciKayit = ( {handleOnChange, kullaniciAd, sifre, ad, soyad, handleOnRecordSubmit, formDegistir } ) => {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h2 className="text-center">Kaydol</h2> <hr/>
                        <Form onSubmit= {handleOnRecordSubmit}>
                        <Form.Row>
                        <FormGroup as={Col} controlId="formGroupAd">
                                <Form.Label>Adınız</Form.Label>
                                <Form.Control
                                    type="username"
                                    name="adi"
                                    placeholder="Adınızı Giriniz..."
                                    onChange = {handleOnChange}
                                    value = {ad}
                                    required/>
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGroupSoyad">
                                <Form.Label>Soyadınız</Form.Label>
                                <Form.Control
                                    type="username"
                                    name="soyadi"
                                    placeholder="Soyadınızı Giriniz..."
                                    onChange = {handleOnChange}
                                    value = {soyad}
                                    required/>
                            </FormGroup>
                        </Form.Row>

                        <Form.Row>
                            <FormGroup as={Col} controlId="formGroupKullanıcıAdi">
                                <Form.Label>Kullanıcı Adı</Form.Label>
                                <Form.Control
                                    type="username"
                                    name="kullaniciAdi"
                                    placeholder="Kullanıcı Adı Giriniz..."
                                    onChange = {handleOnChange}
                                    value = {kullaniciAd}
                                    required/>
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGroupParola">
                                <Form.Label>Şifre</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="parola"
                                    placeholder="Şifre Giriniz..."
                                    onChange = {handleOnChange}
                                    value = {sifre}
                                    required/>
                            </FormGroup>
                            </Form.Row>
                            <hr/><br/>
                            <div className="kayitGiris">
                                <div className="block block-left"> <a href="#!" onClick={()=>formDegistir("giris")}>Geri Dön</a> </div>
                                <div className="block block-right"><Button type="submit" >Kayıt Ol</Button></div>
                            </div> 
                            
                        </Form>
                      
                        </Col>
                    </Row>
                 
                </Container>
               
            </div>
        )
    }

KullaniciKayit.propTypes ={
    kullaniciAd: PropTypes.string.isRequired,
    sifre: PropTypes.string.isRequired,
    ad: PropTypes.string.isRequired,
    soyad: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnRecordSubmit: PropTypes.func.isRequired,
    formDegistir: PropTypes.func.isRequired
}

export default KullaniciKayit;
