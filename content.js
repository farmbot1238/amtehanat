// ============ المحتوى الحقيقي للموقع ============
// هذا الملف هو قلب الموقع، بدونه الموقع فاضي

// التحقق من وجود ملف CSS قبل تحميل المحتوى
function checkRequiredFiles() {
    // إذا كان الموقع يعمل محلياً (من جهاز المستخدم) وليس من السيرفر
    if (window.location.protocol === 'file:') {
        showTrapMessage();
        return false;
    }
    return true;
}

// عرض رسالة الاستهزاء
function showTrapMessage() {
    document.body.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        ">
            <div style="
                background: #0f0f1a;
                border-radius: 30px;
                padding: 50px;
                max-width: 700px;
                text-align: center;
                border: 3px solid #ff4444;
                box-shadow: 0 0 50px rgba(255,68,68,0.3);
                animation: shake 0.5s ease-in-out infinite;
            ">
                <div style="font-size: 6em; animation: spin 2s linear infinite;">😂😂😂</div>
                <div style="font-size: 2.5em; color: #ff4444; margin: 20px 0;">هههههههههههههههه</div>
                <div style="font-size: 1.5em; color: #ffaa44; margin: 20px 0;">
                    مفكر حالك قوي؟<br>
                    بتحاول تسرق الموقع؟<br>
                    <span style="animation: blink 1s step-start infinite;">ارجع وراك ههههههههههه</span>
                </div>
                <div style="font-size: 1.2em; color: #888; margin-top: 30px; padding-top: 20px; border-top: 1px dashed #ff4444;">
                    ⚠️ الموقع الحقيقي يحتاج ملفات إضافية ⚠️<br>
                    ما رح تشوف شي يا فنان 😏
                </div>
            </div>
        </div>
        <style>
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes blink {
                50% { opacity: 0; }
            }
        </style>
    `;
    
    // تشويش على Console
    console.clear();
    console.log("%c😂😂😂 مفكر حالك قوي؟ بتحاول تسرق الموقع؟ 😂😂😂", "color: red; font-size: 20px;");
    console.log("%cالملفات المطلوبة مش موجودة يا فنان", "color: orange; font-size: 16px;");
    console.log("%cstyles.css و content.js - جيبهم أولاً 😏", "color: yellow; font-size: 14px;");
}

// بناء الموقع الحقيقي
function buildSite() {
    const app = document.getElementById('app');
    if (!app) return;
    
    app.innerHTML = `
        <div class="container">
            <h1>متعاونين على التفوق</h1>
            <div class="my-name">عبدالرحمن المعايطه</div>
            <div class="motivation-box">انفضوا النوم وهبوا للعلا فالعلا وقف على من لم ينم</div>
            
            <div class="sections-grid">
                <div class="section-card" onclick="window.open('https://farmbot1238.github.io/s1/', '_blank')">
                    📘 الفصل الأول
                </div>
                <div class="section-card" onclick="window.open('https://farmbot1238.github.io/s2/', '_blank')">
                    📗 الفصل الثاني
                </div>
                <div class="section-card" onclick="window.open('https://farmbot1238.github.io/thd1/', '_blank')">
                    ⚡ تحدي السرعة الشامل
                </div>
                <div class="section-card" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSeOP7ow84vcJ-q8tm4YlHsKMCuGdoL-E5OCJw6C66PDrbMpWw/viewform', '_blank')">
                    🤲 اقتراح / دعاء للطالب
                </div>
            </div>
            
            <div style="text-align: center;">
                <a href="https://wa.me/962798688787" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> واتساب
                </a>
            </div>
            
            <div class="designer-signature">
                <div class="designer-name">عبدالرحمن المعايطه</div>
            </div>
        </div>
    `;
}

// تشغيل كل شيء
if (checkRequiredFiles()) {
    buildSite();
}
