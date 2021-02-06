import React, { useState } from 'react';

import './AnasayfaStyle.css';
//import renkli from './Images/renkli.jpg'
import {Jumbotron} from 'react-bootstrap';
import KullaniciGiris from "./KullaniciGiris"
import KullaniciKayit from "./KullaniciKayit"

function Anasayfa() {

    const [kullaniciAd, setKullaniciAd] = useState("");
    const [sifre, setSifre] = useState("");
    const [ad, setAd] = useState("");
    const [soyad, setSoyad] = useState("");
    const [girisFormu, setGirisFormu] = useState("giris");

    const handleOnChange = (e) =>{
        const {name,value} = e.target;

        switch (name){
            case "kullaniciAdi":
                setKullaniciAd(value)
                break;
            case "parola":
                setSifre(value)
                break;
            case "adi":
                setAd(value)
                break;
            case "soyadi":
                setSoyad(value)
                break;      
            default:
                break;
        }
    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        console.log(kullaniciAd,sifre);
    };

    const handleOnRecordSubmit = (e) =>{
        e.preventDefault();

        console.log(ad,soyad,kullaniciAd,sifre);
    };

    const formDegistir = (frmType) =>{
        setGirisFormu(frmType);
    };
    
    return (
        <div className ="anasayfa" >
            <Jumbotron className="form"> 
              { girisFormu === "giris" && (
                 <KullaniciGiris 
                handleOnChange = {handleOnChange}
                kullaniciAd = {kullaniciAd}
                sifre = {sifre}
                handleOnSubmit = {handleOnSubmit}
                formDegistir = {formDegistir}
                />
                )}
              { girisFormu === "kayit" && (
                <KullaniciKayit 
                handleOnChange = {handleOnChange}
                ad = {ad}
                soyad = {soyad}
                kullaniciAd = {kullaniciAd}
                sifre = {sifre}
                handleOnRecordSubmit = {handleOnRecordSubmit}
                formDegistir = {formDegistir}
                /> 
               )}
            </Jumbotron>
        </div>
    )
}
export default Anasayfa;