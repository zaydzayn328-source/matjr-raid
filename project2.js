/* =====================================================
   Project Zero — Project 2: Best Value (MVP Phase 1)
   خاص بـ project2.html فقط — معزول تمامًا عن script.js
   - لا API ولا بيانات خارجية — الصورة معاينة محلية فقط
   ===================================================== */
(function () {
    "use strict";

    var form = document.getElementById("pg2-form");
    if (!form) {
        return; /* لسنا في صفحة Project 2 */
    }

    var inputImage = document.getElementById("pg2-image");
    var previewBox = document.getElementById("pg2-image-preview");
    var previewImg = document.getElementById("pg2-preview-img");
    var btnRemoveImage = document.getElementById("pg2-remove-image");
    var inputName = document.getElementById("pg2-name");
    var inputPrice = document.getElementById("pg2-price");
    var selCondition = document.getElementById("pg2-condition");
    var selWarranty = document.getElementById("pg2-warranty");
    var selReturn = document.getElementById("pg2-return");
    var selSeller = document.getElementById("pg2-seller");
    var selSource = document.getElementById("pg2-source");
    var fieldName = document.getElementById("pg2-field-name");
    var fieldPrice = document.getElementById("pg2-field-price");
    var nameErrorEl = document.getElementById("pg2-name-error");
    var priceErrorEl = document.getElementById("pg2-price-error");
    var resultSection = document.getElementById("pg2-result");
    var resultCard = document.getElementById("pg2-result-card");

    var hasEvaluated = false;
    var imageObjectUrl = null;

    /* ============ أدوات مساعدة ============ */

    function esc(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function formatPrice(value) {
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    /* ============ الصورة: معاينة محلية فقط ============ */

    function clearImagePreview() {
        if (imageObjectUrl) {
            URL.revokeObjectURL(imageObjectUrl);
            imageObjectUrl = null;
        }
        previewBox.hidden = true;
        previewImg.removeAttribute("src");
    }

    function handleImageFile(file) {
        clearImagePreview();
        if (!file) {
            return;
        }
        var isImage = file.type && file.type.indexOf("image/") === 0;
        if (!isImage) {
            inputImage.value = "";
            return;
        }
        imageObjectUrl = URL.createObjectURL(file);
        previewImg.src = imageObjectUrl;
        previewBox.hidden = false;
    }

    /* ============ التحقق من الحقول ============ */

    function clearErrors() {
        fieldName.classList.remove("pg2-has-error");
        fieldPrice.classList.remove("pg2-has-error");
        nameErrorEl.textContent = "";
        priceErrorEl.textContent = "";
    }

    function readPrice() {
        var raw = inputPrice.value.trim().replace(/[،,]/g, "");
        if (raw === "") {
            return null;
        }
        var value = parseFloat(raw);
        if (isNaN(value) || value <= 0) {
            return null;
        }
        return value;
    }

    function validateInputs() {
        clearErrors();
        var valid = true;

        if (inputName.value.trim() === "") {
            fieldName.classList.add("pg2-has-error");
            nameErrorEl.textContent = "أدخل اسم المنتج أو وصفه قبل التقييم.";
            valid = false;
        }

        if (readPrice() === null) {
            fieldPrice.classList.add("pg2-has-error");
            priceErrorEl.textContent = "أدخل السعر المعروض بالدرهم (د.م.).";
            valid = false;
        }

        return valid;
    }

    /* ============ منطق التقييم ============ */

    /*
       كل معيار يأخذ نقاطًا: +1 إيجابي / 0 محايد أو مجهول / -1 سلبي
       ثم يحوَّل المجموع إلى «مؤشر الصفقة» من 0 إلى 100 بشفافية كاملة.
    */

    function factorResult(key, value) {
        var map = {
            condition: {
                new:     { points:  1, kind: "positive", text: "حالة المنتج: جديد" },
                used:    { points:  0, kind: "neutral",  text: "حالة المنتج: مستعمل — يلزم فحص أوثق" },
                unknown: { points:  0, kind: "unknown",  text: "حالة المنتج غير معروفة" }
            },
            warranty: {
                yes:     { points:  1, kind: "positive", text: "يوجد ضمان واضح" },
                no:      { points: -1, kind: "negative", text: "لا يوجد ضمان" },
                unknown: { points:  0, kind: "unknown",  text: "الضمان غير معروف" }
            },
            returns: {
                yes:     { points:  1, kind: "positive", text: "يوجد إرجاع واضح" },
                no:      { points: -1, kind: "negative", text: "لا يوجد إرجاع" },
                unknown: { points:  0, kind: "unknown",  text: "الإرجاع غير معروف" }
            },
            seller: {
                clear:   { points:  1, kind: "positive", text: "معلومات واضحة عن البائع" },
                limited: { points:  0, kind: "neutral",  text: "معلومات البائع محدودة" },
                unknown: { points: -1, kind: "unknown",  text: "معلومات البائع غير معروفة" }
            },
            source: {
                clear:   { points:  1, kind: "positive", text: "توجد معلومات واضحة عن المصدر/الأصالة" },
                limited: { points:  0, kind: "neutral",  text: "معلومات المصدر/الأصالة محدودة" },
                unknown: { points: -1, kind: "unknown",  text: "معلومات المصدر/الأصالة غير معروفة" }
            }
        };

        if (map[key] && map[key][value]) {
            return map[key][value];
        }
        return { points: 0, kind: "unknown", text: "غير معروف" };
    }

    function computeResult(price) {
        var factors = [
            { key: "condition", value: selCondition.value },
            { key: "warranty",  value: selWarranty.value },
            { key: "returns",   value: selReturn.value },
            { key: "seller",    value: selSeller.value },
            { key: "source",    value: selSource.value }
        ];

        var total = 0;
        var details = [];
        var i;
        for (i = 0; i < factors.length; i++) {
            var r = factorResult(factors[i].key, factors[i].value);
            total += r.points;
            details.push(r);
        }

        var status;
        if (total >= 4) {
            status = { id: "good", icon: "🟢", title: "تبدو جيدة" };
        } else if (total <= -3) {
            status = { id: "caution", icon: "🔴", title: "توجد إشارات تستحق الحذر" };
        } else {
            status = { id: "verify", icon: "🟡", title: "تحتاج إلى تحقق" };
        }

        var score = Math.round(((total + 4) / 9) * 100);

        return {
            total: total,
            score: score,
            status: status,
            details: details,
            price: price
        };
    }

    var STATUS_SUMMARY = {
        good: "المعلومات المتوفرة إيجابية في معظمها. تذكّر أن هذا رأي استرشادي، وتحقّق من النقاط المتبقية قبل الدفع.",
        verify: "المعلومات ناقصة أو مختلطة بين إيجابي وسلبي. اسأل البائع عن الضمان والإرجاع والمصدر قبل أن تقرر.",
        caution: "توجد عدة عوامل سلبية أو مجهولة الأهمية. فكّر مرتين، واطلب تفاصيل موثقة قبل الدفع."
    };

    function buildReasons(result, hasImage) {
        var reasons = [];
        var i;

        for (i = 0; i < result.details.length; i++) {
            var d = result.details[i];
            if (d.kind === "positive") {
                reasons.push({ cls: "pos",  icon: "✓",  text: d.text });
            } else if (d.kind === "negative") {
                reasons.push({ cls: "neg",  icon: "✗",  text: d.text });
            } else if (d.kind === "neutral") {
                reasons.push({ cls: "neu",  icon: "ℹ️", text: d.text });
            } else {
                reasons.push({ cls: "warn", icon: "⚠️", text: d.text + " — لم نتمكن من التحقق منه" });
            }
        }

        reasons.push({
            cls: "warn",
            icon: "⚠️",
            text: "لا توجد مقارنة فعلية مع أسعار السوق في هذه النسخة — السعر المعروض: " +
                  formatPrice(result.price) + " د.م."
        });
        reasons.push({
            cls: "warn",
            icon: "⚠️",
            text: "لم يتم التحقق من الأصالة بشكل مستقل."
        });

        if (hasImage) {
            reasons.push({
                cls: "pos",
                icon: "✓",
                text: "تم توثيق صورة محلية للمنتج — معاينة فقط، ولا تُرسل لأي جهة خارجية."
            });
        }

        return reasons;
    }

    function buildUnverified(details) {
        var list = [
            "السعر الحقيقي في جميع المتاجر (لا مقارنة تلقائية في هذه النسخة).",
            "الأصالة بشكل مستقل — وجود «معلومات واضحة» لا يثبت أن المنتج أصلي.",
            "جودة المنتج الفعلية.",
            "تاريخ السعر وتقلباته.",
            "سمعة البائع خارج المعلومات التي أدخلتها."
        ];
        var i;
        for (i = 0; i < details.length; i++) {
            if (details[i].kind === "unknown" || details[i].kind === "neutral") {
                list.push(details[i].text + ".");
            }
        }
        return list;
    }

    /* ============ رسم بطاقة النتيجة ============ */

    function renderResult(result, hasImage) {
        var reasons = buildReasons(result, hasImage);
        var unverified = buildUnverified(result.details);

        var html = "";

        html += '<div class="pg2-result-status pg2-status-' + esc(result.status.id) + '">';
        html += result.status.icon + " " + esc(result.status.title);
        html += "</div>";

        html += '<p class="pg2-product">تم تقييم: <strong>' + esc(result.name) + "</strong> — السعر المعروض: ";
        html += formatPrice(result.price) + " د.م.</p>";

        html += '<p class="pg2-result-summary">' + esc(STATUS_SUMMARY[result.status.id]) + "</p>";

        html += '<div class="pg2-score">';
        html += '<div class="pg2-score-bar">';
        html += '<div class="pg2-score-fill pg2-score-fill-' + esc(result.status.id) + '"';
        html += ' style="width:' + result.score + '%;"></div>';
        html += "</div>";
        html += '<p class="pg2-score-label">مؤشر الصفقة: <strong>' + result.score + " / 100</strong></p>";
        html += '<p class="pg2-score-note">يعكس هذا المؤشر جودة المعلومات والظروف التي أدخلتها أنت فقط، وليس فحصًا للمنتج ولا تأكيدًا للأصالة.</p>';
        html += "</div>";

        html += "<h3>لماذا ظهرت هذه النتيجة؟</h3>";
        html += '<ul class="pg2-result-list">';
        var i;
        for (i = 0; i < reasons.length; i++) {
            html += '<li class="pg2-reason-' + esc(reasons[i].cls) + '">';
            html += reasons[i].icon + " " + esc(reasons[i].text);
            html += "</li>";
        }
        html += "</ul>";

        html += "<h3>ما الذي لم نتمكن من التحقق منه في هذه الصفقة؟</h3>";
        html += '<ul class="pg2-result-list">';
        for (i = 0; i < unverified.length; i++) {
            html += '<li class="pg2-reason-warn">⚠️ ' + esc(unverified[i]) + "</li>";
        }
        html += "</ul>";

        html += '<p class="pg2-result-dishonesty-note">النتيجة استرشادية: لا تُثبت أن المنتج أصلي، ولا أن السعر هو الأرخص في السوق، ولا أن الصفقة مضمونة.</p>';

        html += '<div class="pg2-result-actions">';
        html += '<button type="button" class="pg2-btn-rerun" id="pg2-rerun">إعادة التقييم</button>';
        html += '<button type="button" class="pg2-btn-ghost" id="pg2-reset">مسح البيانات</button>';
        html += "</div>";

        resultCard.innerHTML = html;

        var rerunBtn = document.getElementById("pg2-rerun");
        var resetBtn = document.getElementById("pg2-reset");
        if (rerunBtn) {
            rerunBtn.addEventListener("click", function () {
                returnToForm();
            });
        }
        if (resetBtn) {
            resetBtn.addEventListener("click", resetAll);
        }

        resultSection.hidden = false;
    }

    /* ============ التنفيذ والأحداث ============ */

    function evaluate(scroll) {
        if (!validateInputs()) {
            if (fieldName.classList.contains("pg2-has-error")) {
                inputName.focus();
            } else if (fieldPrice.classList.contains("pg2-has-error")) {
                inputPrice.focus();
            }
            return;
        }

        var result = computeResult(readPrice());
        result.name = inputName.value.trim();
        renderResult(result, imageObjectUrl !== null);
        hasEvaluated = true;

        if (scroll) {
            resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    function refreshIfEvaluated() {
        if (hasEvaluated) {
            evaluate(false);
        }
    }

    /* العودة إلى النموذج دون مسح البيانات (زر «إعادة التقييم») */
    function returnToForm() {
        resultSection.hidden = true;
        resultCard.innerHTML = "";
        hasEvaluated = false;
        var formSection = document.getElementById("pg2-evaluate");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            inputName.focus();
        }
    }

    function resetAll() {
        form.reset();
        clearImagePreview();
        clearErrors();
        hasEvaluated = false;
        resultSection.hidden = true;
        resultCard.innerHTML = "";
        inputName.focus();
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        evaluate(true);
    });

    inputName.addEventListener("input", function () {
        if (hasEvaluated) {
            evaluate(false);
            return;
        }
        if (fieldName.classList.contains("pg2-has-error")) {
            fieldName.classList.remove("pg2-has-error");
            nameErrorEl.textContent = "";
        }
    });

    inputPrice.addEventListener("input", function () {
        if (hasEvaluated) {
            evaluate(false);
            return;
        }
        if (fieldPrice.classList.contains("pg2-has-error")) {
            fieldPrice.classList.remove("pg2-has-error");
            priceErrorEl.textContent = "";
        }
    });

    var selectors = [selCondition, selWarranty, selReturn, selSeller, selSource];
    var si;
    for (si = 0; si < selectors.length; si++) {
        selectors[si].addEventListener("change", function () {
            refreshIfEvaluated();
        });
    }

})();