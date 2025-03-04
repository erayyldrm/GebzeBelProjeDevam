import { TEInput, TERipple } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { JSX } from "react";

export default function ExampleV2(): JSX.Element {
    return (
        <section className="h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            {/* ✅ İçerik yönünü ters çevirdik (resim sola, form sağa geçti) */}
                            <div className="g-0 flex flex-wrap flex-row-reverse">

                                {/* ✅ Sağ Sütun: Giriş Formu */}
                                <div className="w-full lg:w-6/12 p-6">
                                    <div className="text-center mb-4">
                                        <img className="w-40 mx-auto" src="images/logo.png" alt="logo" />
                                    </div>
                                    <h4 className="mb-4 text-lg font-semibold text-center">
                                        Personel Giriş Sayfası
                                    </h4>
                                    <form>
                                        <TEInput type="text" label="Kullanıcı Adı" className="mb-3"></TEInput>
                                        <TEInput type="password" label="Parola" className="mb-3"></TEInput>
                                        <div className="text-center mb-4">
                                            <TERipple rippleColor="light" className="w-full">
                                                <button
                                                    className="inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out"
                                                    type="button"
                                                    style={{
                                                        background:
                                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                    }}
                                                >
                                                    GİRİŞ YAP
                                                </button>
                                            </TERipple>
                                            <a href="#!" className="block mt-2 text-sm">Parolanızı Mı Unuttunuz?</a>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="mb-0 text-sm">Hesabınız Yok Mu?</p>
                                            <TERipple rippleColor="light">
                                                <button
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-4 pb-[4px] pt-1 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                                                >
                                                    KAYIT OL
                                                </button>
                                            </TERipple>
                                        </div>
                                    </form>
                                </div>
                                <div className="w-full lg:w-6/12 flex justify-center items-center bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-0 m-0">
                                    <img className="w-auto h-auto max-w-[400px] max-h-[500px] object-contain" src="/images/zinnur-buyukgoz.png" alt="Başkan" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
