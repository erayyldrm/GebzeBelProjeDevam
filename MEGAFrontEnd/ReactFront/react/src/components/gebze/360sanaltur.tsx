import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Location {
    id: number;
    name: string;
    imageUrl: string;
    tourUrl: string;
    mapUrl: string;
}

const locations: Location[] = [
    { id: 1, name: "ANİBALIN MEZARI", imageUrl: "/images/gebze/360sanaltur/1.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/anibal-mezari_9.html", mapUrl: "https://www.google.com/maps/place/Hannibalin+Mezar%C4%B1/@40.782282,29.4417079,15z/data=!4m5!3m4!1s0x0:0xd11c044aa3d2711!8m2!3d40.782282!4d29.4417079?shorturl=1" },
    { id: 2, name: "BALLIKAYALAR", imageUrl: "/images/gebze/360sanaltur/2.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/ballikayalar_5.html", mapUrl: "https://www.google.com/maps/place/Ball%C4%B1kayalar+Tabiat+Park%C4%B1/@40.8330952,29.516802,15z/data=!4m6!3m5!1s0x14cb242bfea49fbf:0x8a949c7858da831d!8m2!3d40.8332309!4d29.5168155!16s%2Fg%2F1thm0p0_?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
    { id: 3, name: "ÇOBAN MUSTAFA PAŞA CAMİİ", imageUrl: "/images/gebze/360sanaltur/3.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/coban-mustafa-pasa-cami_6.html", mapUrl: "https://www.google.com/maps/place/Hac%C4%B1halil,+%C3%87oban+Mustafa+Pa%C5%9Fa+Cami,+41400+Gebze%2FKocaeli/@40.7998871,29.4293468,17z/data=!3m1!4b1!4m5!3m4!1s0x14cb208f33d5f6db:0xb8012998823d4822!8m2!3d40.7998831!4d29.4315355?shorturl=1" },
    { id: 4, name: "ESKİHİSAR KALESİ", imageUrl: "/images/gebze/360sanaltur/4.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/eskihisar-kalesi_7.html", mapUrl: "https://www.google.com/maps/place/Eskihisar+Kalesi/@40.7718998,29.4302579,17z/data=!4m5!3m4!1s0x14cb2011812179d9:0xca32cd56ebba0ea1!8m2!3d40.771275!4d29.4321578?shorturl=1" },
    { id: 5, name: "GEBZE TARİHİ SU DOLABI", imageUrl: "/images/gebze/360sanaltur/5.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/gebze-tarihi-su-dolabi_15.html", mapUrl: "https://www.google.com/maps/place/Tarihi+Su+Dolab%C4%B1/@40.8037724,29.4377811,15z/data=!4m5!3m4!1s0x0:0x9ddfa92da82047b2!8m2!3d40.8037627!4d29.4377932?sa=X&hl=tr&ved=2ahUKEwjEhPu10LfyAhVNm6QKHXDeBTsQ_BIwHXoECEsQBQ&shorturl=1" },
    { id: 6, name: "HÜNKAR ÇAYIRI", imageUrl: "/images/gebze/360sanaltur/6.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/hunkar-cayiri_8.html", mapUrl: "https://www.google.com/maps/place/H%C3%BCnkar+%C3%87ay%C4%B1r%C4%B1/@40.813967,29.343185,15z/data=!4m5!3m4!1s0x0:0x563611efabd51aa!8m2!3d40.813967!4d29.343185?sa=X&ved=2ahUKEwj0xqr-v7fyAhXJ16QKHSivBHgQ_BIwG3oECFAQBQ&shorturl=1" },
    { id: 7, name: "İBRAHİM PAŞA ÇEŞMESİ", imageUrl: "/images/gebze/360sanaltur/7.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/ibrahim-pasa-cesmesi-carsi-cesmesi_10.html", mapUrl: "https://www.google.com/maps/place/%C4%B0brahim+Pa%C5%9Fa+%C3%87e%C5%9Fmesi+(Eski+%C3%87ar%C5%9F%C4%B1+%C3%87e%C5%9Fmesi)/@40.7984023,29.4316467,17z/data=!3m1!4b1!4m5!3m4!1s0x14cb2159ac7bdb4d:0x1128fdc4b678c96d!8m2!3d40.7983983!4d29.4338354?shorturl=1" },
    { id: 8, name: "İLYAS BEY CAMİİ", imageUrl: "/images/gebze/360sanaltur/8.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/ilyas-bey-cami_11.html", mapUrl: "https://www.google.com/maps/place/%C4%B0lyas+Bey+Cami/@40.7995368,29.4403006,15z/data=!4m5!3m4!1s0x0:0x648c4ebb83eead8a!8m2!3d40.7995368!4d29.4403006?sa=X&hl=tr&ved=2ahUKEwjGyoC-yrfyAhWtgf0HHcuGBU0Q_BIwE3oECEIQBQ&shorturl=1" },
    { id: 9, name: "OSMAN HAMDİ BEY MÜZESİ", imageUrl: "/images/gebze/360sanaltur/9.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/osman-hamdi-bey-muzesi_12.html", mapUrl: "https://www.google.com/maps/place/Osman+Hamdi+Bey+Evi+ve+M%C3%BCzesi/@40.769348,29.4179773,15z/data=!4m6!3m5!1s0x14cb200fa27728bf:0xb8320b5bebc2a90a!8m2!3d40.769348!4d29.426732!15sCg9vc21hbiBoYW1kaSBiZXlaESIPb3NtYW4gaGFtZGkgYmV5kgEGbXVzZXVt?hl=tr&shorturl=1" },
    { id: 10, name: "SULTAN ORHAN CAMİİ", imageUrl: "/images/gebze/360sanaltur/10.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/sultan-orhan-camii_13.html", mapUrl: "https://www.google.com/maps/place/Sultan+Orhan+Cami/@40.769348,29.4179773,15z/data=!4m5!3m4!1s0x14cb208c7bb7f3d5:0x805bf82146b0c733!8m2!3d40.7980824!4d29.4378397?hl=tr&shorturl=1" },
    { id: 11, name: "TARİHİ ÇARŞI HAMAMI", imageUrl: "/images/gebze/360sanaltur/11.jpg", tourUrl: "https://www.gebze.bel.tr/sanaltur/tarihi-carsi-hamami_14.html", mapUrl: "https://www.google.com/maps/place/Tarihi+%C3%87ar%C5%9F%C4%B1+Hamam%C4%B1/@40.7985035,29.4318198,17z/data=!3m2!4b1!5s0x14cb20894a58a5d1:0xad3f6edee650f091!4m5!3m4!1s0x14cb20894af6630f:0xda82440ad30b8594!8m2!3d40.7984637!4d29.4339573?shorturl=1" }
];

const VrGogglesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-headset-vr" viewBox="0 0 16 16">
        <path d="M8 1.248c1.857 0 3.526.641 4.65 1.794a5 5 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a5 5 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248"/>
        <path d="M12 12a4 4 0 0 1-2.786-1.13l-.002-.002a1.6 1.6 0 0 0-.276-.167A2.2 2.2 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.6 1.6 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8"/>
    </svg>
);

const VirtualTourGallery: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8"> <br/>
            <div className="bg-blue-900 rounded-2xl p-2 flex justify-center items-center max-w-[466px] mx-auto">
                <img
                    src="/images/gebze/360sanaltur/gebze-belediyesi-sanal-tur.png"
                    alt="Gebze Belediyesi"
                    className="h-24 object-contain"
                />
            </div>
            <br />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locations.map((location) => (
                    <motion.div
                        key={location.id}
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={location.imageUrl}
                            alt={location.name}
                            className="w-full h-60 md:h-64 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                            {location.name}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 rounded-lg flex items-center justify-center">
                            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity flex space-x-4">
                                <a href={location.tourUrl} target="_blank" rel="noopener noreferrer">
                                    <VrGogglesIcon />
                                </a>
                                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                                    <MapPin size={32} className="cursor-pointer text-white hover:text-green-400" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div><br/>
        </div>
    );
};

export default VirtualTourGallery;

