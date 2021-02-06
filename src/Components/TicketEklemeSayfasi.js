import React, {useState} from 'react'
import TicketEklemeFormu from './TicketEklemeFormu'

const formVerisi = {
    konu:"",
    aciklama:""
};

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


const TicketEklemeSayfasi = () => {

    const [formVeri, setFormVeri] = useState(formVerisi);

    const handleOnChange = (e) =>{
        const {name,value} = e.target;

        setFormVeri({
            ...formVeri,
            [name]: value,
        })

    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        console.log("Form Gönderildi.",formVeri);
        console.log({date});
    };

    return (
        <div>
            <TicketEklemeFormu 
            handleOnChange={handleOnChange} 
            handleOnSubmit={handleOnSubmit} 
            frmVeri = {formVeri}
            />
        </div>
    )
}
export default TicketEklemeSayfasi;