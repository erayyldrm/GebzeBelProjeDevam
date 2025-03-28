import {Route, Routes} from "react-router-dom";
import React from "react";
import Eskibaskanlar from "./components/kurumsal/eskibaskanlar.tsx";
import ManagementChart from "./components/kurumsal/yonetimsemasi.tsx";
import BaskanPage from "./components/kurumsal/vizyon_2.tsx";
import Misyon from "./components/kurumsal/misyon_2.tsx";
import İlkelerimiz from "./components/kurumsal/ilkelerimiz_2.tsx";
import MudurTest from "./components/kurumsal/mudurlukler/_Mudurler.tsx";
import Arabuluculuk from "./components/kurumsal/arabuluculuk.tsx";
import EtikKomisyonu from './components/kurumsal/etikkomisyonu.tsx';
import Baskanyardimcilari from "./components/kurumsal/baskanyardimcilari.tsx";
import Baskandanismanlari from "./components/kurumsal/baskandanismanlari.tsx";
import Baskan from "./components/kurumsal/baskan.tsx";
import BelediyeMeclisi from "./components/kurumsal/belediyemeclisi.tsx";
import Kurumsaldokuman from "./components/kurumsal/kurumsaldokuman.tsx";

const Kurumsal: React.FC = () => {


    return (
        <Routes>
            <Route path="/yonetimseması" element={<ManagementChart/>}></Route>
            <Route path="/eskibaskanlar" element={<Eskibaskanlar/>}></Route>
            <Route path="/baskan" element={<Baskan/>}/>
            <Route path="/belediyemeclisi" element={<BelediyeMeclisi/>}/>
            <Route path="/vizyon_2" element={<BaskanPage/>}/>
            <Route path="/misyon_2" element={<Misyon/>}/>
            <Route path="/ilkelerimiz_2" element={<İlkelerimiz/>}/>
            <Route path="/arabuluculuk" element={<Arabuluculuk/>}/>
            <Route path="/baskanyardimcilari" element={<Baskanyardimcilari/>}/>
            <Route path="/baskandanismanlari" element={<Baskandanismanlari/>}/>
            <Route path="/etikkomisyonu" element={<EtikKomisyonu/>}/>
            <Route path="/mudurlukler" element={<MudurTest/>}/>
            <Route path="/arabuluculuk" element={<Arabuluculuk/>}/>
            <Route path="/baskanyardimcilari" element={<Baskanyardimcilari/>}/>
            <Route path="/baskandanismanlari" element={<Baskandanismanlari/>}/>
            <Route path="/etikkomisyonu" element={<EtikKomisyonu/>}/>
            <Route path="/kurumsaldokuman" element={<Kurumsaldokuman/>}/>

        </Routes>
    )

}
export default Kurumsal;