const cacheStatic = 'CDAA-Static-v4';
const cacheDynamic = 'CDAA-Dynamic';

const cacheFiles = [
    './',
    'index.html',
    'manifest.json',
    'assets/img/manifest/favicon.ico',
    'assets/img/manifest/icons/icon-72x72.png',
    'assets/img/manifest/icons/icon-96x96.png',
    'assets/img/manifest/icons/icon-128x128.png',
    'assets/img/manifest/icons/icon-144x144.png',
    'assets/img/manifest/icons/icon-152x152.png',
    'assets/img/manifest/icons/icon-192x192.png',
    'assets/img/manifest/icons/icon-384x384.png',
    'assets/img/manifest/icons/icon-512x512.png',
    'assets/img/navigation/gallery.svg',
    'assets/img/navigation/history.svg',
    'assets/img/navigation/more.svg',
    'assets/img/navigation/qrscan.svg',
    'assets/img/navigation/search.svg',
    'assets/img/navigation/selected/gallery.svg',
    'assets/img/navigation/selected/history.svg',
    'assets/img/navigation/selected/more.svg',
    'assets/img/navigation/selected/qrscan.svg',
    'assets/img/misc/point.svg',
    'assets/css/reset.css',
    'assets/css/styles.css',
    'assets/js/instascan.min.js',
    'assets/js/application.js',
    'assets/js/navigation.js',
    'assets/js/scanner.js',
    'https://fonts.googleapis.com/css?family=Lato&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://raw.githubusercontent.com/Inf166/WDSS19-Praxisarbeit-CDAA/master/API/gallery.json'
];

self.addEventListener('install', (event) => {
    console.log('[Service-Worker] Installed.');

    event.waitUntil(
        caches.open(cacheStatic).then(cache => cache.addAll(cacheFiles)).then(self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    console.log('[Service-Worker] Activated.');

    const currentCaches = [cacheStatic, cacheDynamic];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;
  
            return caches.open(cacheDynamic).then(cache => {
                return fetch(event.request).then(response => {
                    return cache.put(event.request, response.clone()).then(() => {
                        return response;
                    });
                });
            });
        })
    );
});