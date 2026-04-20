const CACHE_NAME = 'madarik-jo-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/config.js',
  '/review.html',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://code.jquery.com/jquery-3.6.0.min.js',
  'https://code.jquery.com/ui/1.13.2/jquery-ui.min.js'
];

// تثبيت Service Worker وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ تم فتح الكاش وتخزين الملفات');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('❌ خطأ في التخزين:', err))
  );
  self.skipWaiting();
});

// استراتيجية: Cache First ثم الشبكة
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا وجد الملف في الكاش، أعده
        if (response) {
          return response;
        }
        // إذا لم يوجد، حمله من الشبكة
        return fetch(event.request)
          .then(networkResponse => {
            // لا نخزن الطلبات التي تفشل أو ليست GET
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          })
          .catch(() => {
            // إذا فشل الاتصال بالشبكة وليس في الكاش
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response('⚠️ لا يوجد اتصال بالإنترنت', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// تحديث Service Worker وإزالة الكاش القديم
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('🗑️ حذف الكاش القديم:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  event.waitUntil(clients.claim());
});
