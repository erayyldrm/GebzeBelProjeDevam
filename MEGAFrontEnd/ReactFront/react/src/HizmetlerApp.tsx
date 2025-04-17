import {Route, Routes} from "react-router-dom";
import React from "react";
import Atolyeler from "./components/hizmetler/atolyeler.tsx";
import Evlendirme from "./components/hizmetler/evlendirme.tsx";
import Gures from "./components/hizmetler/gures.tsx";
import GeriDonusum from "./components/hizmetler/geri-donusum.tsx";
import Kutuphane from "./components/hizmetler/kutuphane.tsx";
import Merkezler from "./components/hizmetler/merkezler.tsx";
import Mesirealani from "./components/hizmetler/mesirealani.tsx";
import Guzide from "./components/hizmetler/atolyeler/guzide.tsx";
import Genclik from "./components/hizmetler/atolyeler/gençlik.tsx";
import Sportif from "./components/hizmetler/atolyeler/sportif.tsx";
import Enderunokulları from "./components/hizmetler/atolyeler/enderun.tsx";
import Bakimevi from "./components/hizmetler/bakimevi.tsx"
import Egitimler from "./components/hizmetler/egitimler.tsx"




const HizmetlerApp: React.FC =() => {

    return (
        <Routes>
            <Route path="/atolyeler" element={<Atolyeler/>}/>
            <Route path="atolyeler/guzide" element={<Guzide/>}/>
            <Route path="atolyeler/genclik" element={<Genclik/>}/>
            <Route path="/bakimevi" element={<Bakimevi/>}/>
            <Route path="/egitimler" element={<Egitimler/>}/>
            <Route path="atolyeler/sportif" element={<Sportif/>}/>
            <Route path="atolyeler/enderun" element={<Enderunokulları/>}/>
            <Route path="/evlendirme" element={<Evlendirme/>}/>
            <Route path="/gures" element={<Gures/>}/>
            <Route path="/geridonusum" element={<GeriDonusum/>}/>
            <Route path="/kutuphane" element={<Kutuphane/>}/>
            <Route path="/merkezler" element={<Merkezler/>}/>
            <Route path="/mesirealani" element={<Mesirealani/>}/>


        </Routes>
    );

}
export default HizmetlerApp