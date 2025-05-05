import { useState, useEffect, useRef } from "react";
import { X, Send, Paperclip, Mic } from "lucide-react";

// Sıkı tip tanımlamaları için literal tipleri kullanalım
type ChatRole = "user" | "assistant";

type ChatMessage = {
    role: ChatRole;
    message: string;
};

const GUZIDE = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
        { role: "assistant", message: "Merhaba! Ben GÜZİDE, size nasıl yardımcı olabilirim?" }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Kaydırma işlevini otomatik olarak en aşağıya yapan fonksiyon
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Chat geçmişi güncellendiğinde otomatik kaydırma
    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    // Modal açıldığında input alanına odaklanma
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    // Asistan yanıtları için basit bir yapay zeka
    const getAssistantResponse = (userMessage: string): string => {
        const lowerCaseMsg = userMessage.toLowerCase();

        // Tarih ve zaman sorguları
        if (lowerCaseMsg.includes("saat") || lowerCaseMsg.includes("zaman")) {
            const now = new Date();
            return `Şu anki saat: ${now.toLocaleTimeString()}`;
        }

        // Tarih sorguları
        if (lowerCaseMsg.includes("tarih") || lowerCaseMsg.includes("bugün günlerden ne")) {
            const now = new Date();
            return `Bugünün tarihi: ${now.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
        }

        // Selamlaşma yanıtları
        if (lowerCaseMsg.includes("merhaba") || lowerCaseMsg.includes("selam") || lowerCaseMsg.includes("hey")) {
            return "Merhaba! Size nasıl yardımcı olabilirim?";
        }

        // Teşekkür yanıtları
        if (lowerCaseMsg.includes("teşekkür") || lowerCaseMsg.includes("sağol")) {
            return "Rica ederim! Başka bir konuda yardımcı olabilir miyim?";
        }

        // Yardım kategorileri
        if (lowerCaseMsg.includes("talep") || lowerCaseMsg.includes("istek")) {
            return "Yeni bir talep oluşturmak için size yardımcı olabilirim. Lütfen talep türünü ve detaylarını belirtir misiniz?";
        }

        if (lowerCaseMsg.includes("yardım")) {
            return "Size hangi konuda yardımcı olabilirim? Talep oluşturma, iletişim bilgileri, kütüphane rezervasyonu veya başka bir konuda bilgi almak isterseniz sorabilirsiniz.";
        }

        if (lowerCaseMsg.includes("iletişim")) {
            return "İletişim bilgilerimiz: \nTelefon: +90 212 123 45 67\nE-posta: info@sirket.com\nAdres: Merkez Mahallesi, Atatürk Caddesi No:123, İstanbul";
        }

        if (lowerCaseMsg.includes("kütüphane") || lowerCaseMsg.includes("rezervasyon")) {
            return "Kütüphane rezervasyonu yapmak için tarih ve saat bilgisi paylaşmanız gerekiyor. Hangi tarih ve saatte rezervasyon yapmak istersiniz?";
        }

        if (lowerCaseMsg.includes("eczane") || lowerCaseMsg.includes("nöbetçi")) {
            return "Nöbetçi eczane bilgisi için bulunduğunuz ilçeyi belirtmeniz gerekiyor. Hangi ilçedeki nöbetçi eczaneleri öğrenmek istiyorsunuz?";
        }

        // Nasılsın tarzı sorular
        if (lowerCaseMsg.includes("nasılsın") || lowerCaseMsg.includes("ne haber")) {
            return "Ben çok iyiyim, teşekkür ederim! Size nasıl yardımcı olabilirim?";
        }

        // Kimsin sorusu
        if (lowerCaseMsg.includes("kimsin") || lowerCaseMsg.includes("adın ne")) {
            return "Ben GÜZİDE, size yardımcı olmak için tasarlanmış bir dijital asistanım. Her türlü sorunuza yanıt vermeye hazırım!";
        }

        // Varsayılan yanıt
        return "Anladım. Size daha iyi yardımcı olabilmem için biraz daha detay verebilir misiniz?";
    };

    // Kullanıcı mesajını gönderme fonksiyonu
    const handleSendMessage = () => {
        if (userInput.trim() === "") return;

        // Kullanıcı mesajını ekle
        const newUserMessage: ChatMessage = {
            role: "user",
            message: userInput
        };

        setChatHistory((prev) => [...prev, newUserMessage]);
        setUserInput("");

        // Asistan yazıyor efekti
        setIsTyping(true);

        // Asistan yanıtı (gecikme ile)
        setTimeout(() => {
            const assistantResponse = getAssistantResponse(userInput);
            const newAssistantMessage: ChatMessage = {
                role: "assistant",
                message: assistantResponse
            };

            setChatHistory((prev) => [...prev, newAssistantMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000); // 1-2 saniye arası rastgele gecikme
    };

    // Klavye olayını dinleyelim
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Hızlı yanıt seçenekleri
    const quickReplies = [
        "Merhaba",
        "Yardım alabilir miyim?",
        "İletişim bilgisi",
        "Nöbetçi eczane",
        "Teşekkürler"
    ];

    return (
        <>
            {/* Yardımcı Buton - Daha yuvarlak yapıldı */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl transition transform hover:scale-105"
                >
                    <span className="text-xl">🤖</span>
                </button>
            </div>

            {/* Modal - Sağ tarafta açılacak ve yüksekliği uzatılmış */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-end">
                    {/* Arkaplan overlay */}
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

                    {/* Sağ tarafta açılan panel - Daha yuvarlatılmış kenarlar */}
                    <div
                        className="relative w-full max-w-md h-full flex flex-col bg-white shadow-2xl transition-all duration-300 animate-in fade-in overflow-hidden rounded-l-3xl"
                        style={{
                            animation: "slideInFromRight 0.3s ease-out",
                            height: "100vh" // Tam ekran yüksekliği
                        }}
                    >
                        {/* Header - Daha yuvarlatılmış */}
                        <div className="flex justify-between items-center p-4 border-b bg-blue-600 text-white rounded-bl-3xl">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🤖</span>
                                <div>
                                    <h3 className="font-medium">GÜZİDE Asistan</h3>
                                    <p className="text-xs text-blue-100">7/24 hizmetinizdeyim</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-blue-500 transition">
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Chat History - Uzatılmış yükseklik için flex-1 */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                            {chatHistory.map((chat, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {chat.role === "assistant" && (
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 flex-shrink-0 shadow-md">
                                            🤖
                                        </div>
                                    )}

                                    <div
                                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                                            chat.role === "user"
                                                ? "bg-blue-600 text-white rounded-tr-none shadow-md"
                                                : "bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm"
                                        }`}
                                    >
                                        {chat.message}
                                    </div>

                                    {chat.role === "user" && (
                                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center ml-2 flex-shrink-0 shadow-md">
                                            👤
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 flex-shrink-0 shadow-md">
                                        🤖
                                    </div>
                                    <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "200ms" }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "400ms" }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies - Daha yuvarlatılmış */}
                        <div className="p-3 border-t bg-gray-50 overflow-x-auto">
                            <div className="flex gap-2">
                                {quickReplies.map((reply, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setUserInput(reply);
                                            setTimeout(() => {
                                                inputRef.current?.focus();
                                            }, 10);
                                        }}
                                        className="whitespace-nowrap px-4 py-2 bg-white text-gray-600 text-sm border border-gray-200 rounded-full hover:bg-gray-100 transition shadow-sm"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area - Daha yuvarlatılmış (form yerine div kullanıldı) */}
                        <div className="p-4 border-t bg-white">
                            <div className="flex gap-2 items-center">
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 hover:text-blue-500 transition rounded-full hover:bg-gray-100"
                                >
                                    <Paperclip className="w-5 h-5" />
                                </button>

                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Mesajınızı yazın..."
                                    className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <button
                                    type="button"
                                    className="p-2 text-gray-500 hover:text-blue-500 transition rounded-full hover:bg-gray-100"
                                >
                                    <Mic className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={handleSendMessage}
                                    disabled={!userInput.trim()}
                                    className="bg-blue-600 text-BLACK p-3 rounded-full disabled:opacity-50 hover:bg-blue-700 transition flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Footer - Daha yuvarlatılmış */}
                        <div className="p-2 border-t bg-gray-50 text-center rounded-bl-3xl">
                            <p className="text-xs text-gray-500">
                                GÜZİDE v1.0 | Powered by AI
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS Animation - Sağdan gelme efekti için */}
            <style>{`
                @keyframes slideInFromRight {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
};

export default GUZIDE;