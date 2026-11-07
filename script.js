/* =====================================================
   Project Zero — Zero Market
   المرحلة الأولى: مصدر البيانات المركزي للمنتجات
   Central Product Data Source (Phase 1)
   ===================================================== */

/* رقم واتساب الرسمي للمتجر — المصدر الواحد لكل روابط الطلب */
var WHATSAPP_NUMBER = "212624726277";

/* =====================================================
   مميزات المتجر — تظهر في شريط الثقة وصفحة المنتج والتذييل
   ⚠️ هذه وعود للزبون: لا تكتب إلا ما يقدّمه المتجر فعلًا،
   وعدّلها لكل متجر جديد حسب طريقة عمل صاحبه.
   ===================================================== */
var STORE_FEATURES = [
    { icon: "🚚", title: "توصيل لجميع المدن", text: "نوصل طلبك إلى باب منزلك" },
    { icon: "💵", title: "الدفع عند الاستلام", text: "ادفع فقط عندما تستلم طلبك" },
    { icon: "📞", title: "تأكيد الطلب هاتفيًا", text: "نتصل بك لتأكيد الطلب قبل الشحن" },
    { icon: "💬", title: "دعم عبر واتساب", text: "نجيب على أسئلتك بسرعة" }
];

/* =====================================================
   مصدر البيانات المركزي — جميع منتجات المتجر الحالية
   (4 منتجات إلكترونية + 6 منتجات جديدة الصورة لاحقًا)
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

/* =====================================================
   دالة توليد رابط واتساب من بيانات المنتج
   - تستخدم رقم WHATSAPP_NUMBER الثابت كمصدر واحد
   - تبني الرسالة تلقائيًا من اسم المنتج وسعره
   ===================================================== */
function waOrderLink(product) {
    var message = "السلام عليكم، أريد شراء " + product.name + " بسعر " + formatPrice(product.price) + " " + product.currency;
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

/* تنسيق السعر مع فواصل الآلاف: 1290 → 1,290 */
function formatPrice(value) {
    /* الأسعار العشرية تُعرض برقمين بعد الفاصلة: 58.9 → 58.90 */
    var text = (value % 1 === 0) ? value.toString() : value.toFixed(2);
    return text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* حماية النصوص القادمة من الرابط (مثل كلمة البحث) قبل وضعها في الصفحة */
function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/* نسبة الخصم: 379 → 249 = 34% */
function discountPercent(product) {
    if (!product.oldPrice || product.oldPrice <= product.price) {
        return 0;
    }
    return Math.round((1 - product.price / product.oldPrice) * 100);
}

/* السعر القديم + شارة الخصم — في قسم العروض فقط (كما كان من قبل) */
function oldPriceBlock(product) {
    if (!product.oldPrice || product.section !== 'offers') {
        return '';
    }
    var pct = discountPercent(product);
    return '<p class="old-price-row">' +
               '<span class="old-price">' + formatPrice(product.oldPrice) + ' ' + product.currency + '</span>' +
               (pct ? '<span class="discount-chip" dir="ltr">-' + pct + '%</span>' : '') +
           '</p>';
}

/* =====================================================
   دالة توليد رابط صفحة تفاصيل المنتج
   - تبني رابطاً من نوع product.html?id=<product.id>
   ===================================================== */
function productDetailLink(product) {
    var url = "product.html?id=" + encodeURIComponent(product.id);

    /* الحفاظ على سياق القائمة: نمرر view أو cat مع رابط التفاصيل
       حتى تعود صفحة المنتج إلى نفس القائمة بدل الرئيسية دائمًا */
    var view = getUrlParam('view');
    var cat = getUrlParam('cat');
    if (view) {
        url += "&view=" + encodeURIComponent(view);
    } else if (cat) {
        url += "&cat=" + encodeURIComponent(cat);
    }

    return url;
}

/* =====================================================
   دالة بناء نجوم التقييم — عرض صادق دون تقريب للأعلى
   - نجمة كاملة لكل درجة كاملة (Math.floor)
   - نصف نجمة واحدة فقط إذا كانت الكسر >= 0.5
   - لا تُقرَّب الكسور إلى الأعلى: 3.1 ← 3 نجوم / 3.5 ← 3 + نصف / 4.3 ← 4
   - لا نرسم نجومًا فارغة إضافية (نفس التصميم الحالي)
   - dir="ltr" لأن رمز ★ لاتيني ولا يجب أن ينعكس مع اتجاه RTL
   ===================================================== */
function buildStars(rating) {
    if (!rating || rating <= 0) {
        return "";
    }

    var fullStars = Math.floor(rating);
    var hasHalfStar = (rating - fullStars) >= 0.5;

    /* نجوم كاملة — بنفس ترميز التصميم الأصلي (اللون من .rating في style.css) */
    var html = "";
    for (var i = 0; i < fullStars; i++) {
        html += "<span>★</span>";
    }

    /* نصف نجمة — تُرسم بقاعدة .half-star في style.css:
       نجمة كاملة بلون فارغ + طبقة ذهبية تغطي نصفها الأيسر،
       فيظهر شكل نصف نجمة واضح ومتناسق حتى في واجهة RTL */
    if (hasHalfStar) {
        html += '<span class="half-star" aria-hidden="true">★</span>';
    }

    return '<div class="rating">' + html + '</div>';
}

/* =====================================================
   دالة بناء بطاقة منتج واحدة
   - تُخرج بنية .product-card بنفس كلاسات style.css الحالية
   - تُبنى بالكامل من بيانات كائن product فقط
   - صورة المنتج واسمه قابلان للنقر وينقلان إلى صفحة تفاصيل المنتج
   - رابط الطلب يأتي من waOrderLink(product)
   ===================================================== */
function buildCard(product) {

    /* صورة المنتج — إذا لم تكن الصورة جاهزة بعد (image فارغ)،
       نعرض بديلاً نصيًا صادقًا بدل صورة مكسورة،
       ويُستبدل حقل image بالمسار النهائي عند توفر الصورة */
    var imageHtml =
        '<img class="product-image"' +
            ' src="' + product.image + '"' +
            ' alt="' + product.alt + '">';
    if (!product.image) {
        imageHtml = '<div class="product-image-placeholder">الصورة قريبًا</div>';
    }

    /* التقييم — يُبنى عبر buildStars() بعرض صادق (دون تقريب للأعلى) */
    var ratingHtml = buildStars(product.rating);

    /* السعر القديم + نسبة الخصم — في قسم العروض فقط */
    var oldPriceHtml = oldPriceBlock(product);

    return "" +
        '<div class="product-card">' +
            '<a href="' + productDetailLink(product) + '" class="product-card-link" aria-label="' + product.alt + '">' +
                imageHtml +
            '</a>' +
            '<span class="badge ' + (product.section === 'best-sellers' ? 'bestseller' : product.badge.type) + '">' + (product.section === 'best-sellers' ? '⭐ الأعلى تقييمًا' : product.badge.text) + '</span>' +
            '<a href="' + productDetailLink(product) + '" class="product-card-title">' +
                '<h3>' + product.name + '</h3>' +
            '</a>' +
            '<p>' + product.description + '</p>' +
            ratingHtml +
            oldPriceHtml +
            '<p class="price">' + formatPrice(product.price) + ' ' + product.currency + '</p>' +
            '<div class="card-actions">' +
                addToCartButton(product) +
                '<a href="' + waOrderLink(product) + '" class="order-btn" target="_blank">' +
                    '🛒 اطلب الآن' +
                '</a>' +
            '</div>' +
        '</div>';
}

/* =====================================================
   دالة توزيع المنتجات على أقسام الصفحة
   - تقرأ PRODUCTS
   - تحدد قيمة product.section لكل منتج (القسم الذي ينتمي إليه)
   - تجد section المطابق في الصفحة بواسطة id
   - تضع البطاقة الناتجة من buildCard(product)
     داخل .products-container الخاص بذلك القسم
   ملاحظة: هذه الدالة لا تُستدعى تلقائيًا الآن،
   بل ستُستدعى في خطوة لاحقة بعد تجهيز HTML.
   ===================================================== */
function fillSections() {
    for (var i = 0; i < PRODUCTS.length; i++) {
        var product = PRODUCTS[i];

        /* إيجاد القسم المطابق في الصفحة عبر id */
        var sectionEl = document.getElementById(product.section);
        if (!sectionEl) {
            continue;
        }

        /* الحاوية التي ستُوضع فيها البطاقة داخل القسم */
        var container = sectionEl.querySelector('.products-container');
        if (!container) {
            continue;
        }

        /* وضع البطاقة في نهاية الحاوية */
        container.insertAdjacentHTML('beforeend', buildCard(product));
    }
}

/* =====================================================
   دالة عرض كل المنتجات في قسم "منتجاتنا" (#all-products)
   - تبحث عن #all-products وحاوية .products-container داخلها
   - تمر على PRODUCTS وتضيف كل منتج مرة واحدة فقط عبر buildCard
   ===================================================== */
function fillAllProducts() {
    var sectionEl = document.getElementById('all-products');
    if (!sectionEl) {
        return;
    }

    var container = sectionEl.querySelector('.products-container');
    if (!container) {
        return;
    }

    for (var i = 0; i < PRODUCTS.length; i++) {
        /* إضافة كل منتج مرة واحدة فقط */
        container.insertAdjacentHTML('beforeend', buildCard(PRODUCTS[i]));
    }
}

/* =====================================================
   دالة عرض المنتجات في أقسام التصنيفات
   - التصنيفات: clothing, electronics, beauty, home
   - لكل تصنيف يجد القسم المطابق بمعرف id ويعرض جميع
     المنتجات التي product.category === categoryId
   - يمنع تكرار نفس product.id داخل نفس القسم عبر Set
   ===================================================== */
function fillCategories() {
    var categories = ["clothing", "electronics", "beauty", "home"];
    var added = new Set();

    for (var c = 0; c < categories.length; c++) {
        var categoryId = categories[c];
        var sectionEl = document.getElementById(categoryId);
        if (!sectionEl) {
            continue;
        }

        var container = sectionEl.querySelector('.products-container');
        if (!container) {
            continue;
        }

        added.clear();

        for (var i = 0; i < PRODUCTS.length; i++) {
            var product = PRODUCTS[i];
            if (product.category !== categoryId) {
                continue;
            }
            if (added.has(product.id)) {
                continue;
            }
            added.add(product.id);
            container.insertAdjacentHTML('beforeend', buildCard(product));
        }
    }
}

/* =====================================================
   دالة قراءة معامل id من رابط الصفحة: product.html?id=...
   - تعمل مع أي متصفح (بدون الاعتماد على URLSearchParams)
   ===================================================== */
function getUrlParam(name) {
    var query = window.location.search.substring(1);
    var parts = query.split('&');
    for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split('=');
        if (pair.length === 2 && decodeURIComponent(pair[0]) === name) {
            return decodeURIComponent(pair[1].replace(/\+/g, ' '));
        }
    }
    return null;
}

/* =====================================================
   دالة البحث عن منتج في PRODUCTS حسب معرفه
   ===================================================== */
function getProductById(id) {
    if (!id) {
        return null;
    }
    for (var i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === id) {
            return PRODUCTS[i];
        }
    }
    return null;
}

/* =====================================================
   دالة عرض صفحة تفاصيل المنتج (تُستدعى في product.html فقط)
   - تقرأ ?id= من الرابط وتلبّي حاوية #product-detail-container
   - تُظهر فقط المعلومات الموجودة فعليًا في بيانات المنتج الحالية
   - زر الطلب يستخدم نفس نظام واتساب الحالي waOrderLink(product)
   - في حال عدم وجود id أو منتج غير موجود: رسالة مناسبة + زر عودة للمتجر
   ===================================================== */
function renderProductDetail() {
    var container = document.getElementById('product-detail-container');
    if (!container) {
        return; /* لسنا في صفحة التفاصيل — لا تأثير على باقي الصفحات */
    }

    var id = getUrlParam('id');
    var product = getProductById(id);
    /* العودة إلى المتجر: إذا جاء المستخدم من قائمة (view أو cat) نعيده إلى نفس القائمة،
       وإلا نعيده إلى الصفحة الرئيسية للمتجر */
    var backView = getUrlParam('view');
    var backCat = getUrlParam('cat');
    var backParams = [];
    if (backCat) {
        backParams.push('cat=' + encodeURIComponent(backCat));
    }
    if (backView) {
        backParams.push('view=' + encodeURIComponent(backView));
    }
    var backHref = backParams.length ? 'store-view.html?' + backParams.join('&') : 'project3.html';
    var backToStore =
        '<a href="' + backHref + '" class="product-detail-back">' +
            '← العودة إلى المتجر' +
        '</a>';

    if (!product) {
        document.title = "المنتج غير موجود | Zero Market";
        container.innerHTML =
            '<div class="product-detail-card product-detail-error">' +
                '<h1 class="product-detail-name">المنتج غير موجود</h1>' +
                '<p class="product-detail-message">' +
                    'عذرًا، لم نتمكن من العثور على المنتج المطلوب.' +
                '</p>' +
                backToStore +
            '</div>';
        return;
    }

    document.title = product.name + ' | Zero Market';

    /* صورة المنتج — بديل نصي صادق إذا لم تكن الصورة جاهزة بعد */
    var detailImageHtml =
        '<img class="product-detail-image" src="' + product.image + '" alt="' + product.alt + '">';
    if (!product.image) {
        detailImageHtml = '<div class="product-detail-image-placeholder">الصورة قريبًا</div>';
    }

    /* التقييم — يُبنى عبر buildStars() بعرض صادق (دون تقريب للأعلى) */
    var ratingHtml = buildStars(product.rating);

    /* السعر القديم + نسبة الخصم — في قسم العروض فقط، توافقًا مع البطاقات */
    var oldPriceHtml = oldPriceBlock(product);

    container.innerHTML =
        '<div class="product-detail-card">' +
            detailImageHtml +
            '<div class="product-detail-info">' +
                '<span class="badge ' + (product.section === 'best-sellers' ? 'bestseller' : product.badge.type) + '">' + (product.section === 'best-sellers' ? '⭐ الأعلى تقييمًا' : product.badge.text) + '</span>' +
                '<h1 class="product-detail-name">' + product.name + '</h1>' +
                ratingHtml +
                oldPriceHtml +
                '<p class="price">' + formatPrice(product.price) + ' ' + product.currency + '</p>' +
                '<p class="product-detail-desc">' + product.description + '</p>' +
                '<div class="card-actions">' +
                    addToCartButton(product) +
                    '<a href="' + waOrderLink(product) + '" class="order-btn product-detail-order" target="_blank">' +
                        '🛒 اطلب الآن' +
                    '</a>' +
                '</div>' +
                '<ul class="detail-features">' + featuresList() + '</ul>' +
                backToStore +
            '</div>' +
        '</div>' +
        relatedProductsHtml(product);
}

/* قائمة مختصرة بمميزات المتجر داخل صفحة المنتج */
function featuresList() {
    var html = "";
    for (var i = 0; i < STORE_FEATURES.length; i++) {
        html += '<li>' + STORE_FEATURES[i].icon + ' ' + STORE_FEATURES[i].title + '</li>';
    }
    return html;
}

/* منتجات مشابهة: من نفس التصنيف أولًا، ثم نكمل من باقي المتجر حتى 4 */
function relatedProductsHtml(product) {
    var same = [];
    var others = [];
    for (var i = 0; i < PRODUCTS.length; i++) {
        var p = PRODUCTS[i];
        if (p.id === product.id) {
            continue;
        }
        (p.category === product.category ? same : others).push(p);
    }
    var list = same.concat(others).slice(0, 4);
    if (!list.length) {
        return '';
    }
    var cards = "";
    for (var j = 0; j < list.length; j++) {
        cards += buildCard(list[j]);
    }
    return '<div class="related-products">' +
               '<h2>قد يعجبك أيضًا</h2>' +
               '<div class="products-container">' + cards + '</div>' +
           '</div>';
}

/* =====================================================
   دوال العرض الجديدة — هيكل المتجر متعدد الواجهات
   - renderHomePage : تعبئة الأقسام المختصرة في project3.html
   - renderStoreView : تعبئة القوائم في store-view.html حسب ?view= / ?cat=
   ===================================================== */

/* المنتجات المميزة في الرئيسية: منتج واحد من كل تصنيف (4) */
var FEATURED_IDS = [
    "smart-phone",        /* إلكترونيات */
    "baguette-handbag",    /* ملابس */
    "heat-smoothing-brush",/* تجميل وعناية */
    "electric-burner"      /* منزل */
];

/* تعبئة الصفحة الرئيسية (project3.html) بمعاينات مختصرة */
function renderHomePage() {
    var featuredEl = document.getElementById('featured-products-container');
    if (!featuredEl) {
        return; /* لسنا في الصفحة الرئيسية */
    }

    var featuredHtml = "";
    for (var i = 0; i < FEATURED_IDS.length; i++) {
        var p = getProductById(FEATURED_IDS[i]);
        if (p) {
            featuredHtml += buildCard(p);
        }
    }
    featuredEl.innerHTML = featuredHtml;

    /* العروض: المنتجات المصنفة offers فقط */
    var offersHtml = "";
    for (var j = 0; j < PRODUCTS.length; j++) {
        if (PRODUCTS[j].section === 'offers') {
            offersHtml += buildCard(PRODUCTS[j]);
        }
    }
    var offersEl = document.getElementById('offers-container');
    if (offersEl) {
        offersEl.innerHTML = offersHtml || '<p class="empty-note">لا توجد عروض حالياً.</p>';
    }

    /* الأعلى تقييمًا: المنتجات المصنفة best-sellers فقط */
    var bestHtml = "";
    for (var k = 0; k < PRODUCTS.length; k++) {
        if (PRODUCTS[k].section === 'best-sellers') {
            bestHtml += buildCard(PRODUCTS[k]);
        }
    }
    var bestEl = document.getElementById('best-sellers-container');
    if (bestEl) {
        bestEl.innerHTML = bestHtml || '<p class="empty-note">لا توجد منتجات في هذا القسم.</p>';
    }

    /* جديدنا: معاينة 4 فقط، دون تكرار المنتجات المميزة */
    var newHtml = "";
    var newCount = 0;
    for (var m = 0; m < PRODUCTS.length && newCount < 4; m++) {
        var prod = PRODUCTS[m];
        if (prod.section === 'new-arrivals' && FEATURED_IDS.indexOf(prod.id) === -1) {
            newHtml += buildCard(prod);
            newCount++;
        }
    }
    var newEl = document.getElementById('new-arrivals-container');
    if (newEl) {
        newEl.innerHTML = newHtml || '<p class="empty-note">لا توجد منتجات جديدة حالياً.</p>';
    }
}

/* عناوين صفحات القوائم حسب المعامل */
function storeViewTitle(view, cat) {
    if (cat) {
        var catTitles = {
            electronics: "الإلكترونيات",
            clothing: "الملابس",
            beauty: "التجميل والعناية",
            home: "المنزل واللوازم المنزلية"
        };
        return catTitles[cat] || "التصنيفات";
    }
    var viewTitles = {
        all: "منتجاتنا",
        offers: "العروض",
        "best-sellers": "⭐ الأعلى تقييمًا",
        "new-arrivals": "جديدنا"
    };
    return viewTitles[view] || "منتجاتنا";
}

/* تجميع منتجات صفحة القائمة حسب المعامل */
function storeViewProducts(view, cat) {
    if (cat) {
        var byCat = [];
        for (var i = 0; i < PRODUCTS.length; i++) {
            if (PRODUCTS[i].category === cat) {
                byCat.push(PRODUCTS[i]);
            }
        }
        return byCat;
    }
    if (view === 'offers' || view === 'best-sellers' || view === 'new-arrivals') {
        var bySection = [];
        for (var j = 0; j < PRODUCTS.length; j++) {
            if (PRODUCTS[j].section === view) {
                bySection.push(PRODUCTS[j]);
            }
        }
        return bySection;
    }
    return PRODUCTS.slice(); /* view=all أو غير معروف */
}

/* تعبئة صفحة القوائم (store-view.html) */
function renderStoreView() {
    var container = document.getElementById('store-view-container');
    if (!container) {
        return; /* لسنا في صفحة القوائم */
    }

    var view = getUrlParam('view');
    var cat = getUrlParam('cat');
    var query = (getUrlParam('q') || '').trim();
    var list = query ? searchProducts(query) : storeViewProducts(view, cat);
    var title = query ? 'نتائج البحث عن «' + escapeHtml(query) + '»' : storeViewTitle(view, cat);

    /* إبقاء كلمة البحث داخل خانة البحث */
    var searchInput = document.querySelector('.store-search input[name="q"]');
    if (searchInput && query) {
        searchInput.value = query;
    }

    var head = document.getElementById('store-view-head');
    if (head) {
        head.innerHTML =
            '<h1 class="store-view-title">' + title + '</h1>' +
            '<p class="store-view-crumb"><a href="project3.html">الرئيسية</a> ← ' + title + '</p>' +
            (list.length > 1
                ? '<div class="store-view-tools">' +
                      '<span class="store-view-count">' + list.length + ' منتجات</span>' +
                      '<label class="store-sort">ترتيب حسب: ' +
                          '<select id="store-sort">' +
                              '<option value="default">الافتراضي</option>' +
                              '<option value="price-asc">السعر: من الأقل إلى الأعلى</option>' +
                              '<option value="price-desc">السعر: من الأعلى إلى الأقل</option>' +
                              '<option value="rating">الأعلى تقييمًا</option>' +
                          '</select>' +
                      '</label>' +
                  '</div>'
                : '');
    }

    function draw(sortBy) {
        var sorted = sortProducts(list, sortBy);
        var html = "";
        for (var i = 0; i < sorted.length; i++) {
            html += buildCard(sorted[i]);
        }
        container.innerHTML = html || (query
            ? '<p class="empty-note">لم نجد منتجات تطابق «' + escapeHtml(query) + '». جرّب كلمة أخرى.</p>'
            : '<p class="empty-note">لا توجد منتجات في هذا القسم.</p>');
    }

    draw('default');
    var sortEl = document.getElementById('store-sort');
    if (sortEl) {
        sortEl.addEventListener('change', function () {
            draw(sortEl.value);
        });
    }

    document.title = (query ? 'بحث: ' + query : title) + ' | Zero Market';
}

/* البحث في الاسم والوصف ونص الصورة — دون تمييز بين الحروف الكبيرة والصغيرة */
function searchProducts(query) {
    var words = normalizeSearch(query).split(/\s+/).filter(Boolean);
    var results = [];
    for (var i = 0; i < PRODUCTS.length; i++) {
        var p = PRODUCTS[i];
        var haystack = normalizeSearch(p.name + ' ' + p.description + ' ' + p.alt + ' ' + (p.tags || '') + ' ' + storeViewTitle(null, p.category));
        /* كل كلمة في البحث يجب أن توجد في المنتج */
        var allFound = words.every(function (w) { return haystack.indexOf(w) !== -1; });
        if (allFound) {
            results.push(p);
        }
    }
    return results;
}

/* توحيد أشكال الحروف حتى يجد البحث "اضاءة" و"إضاءة" معًا */
function normalizeSearch(text) {
    return String(text).toLowerCase()
        .replace(/[أإآ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .replace(/[\u064B-\u0652]/g, ''); /* إزالة التشكيل */
}

function sortProducts(list, sortBy) {
    var copy = list.slice();
    if (sortBy === 'price-asc') {
        copy.sort(function (a, b) { return a.price - b.price; });
    } else if (sortBy === 'price-desc') {
        copy.sort(function (a, b) { return b.price - a.price; });
    } else if (sortBy === 'rating') {
        copy.sort(function (a, b) { return (b.rating || 0) - (a.rating || 0); });
    }
    return copy;
}

/* =====================================================
   تشغيل العرض بعد تحميل DOM بطريقة آمنة
   - renderProductDetail: يعمل في product.html فقط
   - renderStoreView: يعمل في store-view.html فقط
   - renderHomePage: يعمل في project3.html فقط
   ===================================================== */
/* =====================================================
   سلة المشتريات
   - تُحفظ في localStorage فتبقى عند التنقل بين الصفحات
   - تُرسل كل المنتجات في رسالة واتساب واحدة مع المجموع
   - لوحة السلة تُبنى من هنا، فلا تحتاج الصفحات إلا زر .cart-btn
   ===================================================== */
var CART_KEY = "zero-market-cart";
var cart = loadCart();

function loadCart() {
    try {
        var saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
        /* نحتفظ فقط بمنتجات ما زالت موجودة في PRODUCTS */
        return saved.filter(function (item) {
            return item && getProductById(item.id) && item.qty > 0;
        });
    } catch (e) {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
        /* التخزين غير متاح (وضع التصفح الخاص مثلًا): السلة تعمل في هذه الصفحة فقط */
    }
}

function addToCartButton(product) {
    return '<button type="button" class="add-cart-btn" data-add-to-cart="' + product.id + '">' +
               '➕ أضف إلى السلة' +
           '</button>';
}

function cartCount() {
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        count += cart[i].qty;
    }
    return count;
}

function cartTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += getProductById(cart[i].id).price * cart[i].qty;
    }
    return Math.round(total * 100) / 100;
}

function findCartItem(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return cart[i];
        }
    }
    return null;
}

function addToCart(id) {
    var item = findCartItem(id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ id: id, qty: 1 });
    }
    saveCart();
    renderCart();
    showToast("✅ تمت الإضافة إلى السلة");
}

function changeQty(id, delta) {
    var item = findCartItem(id);
    if (!item) {
        return;
    }
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(function (it) { return it.id !== id; });
    }
    saveCart();
    renderCart();
}

/* رسالة واتساب واحدة تضم كل المنتجات والكميات والمجموع */
function waCartLink(customer) {
    var currency = cart.length ? getProductById(cart[0].id).currency : "";
    var lines = ["السلام عليكم، أريد طلب المنتجات التالية:", ""];
    for (var i = 0; i < cart.length; i++) {
        var p = getProductById(cart[i].id);
        lines.push((i + 1) + ") " + p.name + " × " + cart[i].qty +
                   " = " + formatPrice(Math.round(p.price * cart[i].qty * 100) / 100) + " " + p.currency);
    }
    lines.push("");
    lines.push("المجموع: " + formatPrice(cartTotal()) + " " + currency);
    if (customer) {
        lines.push("");
        lines.push("👤 الاسم: " + customer.name);
        lines.push("🏙️ المدينة: " + customer.city);
        lines.push("📍 العنوان: " + customer.address);
        if (customer.note) {
            lines.push("📝 ملاحظة: " + customer.note);
        }
    }
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
}

/* بناء لوحة السلة مرة واحدة في كل صفحة فيها زر .cart-btn */
function setupCart() {
    var cartBtn = document.querySelector('.cart-btn');
    if (!cartBtn) {
        return;
    }

    cartBtn.insertAdjacentHTML('beforeend', '<span class="cart-count" hidden>0</span>');

    document.body.insertAdjacentHTML('beforeend',
        '<div class="cart-overlay" hidden></div>' +
        '<aside class="cart-drawer" role="dialog" aria-modal="true" aria-label="سلة المشتريات" aria-hidden="true">' +
            '<div class="cart-drawer-head">' +
                '<h2>🛒 سلة المشتريات</h2>' +
                '<button type="button" class="cart-close" aria-label="إغلاق السلة">✕</button>' +
            '</div>' +
            '<div class="cart-items"></div>' +
            '<div class="cart-drawer-foot">' +
                '<p class="cart-total-row">المجموع: <strong class="cart-total"></strong></p>' +
                '<form class="cart-form" novalidate>' +
                    '<p class="cart-form-title">معلومات التوصيل</p>' +
                    '<input type="text" name="name" placeholder="الاسم الكامل *" autocomplete="name" required>' +
                    '<input type="text" name="city" placeholder="المدينة *" autocomplete="address-level2" required>' +
                    '<input type="text" name="address" placeholder="العنوان (الحي، الشارع...) *" autocomplete="street-address" required>' +
                    '<input type="text" name="note" placeholder="ملاحظة (اختياري)">' +
                    '<p class="cart-form-error" role="alert" hidden>المرجو ملء الاسم والمدينة والعنوان.</p>' +
                    '<button type="submit" class="order-btn cart-checkout">📲 أرسل الطلب عبر واتساب</button>' +
                '</form>' +
                '<button type="button" class="cart-clear">إفراغ السلة</button>' +
            '</div>' +
        '</aside>' +
        '<div class="cart-toast" role="status" aria-live="polite"></div>'
    );

    cartBtn.addEventListener('click', openCart);
    document.querySelector('.cart-overlay').addEventListener('click', closeCart);
    document.querySelector('.cart-close').addEventListener('click', closeCart);
    document.querySelector('.cart-clear').addEventListener('click', function () {
        cart = [];
        saveCart();
        renderCart();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeCart();
        }
    });

    /* نموذج التوصيل: نتحقق من الحقول ثم نفتح واتساب برسالة الطلب الكاملة */
    var form = document.querySelector('.cart-form');
    var savedCustomer = loadCustomer();
    for (var field in savedCustomer) {
        if (form.elements[field]) {
            form.elements[field].value = savedCustomer[field];
        }
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var customer = {
            name: form.elements.name.value.trim(),
            city: form.elements.city.value.trim(),
            address: form.elements.address.value.trim(),
            note: form.elements.note.value.trim()
        };
        var errorEl = form.querySelector('.cart-form-error');
        var missing = ['name', 'city', 'address'].filter(function (k) { return !customer[k]; });
        ['name', 'city', 'address'].forEach(function (k) {
            form.elements[k].classList.toggle('invalid', missing.indexOf(k) !== -1);
        });
        if (missing.length) {
            errorEl.hidden = false;
            form.elements[missing[0]].focus();
            return;
        }
        errorEl.hidden = true;
        saveCustomer(customer);
        var url = waCartLink(customer);
        var win = window.open(url, '_blank');
        if (!win) {
            window.location.href = url;
        }
    });

    /* أزرار الإضافة والكميات تُبنى ديناميكيًا، لذلك نستمع على مستوى الصفحة */
    document.addEventListener('click', function (e) {
        var addBtn = e.target.closest('[data-add-to-cart]');
        if (addBtn) {
            addToCart(addBtn.getAttribute('data-add-to-cart'));
            return;
        }
        var qtyBtn = e.target.closest('[data-qty]');
        if (qtyBtn) {
            changeQty(qtyBtn.getAttribute('data-id'), parseInt(qtyBtn.getAttribute('data-qty'), 10));
        }
    });

    renderCart();
}

function renderCart() {
    var countEl = document.querySelector('.cart-count');
    var itemsEl = document.querySelector('.cart-items');
    if (!countEl || !itemsEl) {
        return;
    }

    var count = cartCount();
    countEl.textContent = count;
    countEl.hidden = count === 0;

    var foot = document.querySelector('.cart-drawer-foot');
    if (!cart.length) {
        itemsEl.innerHTML = '<p class="cart-empty">السلة فارغة. أضف منتجات بالضغط على «أضف إلى السلة».</p>';
        foot.hidden = true;
        return;
    }

    var html = "";
    for (var i = 0; i < cart.length; i++) {
        var p = getProductById(cart[i].id);
        html +=
            '<div class="cart-item">' +
                '<img src="' + p.image + '" alt="' + p.alt + '">' +
                '<div class="cart-item-info">' +
                    '<p class="cart-item-name">' + p.name + '</p>' +
                    '<p class="cart-item-price">' + formatPrice(p.price) + ' ' + p.currency + '</p>' +
                    '<div class="cart-qty">' +
                        '<button type="button" data-qty="1" data-id="' + p.id + '" aria-label="زيادة الكمية">+</button>' +
                        '<span>' + cart[i].qty + '</span>' +
                        '<button type="button" data-qty="-1" data-id="' + p.id + '" aria-label="إنقاص الكمية">−</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }
    itemsEl.innerHTML = html;
    foot.hidden = false;
    document.querySelector('.cart-total').textContent =
        formatPrice(cartTotal()) + ' ' + getProductById(cart[0].id).currency;
}

/* معلومات الزبون تُحفظ في جهازه فقط، حتى لا يكتبها مرة أخرى في الطلب القادم */
var CUSTOMER_KEY = "zero-market-customer";

function loadCustomer() {
    try {
        return JSON.parse(localStorage.getItem(CUSTOMER_KEY) || "{}") || {};
    } catch (e) {
        return {};
    }
}

function saveCustomer(customer) {
    try {
        localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
    } catch (e) {
        /* التخزين غير متاح — لا مشكلة، الطلب يُرسل عاديًا */
    }
}

function openCart() {
    document.querySelector('.cart-overlay').hidden = false;
    var drawer = document.querySelector('.cart-drawer');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    var drawer = document.querySelector('.cart-drawer');
    if (!drawer) {
        return;
    }
    document.querySelector('.cart-overlay').hidden = true;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

var toastTimer = null;
function showToast(text) {
    var toast = document.querySelector('.cart-toast');
    if (!toast) {
        return;
    }
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        toast.classList.remove('show');
    }, 1800);
}

/* =====================================================
   واجهة المتجر المشتركة: شريط الثقة + زر واتساب العائم + التذييل
   - تعمل في كل صفحة فيها .store-header (صفحات المتجر فقط)
   ===================================================== */
function setupStoreChrome() {
    if (!document.querySelector('.store-header')) {
        return;
    }

    /* شريط الثقة — يوضع داخل #trust-bar إن وُجد في الصفحة */
    var trustEl = document.getElementById('trust-bar');
    if (trustEl) {
        var trustHtml = "";
        for (var i = 0; i < STORE_FEATURES.length; i++) {
            var f = STORE_FEATURES[i];
            trustHtml +=
                '<div class="trust-item">' +
                    '<span class="trust-icon">' + f.icon + '</span>' +
                    '<div><strong>' + f.title + '</strong><span>' + f.text + '</span></div>' +
                '</div>';
        }
        trustEl.innerHTML = trustHtml;
    }

    var waHello = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
        encodeURIComponent("السلام عليكم، عندي سؤال عن منتجات Zero Market");
    var waBuild = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
        encodeURIComponent("السلام عليكم، رأيت متجر Zero Market وأريد متجرًا مثله لمنتجاتي");

    /* زر واتساب العائم */
    document.body.insertAdjacentHTML('beforeend',
        '<a class="wa-float" href="' + waHello + '" target="_blank" rel="noopener" aria-label="تواصل معنا عبر واتساب">' +
            '<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" fill="currentColor">' +
                '<path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.8-3.8-1.8-5.9C5 10 10 5.2 16 5.2S27 10 27 15.9 22 26.4 16 26.4zm6-7.8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.6-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.5c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z"/>' +
            '</svg>' +
        '</a>'
    );

    /* التذييل — يعرض روابط المتجر، ثم توقيع Project Zero في الأسفل */
    var year = new Date().getFullYear();
    document.body.insertAdjacentHTML('beforeend',
        '<footer class="store-footer">' +
            '<div class="store-footer-cols">' +
                '<div>' +
                    '<p class="store-footer-brand">Zero Market</p>' +
                    '<p>منتجات مختارة بعناية، وطلب سهل عبر واتساب.</p>' +
                '</div>' +
                '<div>' +
                    '<p class="store-footer-title">تسوّق</p>' +
                    '<a href="store-view.html?view=all">كل المنتجات</a>' +
                    '<a href="store-view.html?view=offers">العروض</a>' +
                    '<a href="store-view.html?view=new-arrivals">جديدنا</a>' +
                '</div>' +
                '<div>' +
                    '<p class="store-footer-title">لماذا نحن؟</p>' +
                    '<ul>' + featuresList() + '</ul>' +
                '</div>' +
                '<div>' +
                    '<p class="store-footer-title">تواصل معنا</p>' +
                    '<a href="' + waHello + '" target="_blank" rel="noopener">💬 واتساب</a>' +
                '</div>' +
            '</div>' +
            '<div class="store-footer-bottom">' +
                '<span>© ' + year + ' Zero Market</span>' +
                '<span>صُمّم بواسطة <a href="index.html">Project Zero</a> · ' +
                    '<a href="' + waBuild + '" target="_blank" rel="noopener">تريد متجرًا مثل هذا؟</a></span>' +
            '</div>' +
        '</footer>'
    );
}

document.addEventListener('DOMContentLoaded', function () {
    renderProductDetail();
    renderStoreView();
    renderHomePage();
    setupCart();
    setupStoreChrome();
});
