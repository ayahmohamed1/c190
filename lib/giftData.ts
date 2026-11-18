// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const giftData: Record<string, GiftData> = {

  // ----------------------------------------------------------
  // CUSTOMER: Aya
  // Link: yourdomain.com/gift/aya
  // ----------------------------------------------------------
  aya: {
    name: "Habiby",                                     // اسم مستلم الهدية
    senderName: "your love",                                   // التوقيع في آخر الرسالة (اختياري)
    envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
    birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
    accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
    musicUrl: "",                                        // رابط الموسيقى هنا
    message: ` 
   Happy Birthday
أحبك..
وأرى أن كل ما يُقال في المحبة أقل من أن يفيكِ حقكِ وفي يوم مولدكِ
أجدني أرددها كما لو أنني أقولها للمرة الأولى وأوقن بها كما لو أنني عرفتها منذ الأزل

فأنت حبيبي اليوم
وحبيبي غدًا
وحبيبي بعد أعوام لا يُحصيها العمر وأنت الأمنية التي لم أتجاوزها
والوجه الذي كلما ازدحم النسيان في قلبي بقي وحده حاضرًا
فأذكره وأبتسم
كل عام وانت حبيبي في كل الاعوام `,
  },

};

export default giftData;