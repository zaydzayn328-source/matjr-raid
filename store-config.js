/* =====================================================
   إعدادات المتجر — هذا هو الملف الوحيد الذي تغيّره لكل متجر
   ===================================================== */
var STORE = {
    /* معرّف قصير بالإنجليزية بدون مسافات (لا يظهر للزبون) */
    id: "zero-market",

    /* اسم المتجر كما يظهر في كل الصفحات */
    name: "Zero Market",
    tagline: "متجر إلكتروني",
    description: "متجر إلكتروني حديث يعرض المنتجات بطريقة احترافية مع تصميم سريع ومتجاوب مع جميع الأجهزة.",

    /* رقم واتساب صاحب المتجر: 212 ثم الرقم بدون 0 وبدون + أو مسافات */
    whatsapp: "212624726277",

    currency: "د.م.",

    /* صورة كبيرة أعلى الصفحة الرئيسية — اتركها "" إن لم توجد */
    banner: "images/zero-market-banner.jpg.png",

    /* الصفحة الرئيسية للمتجر */
    home: "project3.html",

    /* التصنيفات: id قصير بالإنجليزية + الاسم + أيقونة */
    categories: [
        { id: "electronics", name: "الإلكترونيات", icon: "📱" },
        { id: "clothing", name: "الملابس", icon: "👗" },
        { id: "beauty", name: "التجميل والعناية", icon: "💄" },
        { id: "home", name: "المنزل واللوازم المنزلية", icon: "🏠" }
    ],

    /* منتجات تظهر في «منتجات مختارة» (اكتب id المنتجات) */
    featured: ["smart-phone", "baguette-handbag", "heat-smoothing-brush", "electric-burner"],

    /* ⚠️ وعود للزبون: لا تكتب إلا ما يقدّمه المتجر فعلًا */
    features: [
        { icon: "🚚", title: "توصيل لجميع المدن", text: "نوصل طلبك إلى باب منزلك" },
        { icon: "💵", title: "الدفع عند الاستلام", text: "ادفع فقط عندما تستلم طلبك" },
        { icon: "📞", title: "تأكيد الطلب هاتفيًا", text: "نتصل بك لتأكيد الطلب قبل الشحن" },
        { icon: "💬", title: "دعم عبر واتساب", text: "نجيب على أسئلتك بسرعة" }
    ]
};

/* =====================================================
   المنتجات
   section: "offers" (العروض) / "best-sellers" (الأعلى تقييمًا) / "new-arrivals" (جديدنا)
   ===================================================== */
var PRODUCTS = [
    {
        id: "mechanical-keyboard",
        tags: "كلافيي لوحة مفاتيح كيبورد clavier keyboard gaming ألعاب",
        name: "R8 60% Mechanical Keyboard – 61 Keys",
        category: "electronics",
        section: "offers",
        image: "images/mechanical-keyboard.jpeg",
        alt: "لوحة مفاتيح ميكانيكية",
        badge: { type: "offer", text: "عرض خاص" },
        description: "لوحة مفاتيح ميكانيكية بإضاءة RGB، مناسبة للألعاب والبرمجة والكتابة الاحترافية.",
        rating: 3.1,
        oldPrice: 379,
        price: 249,
        currency: "د.م."
    },
    {
        id: "laptop-pro-x15",
        tags: "لابتوب حاسوب كمبيوتر حاسوب محمول pc portable ordinateur laptop lenovo",
        name: "Lenovo ThinkPad L13 – Core i5 10th Gen / 8GB RAM / 256GB SSD",
        category: "electronics",
        section: "best-sellers",
        image: "images/lenovo-thinkpad-l13.jpeg",
        alt: "لابتوب Pro X15",
        badge: { type: "bestseller", text: "⭐ الأعلى تقييمًا" },
        description: "لابتوب احترافي مناسب للدراسة والعمل والتصميم والبرمجة.",
        rating: 5,
        oldPrice: 3999,
        price: 2399,
        currency: "د.م."
    },
    {
        id: "smart-phone",
        tags: "هاتف تلفون تليفون جوال portable telephone smartphone phone samsung سامسونج",
        name: "Samsung Galaxy A16 – 8GB / 256GB",
        category: "electronics",
        section: "best-sellers",
        image: "images/samsung-galaxy-a16.jpeg",
        alt: "هاتف ذكي",
        badge: { type: "new", text: "جديد" },
        description: "هاتف ذكي حديث بكاميرا عالية الدقة، شاشة AMOLED، وأداء سريع.",
        rating: 4.3,
        oldPrice: 2199,
        price: 2099,
        currency: "د.م."
    },
    {
        id: "wireless-headphones",
        tags: "سماعات سماعة بلوتوث كيت ecouteurs casque headphones",
        name: "P9 Bluetooth Headphones",
        category: "electronics",
        section: "best-sellers",
        image: "images/p9-bluetooth-headphones.jpeg",
        alt: "سماعات لاسلكية",
        badge: { type: "new", text: "جديد" },
        description: "سماعات لاسلكية عالية الجودة، صوت نقي، بطارية طويلة وتصميم مريح للاستخدام اليومي.",
        rating: 3.5,
        price: 55,
        currency: "د.م."
    },

    /* ═══════════════════════════════════════════════════
       منتجات جديدة (6) — الصور تُضاف لاحقًا بعد تجهيزها واعتمادها.
       حقل image فارغ حاليًا: يُستبدل بمسار الصورة النهائية عند توفرها.
       لا تقييم (rating=0) ولا سعر قديم حتى لا نعرض بيانات غير مؤكدة.
       ═══════════════════════════════════════════════════ */

    {
        id: "mini-perfume-set",
        tags: "عطر عطور ريحة parfum parfums perfume هدية",
        name: "Coffret 4 Mini Parfums Eau de Parfum – Him & Her",
        category: "beauty",
        section: "new-arrivals",
        image: "images/mini-perfume-set.jpeg",
        alt: "مجموعة عطور Mini - Unisex",
        badge: { type: "new", text: "جديد" },
        description: "مجموعة عطور صغيرة وأنيقة، مناسبة للاستخدام الشخصي والتنقل أو كهدية.",
        rating: 0,
        oldPrice: 197,
        price: 106,
        currency: "د.م."
    },
    {
        id: "heat-smoothing-brush",
        tags: "فرشاة مشط شعر سشوار brosse lisseur cheveux",
        name: "Brosse Lissante Chauffante 2 en 1 – Lisseur et Peigne Coiffant",
        category: "beauty",
        section: "new-arrivals",
        image: "images/heat-smoothing-brush.jpeg",
        alt: "فرشاة تنعيم حرارية 2 في 1",
        badge: { type: "new", text: "جديد" },
        description: "فرشاة كهربائية عملية لتصفيف وتنعيم الشعر بتصميم عصري.",
        rating: 0,
        oldPrice: 250,
        price: 149,
        currency: "د.م."
    },
    {
        id: "baguette-handbag",
        tags: "حقيبة شنطة صاك sac bag نسائية",
        name: "Sac à Épaule Femme Style Baguette en Simili Cuir",
        category: "clothing",
        section: "new-arrivals",
        image: "images/baguette-handbag.jpeg",
        alt: "حقيبة نسائية Baguette عصرية",
        badge: { type: "new", text: "جديد" },
        description: "حقيبة نسائية بتصميم عصري وأنيق، مناسبة للاستخدام اليومي وتمنح الإطلالة لمسة بسيطة ومرتبة.",
        rating: 0,
        price: 159,
        currency: "د.م."
    },
    {
        id: "wraparound-sunglasses",
        tags: "نظارات نظارة شمسية لونيت lunettes sunglasses",
        name: "HD Vision Wraparounds – Set de 2",
        category: "clothing",
        section: "best-sellers",
        image: "images/hd-vision-wraparound-sunglasses.jpeg",
        alt: "نظارات شمسية Wraparound عصرية",
        badge: { type: "new", text: "جديد" },
        description: "نظارات شمسية بتصميم Wraparound عصري وملفت، مناسبة للإطلالات اليومية الحديثة.",
        rating: 4,
        oldPrice: 99,
        price: 58.90,
        currency: "د.م."
    },
    {
        id: "crystal-led-lamp",
        tags: "مصباح لامبة ضوء اضاءة lampe lamp led ديكور",
        name: "Lampe LED tactile en cristal – 16 couleurs",
        category: "home",
        section: "new-arrivals",
        image: "images/crystal-led-lamp.jpeg",
        alt: "مصباح LED ديكوري كريستالي",
        badge: { type: "new", text: "جديد" },
        description: "مصباح ديكوري صغير بتصميم كريستالي أنيق، مناسب لغرفة النوم أو المكتب أو الطاولة الجانبية.",
        rating: 0,
        oldPrice: 130,
        price: 99,
        currency: "د.م."
    },
    {
        id: "electric-burner",
        tags: "مبخرة بخور عود encens brûleur burner",
        name: "مبخرة كهربائية عربية بتصميم شرقي",
        category: "home",
        section: "new-arrivals",
        image: "images/electric-arabic-burner.jpeg",
        alt: "مبخرة كهربائية عصرية - تصميم شرقي",
        badge: { type: "new", text: "جديد" },
        description: "مبخرة كهربائية بتصميم عصري مستوحى من الطابع الشرقي، مناسبة للاستخدام المنزلي والديكور.",
        rating: 3,
        oldPrice: 200,
        price: 86,
        currency: "د.م."
    }
];
