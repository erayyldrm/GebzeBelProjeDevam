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
        </Routes>
    );

}
export default GebzeApp