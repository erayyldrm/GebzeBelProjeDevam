import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Mudur {
    id: number;
    ad: string;
    soyad: string;
    departman: string;
    // diğer alanlar...
}

const MudurDetay = () => {
    const { id } = useParams<{ id: string }>();
    const [mudur, setMudur] = useState<Mudur | null>(null);

    useEffect(() => {
        axios.get(`/api/mudurluk/${id}`)
            .then(res => setMudur(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!mudur) return <div>Yükleniyor...</div>;

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-2">{mudur.ad} {mudur.soyad}</h1>
            <p>Departman: {mudur.departman}</p>
            {/* diğer bilgiler */}
        </div>
    );
};

export default MudurDetay;
