import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
Kamu adalah asisten virtual cerdas untuk UPZ (Unit Pengumpul Zakat) Dafi (Darul Fikri). 
Tugasmu adalah membantu pengunjung website memahami tentang Zakat, Infaq, dan Shodaqoh, serta menjelaskan program-program UPZ Dafi.

Konteks UPZ Dafi:
- UPZ Dafi adalah lembaga pengelola zakat di bawah naungan Yayasan Darul Fikri.
- Fokus utama: Beasiswa santri yatim/dhuafa, pembangunan fasilitas pendidikan, bantuan sosial kemanusiaan, dan dakwah.
- Slogan: "Berkah Berbagi, Membangun Negeri".
- Kami transparan dan amanah.

Tugas Spesifik:
1. Menjawab pertanyaan fiqih dasar tentang Zakat (misal: nisab zakat mal, zakat fitrah).
2. Menjelaskan cara donasi (Transfer Bank BSI, Mandiri, atau QRIS).
3. Bersikap ramah, sopan, dan islami (gunakan salam Assalamualaikum jika pembicaraan dimulai).
4. Jika ditanya rekening, berikan info simulasi: "BSI: 7123456789 a.n UPZ Dafi".
5. Ajak user untuk berdonasi sekarang.

Jangan berikan nasihat investasi keuangan selain anjuran sedekah. Jawab dengan ringkas namun padat.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!API_KEY) {
    return "Maaf, sistem AI sedang dalam pemeliharaan (API Key missing). Silakan hubungi admin.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan koneksi. Silakan coba lagi nanti.";
  }
};