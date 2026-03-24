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
