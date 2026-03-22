// ============ المحتوى الحقيقي للموقع ============

// بناء الموقع
function buildSite() {
    const app = document.getElementById('app');
    if (!app) return;
    
    app.innerHTML = `
        <button class="theme-toggle" id="themeToggle">
            🌙 الوضع الليلي
        </button>
        
        <div class="container">
            <h1>LMJO 09</h1>
            <div class="my-name">
                <span>عبدالرحمن المعايطه</span>
            </div>
            <div class="motivation-box">
                <span>انفضوا النوم وهبوا للعلا فالعلا وقف على من لم ينم</span>
            </div>
            
            <!-- الصف الأول: فصل أول + فصل ثاني (بجنب بعض في الكمبيوتر، تحت بعض في التلفون) -->
            <div class="row-2col">
                <div class="card half" onclick="window.open('https://farmbot1238.github.io/s1/', '_blank')">
                    <i class="fas fa-book-open"></i> الفصل الأول
                </div>
                <div class="card half" onclick="window.open('https://farmbot1238.github.io/s2/', '_blank')">
                    <i class="fas fa-book-reader"></i> الفصل الثاني
                </div>
            </div>
            
            <!-- الصف الثاني: تحدي السرعة (كامل العرض) -->
            <div class="row-full">
                <div class="card full challenge-card" onclick="window.open('https://farmbot1238.github.io/thd1/', '_blank')">
                    ⚡ تحدي السرعة الشامل ⚡
                </div>
            </div>
            
            <!-- الصف الثالث: دعاء + واتساب (بجنب بعض في الكمبيوتر، تحت بعض في التلفون) -->
            <div class="row-2col">
                <div class="card half prayer-card" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSeOP7ow84vcJ-q8tm4YlHsKMCuGdoL-E5OCJw6C66PDrbMpWw/viewform', '_blank')">
                    <i class="fas fa-heart"></i> اقتراح / دعاء للطالب
                </div>
                <div class="card half whatsapp-card" onclick="window.open('https://wa.me/962798688787', '_blank')">
                    <i class="fab fa-whatsapp"></i> واتساب
                </div>
            </div>
            
            <div class="designer-signature">
                <div class="designer-name">عبدالرحمن المعايطه</div>
            </div>
        </div>
    `;
    
    // تفعيل الثيم
    initTheme();
}

// ========== نظام الثيم الصباحي والليلي ==========
function initTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    
    if (savedTheme === 'night') {
        document.body.classList.add('night-mode');
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) toggleBtn.innerHTML = '☀️ الوضع الصباحي';
    }
    
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const isNight = document.body.classList.toggle('night-mode');
    const toggleBtn = document.getElementById('themeToggle');
    
    if (isNight) {
        localStorage.setItem('siteTheme', 'night');
        if (toggleBtn) toggleBtn.innerHTML = '☀️ الوضع الصباحي';
    } else {
        localStorage.setItem('siteTheme', 'day');
        if (toggleBtn) toggleBtn.innerHTML = '🌙 الوضع الليلي';
    }
}

// تشغيل الموقع
buildSite();
