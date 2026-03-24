// ============================================
// الملف الرئيسي - لا تغير إلا إذا كنت فاهم
// ============================================

// متغير لحفظ آخر مقولة ظهرت
let lastQuoteIndex = -1;

// دالة لجلب مقولة عشوائية مختلفة عن السابقة
function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * QUOTES.length);
    } while (newIndex === lastQuoteIndex && QUOTES.length > 1);
    lastQuoteIndex = newIndex;
    return QUOTES[newIndex];
}

// عرض الصفحة الرئيسية مع مقولة عشوائية
function showWelcome() {
    const container = document.getElementById('iframeContainer');
    if (!container) return;
    
    const quote = getRandomQuote();
    const quoteLines = quote.split('\n').join('<br>');
    
    container.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; background: linear-gradient(145deg, #1e3c5c, #0f2a3f); color: white; text-align: center; padding: 30px; flex-direction:column; overflow-y: auto;">
            <i class="fas fa-graduation-cap" style="font-size: 4rem; color:#f9b81b; margin-bottom:20px;"></i>
            <h2 style="margin-bottom: 15px;">مرحباً بك في منصة ${SITE_CONFIG.siteName}</h2>
            <p style="margin-bottom: 25px; font-size:1.1rem;">${SITE_CONFIG.ownerName} | متعاونين على التفوق</p>
            
            <div style="max-width: 500px; margin: 20px auto; padding: 25px; background: rgba(255,255,255,0.1); border-radius: 30px; border-right: 4px solid #f9b81b;">
                <i class="fas fa-quote-right" style="color: #f9b81b; font-size: 1.5rem; margin-bottom: 15px; display: block;"></i>
                <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 15px;">${quoteLines}</p>
                <i class="fas fa-quote-left" style="color: #f9b81b; font-size: 1.2rem; display: block; text-align: left;"></i>
                <div style="margin-top: 15px; font-size: 0.9rem; opacity: 0.7;">
                    <i class="fas fa-user-graduate"></i> الدكتور خالد دعجه
                </div>
            </div>
            
            <div style="margin-top: 15px; font-size: 0.85rem; opacity: 0.6;">
                <i class="fas fa-sync-alt"></i> تتغير المقولة مع كل قسم جديد
            </div>
        </div>
    `;
}

// بناء القائمة من البيانات
function buildMenu() {
    const menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) return;
    
    menuContainer.innerHTML = '';
    
    MENU_STRUCTURE.forEach((section, index) => {
        if (section.type === 'featured') {
            // قسم مميز
            const featuredDiv = document.createElement('div');
            featuredDiv.className = 'featured-section';
            
            featuredDiv.innerHTML = `
                <div class="featured-header">
                    <i class="fas fa-users"></i> ${section.title} <i class="fas fa-star"></i>
                </div>
                <div class="featured-content">
                    <div class="featured-text">
                        <i class="fas fa-lightbulb"></i> تعاون - تنفيذ أفكار - مشاريع
                    </div>
                    ${section.items.map(item => `
                        <button class="discord-btn-special" onclick="handleAction('${item.action}', '${item.url}', this)">
                            <i class="${item.icon}"></i>
                            <span>${item.text}</span>
                        </button>
                    `).join('')}
                </div>
            `;
            menuContainer.appendChild(featuredDiv);
        } else {
            // قسم عادي
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'menu-section';
            
            sectionDiv.innerHTML = `
                <div class="menu-section-title">${section.title}</div>
                ${section.items.map(item => `
                    <button class="menu-btn" onclick="handleAction('${item.action}', '${item.url}', this)">
                        <i class="${item.icon}"></i>
                        <span>${item.text}</span>
                    </button>
                `).join('')}
            `;
            menuContainer.appendChild(sectionDiv);
        }
    });
    
    // إضافة الإيميل بشكل منفصل للقسم الأخير
    const lastSection = document.querySelector('.menu-section:last-child');
    if (lastSection) {
        const emailDiv = document.createElement('div');
        emailDiv.className = 'email-text';
        emailDiv.innerHTML = `<i class="fas fa-envelope"></i> ${SITE_CONFIG.email}`;
        lastSection.appendChild(emailDiv);
    }
}

// معالجة الضغط على الأزرار
function handleAction(action, url, buttonElement) {
    // كل ضغطة على زر تجعل المقولة الجديدة تظهر عند الرجوع للرئيسية
    lastQuoteIndex = -1;
    
    // تحديث الزر النشط
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (buttonElement && buttonElement.classList) {
        buttonElement.classList.add('active');
    }
    
    switch(action) {
        case 'iframe':
            loadIframe(url);
            break;
        case 'link':
            window.open(url, '_blank');
            break;
        case 'home':
            showWelcome();
            break;
        default:
            console.warn('Unknown action:', action);
    }
}

// تحميل المحتوى في iframe
function loadIframe(url) {
    const container = document.getElementById('iframeContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading" id="loadingIndicator">
            <i class="fas fa-spinner"></i> جاري التحميل...
        </div>
        <iframe id="contentFrame" src="${url}" style="width:100%; height:100%; display:none;" onload="hideLoading()"></iframe>
    `;
}

function hideLoading() {
    const loading = document.getElementById('loadingIndicator');
    const iframe = document.getElementById('contentFrame');
    if (loading && iframe) {
        loading.style.display = 'none';
        iframe.style.display = 'block';
    }
}

// تبديل القائمة للجوال
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// إغلاق القائمة في الجوال عند النقر
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const btn = e.target.closest('.menu-btn');
        const sidebar = document.getElementById('sidebar');
        if (btn && sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
});

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', () => {
    buildMenu();
    showWelcome();
    
    // تحديث اسم المالك في الهيدر
    const ownerElement = document.getElementById('ownerName');
    if (ownerElement) {
        ownerElement.textContent = SITE_CONFIG.ownerName;
    }
});
