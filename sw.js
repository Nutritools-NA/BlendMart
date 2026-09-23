// Service worker ขั้นต่ำ — มีไว้เพื่อให้ Chrome นับหน้านี้เป็น PWA ที่ติดตั้งได้
// (ไม่มีการ cache ใด ๆ แค่ปล่อยให้ทุก request ไปตามปกติ)
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
