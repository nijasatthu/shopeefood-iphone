const CACHE = 'shopeefood-iphone-v620-r1';
const SHELL = ['./', './index.html', './logo.png', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k.startsWith('shopeefood-iphone-')).map(k => caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(response => {
      if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); }
      return response;
    }).catch(() => caches.match(req).then(c => c || caches.match('./index.html'))));
  } else {
    event.respondWith(caches.match(req).then(c => c || fetch(req).then(r => {
      if (r.ok) { const copy=r.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); }
      return r;
    })));
  }
});
