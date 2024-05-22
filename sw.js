const cacheName = 'static-nuupbussii-v14';
const urlsToCache = [
    '.',
    'index.html',
    'prices.html',
    'help.html',
    'busstyle.css',
    'timecalc.js'
];

self.addEventListener('install', event => {
    console.log('Install event!');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    console.log('Activate event!');
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});