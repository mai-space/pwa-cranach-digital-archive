const staticAssets = [
    './',
    './gallery.html',
    './assets/css/reset.css',
    './assets/css/styles.css',
    './assets/js/app.js'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('cdaa-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    if (url.origin == location.origin) {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open('cdaa-dynamic');
    try {
        const result = await fetch(request);
        cache.put(request, result.clone());
        return result;
    } catch (err) {
        return await cache.match(request);
    }
}