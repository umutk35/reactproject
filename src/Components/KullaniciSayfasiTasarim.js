import React from 'react'
import KullaniciSayfasiHeader from './KullaniciSayfasiHeader'
import KullaniciSayfasiFooter from './KullaniciSayfasiFooter'

const KullaniciSayfasiTasarim = ({children}) => {
    return (
        <div className="ksTasarım">
            <header className="ksHeader">
                <KullaniciSayfasiHeader/>
            </header>

            <main className="ksMain">
                {children}
            </main>

            <footer className="ksFooter">
               <KullaniciSayfasiFooter/>
            </footer>
            
        </div>
    )
}
export default KullaniciSayfasiTasarim;