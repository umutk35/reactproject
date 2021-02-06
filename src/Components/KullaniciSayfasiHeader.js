import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from './Images/deufen.png'

import KullaniciSayfasi from './KullaniciSayfasi'

const KullaniciSayfasiHeader = () => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="#home" onClick={KullaniciSayfasi}>
                <img
                    src={logo}
                    width="40px"
                    height="40px"
                    alt="logo"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <h4 className="headerYazi">Kullanıcı Sayfası</h4>
        </Navbar>
    )
}

export default KullaniciSayfasiHeader;