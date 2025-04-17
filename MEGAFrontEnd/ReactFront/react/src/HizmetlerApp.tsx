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
import Enderunokulları from "./components/hizmetler/atolyeler/enderun.tsx";
import Bakimevi from "./components/hizmetler/bakimevi.tsx"
import Egitimler from "./components/hizmetler/egitimler.tsx"
import Bebekbakim from "./components/hizmetler/bebekbakım/bebekbakim.tsx";
import Fitness from "./components/hizmetler/egitimler/fitness.tsx";
import Genc from "./components/hizmetler/egitimler/genc.tsx";
import Tercih from "./components/hizmetler/egitimler/tercih.tsx";
import Yaz from "./components/hizmetler/egitimler/yaz.tsx";
import Aerobic from "./components/hizmetler/egitimler/Aerobic.tsx";





const HizmetlerApp: React.FC =() => {

    return (
        <Routes>
            <Route path="/atolyeler" element={<Atolyeler/>}/>
            <Route path="/atolyeler/guzide" element={<Guzide/>}/>
            <Route path="/atolyeler/genclik" element={<Genclik/>}/>
            <Route path="/bakimevi" element={<Bakimevi/>}/>
            <Route path="/bebekbakım/bebekbakim" element={<Bebekbakim/>}/>
            <Route path="/egitimler" element={<Egitimler/>}/>
            <Route path="/egitimler/fitness" element={<Fitness/>}/>
            <Route path="/egitimler/genc" element={<Genc/>}/>
            <Route path="/egitimler/Aerobic" element={<Aerobic/>}/>
            <Route path="/egitimler/tercih" element={<Tercih/>}/>
            <Route path="/egitimler/yaz" element={<Yaz/>}/>
            <Route path="/atolyeler/enderun" element={<Enderunokulları/>}/>
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