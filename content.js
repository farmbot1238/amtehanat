// ============ المحتوى الحقيقي للموقع ============

// بناء الموقع الحقيقي
function buildSite() {
    const app = document.getElementById('app');
    if (!app) {
        console.error('❌ ما لقيت عنصر app');
        return;
    }
    
    console.log('✅ بني الموقع...');
    
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

// تشغيل الموقع مباشرة
buildSite();

// فحص إذا الـ CSS تحمّل
setTimeout(() => {
    const container = document.querySelector('.container');
    if (container) {
        console.log('✅ الموقع شغال 100%');
    } else {
        console.log('⚠️ المشكلة في تحميل CSS');
    }
}, 100);
