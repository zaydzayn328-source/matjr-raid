/* =====================================================
   Project Zero — Zero Market
   المرحلة الأولى: مصدر البيانات المركزي للمنتجات
   Central Product Data Source (Phase 1)
   ===================================================== */

/* رقم واتساب الرسمي للمتجر — المصدر الواحد لكل روابط الطلب */
var WHATSAPP_NUMBER = "212624726277";

/* =====================================================
   مصدر البيانات المركزي — جميع منتجات المتجر الحالية
   (4 منتجات إلكترونية + 6 منتجات جديدة الصورة لاحقًا)
   ===================================================== */
var PRODUCTS = [
    {
        id: "mechanical-keyboard",
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
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

    /* السعر القديم — يظهر في البطاقة فقط عندما يكون المنتج في قسم العروض
       (product.section === 'offers')، مع بقاء قيم oldPrice محفوظة في البيانات */
    var oldPriceHtml = (product.oldPrice && product.section === 'offers')
        ? '<p class="old-price">' + formatPrice(product.oldPrice) + ' ' + product.currency + '</p>'
        : '';

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
            '<a href="' + waOrderLink(product) + '" class="order-btn" target="_blank">' +
                '🛒 اطلب الآن' +
            '</a>' +
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

    /* السعر القديم — يظهر في صفحة التفاصيل فقط عندما يكون المنتج في قسم العروض
       (product.section === 'offers')، توافقًا مع بطاقات المنتجات */
    var oldPriceHtml = (product.oldPrice && product.section === 'offers')
        ? '<p class="old-price">' + formatPrice(product.oldPrice) + ' ' + product.currency + '</p>'
        : '';

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
                '<a href="' + waOrderLink(product) + '" class="order-btn product-detail-order" target="_blank">' +
                    '🛒 اطلب الآن' +
                '</a>' +
                backToStore +
            '</div>' +
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
    var list = storeViewProducts(view, cat);
    var title = storeViewTitle(view, cat);

    var head = document.getElementById('store-view-head');
    if (head) {
        head.innerHTML =
            '<h1 class="store-view-title">' + title + '</h1>' +
            '<p class="store-view-crumb">الرئيسية ← ' + title + '</p>';
    }

    var html = "";
    for (var i = 0; i < list.length; i++) {
        html += buildCard(list[i]);
    }
    container.innerHTML = html || '<p class="empty-note">لا توجد منتجات في هذا القسم.</p>';

    document.title = title + ' | Zero Market';
}

/* =====================================================
   تشغيل العرض بعد تحميل DOM بطريقة آمنة
   - renderProductDetail: يعمل في product.html فقط
   - renderStoreView: يعمل في store-view.html فقط
   - renderHomePage: يعمل في project3.html فقط
   ===================================================== */
document.addEventListener('DOMContentLoaded', function () {
    renderProductDetail();
    renderStoreView();
    renderHomePage();
});
