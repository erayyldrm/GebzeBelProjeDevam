import {Route, Routes} from "react-router-dom";
import KardesSehirler from "./components/gebze/kardessehirler.tsx";
import Muhtarlar from "./components/gebze/muhtarlar.tsx";
import Tarihce from "./components/gebze/tarihce.tsx";
import Fotoğraflarla from "./components/gebze/fotolarla.tsx";
import BugunkuGebze from "./components/gebze/bugunkugebze.tsx";
import React from "react";
import Gallarytest from "./components/gebze/gallarytest.tsx";
import UyeOldugumuzBirlikler from "./components/gebze/uyeoldugumuzbirlikler.tsx";
import SanalTur from "./components/gebze/360sanaltur.tsx";
import HanibalAniti from "./components/gebze/tarihiyerler/anibalinmezari.tsx";
import Ballikayalar from "./components/gebze/tarihiyerler/ballikayalar.tsx";
import Külliyesi from  "./components/gebze/tarihiyerler/külliyesi.tsx";
import Hamam from "./components/gebze/tarihiyerler/hamami.tsx";
import Sadırvani from "./components/gebze/tarihiyerler/sadirvani.tsx";
import Cesmesi from "./components/gebze/tarihiyerler/cesmesi.tsx";
import Kalesi from "./components/gebze/tarihiyerler/kalesi.tsx";
import Hünkar from "./components/gebze/tarihiyerler/hunkarcayiri.tsx";
import İbrahimPasaCesmesi from "./components/gebze/tarihiyerler/ibrahimpasacesmesi.tsx";
import İlyasBeyCamii from "./components/gebze/tarihiyerler/ilyasbeycamii.tsx";
import OsmanHamdiBeyYalisi from "./components/gebze/tarihiyerler/yalisi.tsx";
import SultanOrhanCamii from "./components/gebze/tarihiyerler/sultanorhancamii.tsx";



const GebzeApp: React.FC =() => {

    return (
        <Routes>
            <Route path="/kardessehirler" element={<KardesSehirler/>}/>
            <Route path="/muhtarlar" element={<Muhtarlar/>}/>
            <Route path="/tarihce" element={<Tarihce/>}/>
            <Route path="/fotograflarlaGebze" element={<Fotoğraflarla/>}/>
            <Route path="/bugunkugebze" element={<BugunkuGebze/>}/>
            <Route path="/tarihiyerler" element={<Gallarytest/>}/>
            <Route path="/uyeoldugumuzbirlikler" element={<UyeOldugumuzBirlikler/>}/>
            <Route path="/360sanaltur" element={<SanalTur/>}/>
            <Route path="/tarihiyerler/hanibalınmezarı" element={<HanibalAniti/>}/>
            <Route path="/tarihiyerler/ballikayalar" element={<Ballikayalar/>}/>
            <Route path="/tarihiyerler/külliyesi" element={<Külliyesi/>}/>
            <Route path="/tarihiyerler/hamami" element={<Hamam/>}/>
            <Route path="/tarihiyerler/sadirvani" element={<Sadırvani/>}/>
            <Route path="/tarihiyerler/cesmesi" element={<Cesmesi/>}/>
            <Route path="/tarihiyerler/kalesi" element={<Kalesi/>}/>
            <Route path="/tarihiyerler/hünkar" element={<Hünkar/>}/>
            <Route path="/tarihiyerler/ibrahimpasacesmesi" element={<İbrahimPasaCesmesi/>}/>
            <Route path="/tarihiyerler/ilyasbeycamii" element={<İlyasBeyCamii/>}/>
            <Route path="/tarihiyerler/osmanhamdibeyyalisi" element={<OsmanHamdiBeyYalisi/>}/>
            <Route path="/tarihiyerler/sultanorhancamii" element={<SultanOrhanCamii/>}/>
        </Routes>
    );

}
export default GebzeApp