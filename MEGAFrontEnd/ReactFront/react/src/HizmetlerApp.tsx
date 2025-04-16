import {Route, Routes} from "react-router-dom";
import React from "react";
import Atolyeler from "./components/hizmetler/atolyeler";
import Evlendirme from "./components/hizmetler/evlendirme";
import Gures from "./components/hizmetler/gures";
import GeriDonusum from "./components/hizmetler/geri-donusum";
import Kutuphane from "./components/hizmetler/kutuphane";
import Merkezler from "./components/hizmetler/merkezler";
import Mesirealani from "./components/hizmetler/mesirealani";
import Guzide from "./components/hizmetler/atolyeler/guzide";
import Genclik from "./components/hizmetler/atolyeler/gençlik.tsx";
import Sportıf from "./components/hizmetler/atolyeler/sportif.tsx";
import Enderunokulları from "./components/hizmetler/atolyeler/enderun.tsx";
 // .tsx uzantısını kaldı

const Hizmetler: React.FC = () => {
    return (
        <Routes>
            <Route path="atolyeler" element={<Atolyeler />} />


            <Route path="evlendirme" element={<Evlendirme />} />
            <Route path="gures" element={<Gures />} />
            <Route path="geridonusum" element={<GeriDonusum />} />
            <Route path="kutuphane" element={<Kutuphane />} />
            <Route path="merkezler" element={<Merkezler />} />
            <Route path="mesirealani" element={<Mesirealani />} />
            <Route
                path="atolyeler/guzide"
                element={
                    <Guzide
                        title=""
                        description=""
                        imageUrl=""
                        address=""
                        phone=""
                        workingHours=""
                        announcements={[]}
                    />
                }
            />
            <Route
                path="atolyeler/enderun"
                element={
                    <Enderunokulları
                        title=""
                        description=""
                        imageUrl=""
                        address=""
                        phone=""
                        workingHours=""
                        announcements={[]}
                    />
                }
            />
            <Route
                path="atolyeler/genclik"
                element={
                    <Genclik
                        title=""
                        description=""
                        imageUrl=""
                        address=""
                        phone=""
                        workingHours=""
                        announcements={[]}
                    />
                }
            />
            <Route
                path="atolyeler/sportıf"
                element={
                    <Sportıf
                        title=""
                        description=""
                        imageUrl=""
                        address=""
                        phone=""
                        workingHours=""
                        announcements={[]}
                    />
                }
            />
        </Routes>
    );
};

export default Hizmetler;