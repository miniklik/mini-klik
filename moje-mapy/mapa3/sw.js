// Service Worker — Mapa Wspomnień
// Odpowiada za instalowalność (PWA) i podstawowe buforowanie na wypadek słabego internetu.

const CACHE_NAZWA = 'mapa-wspomnien-v1';
const PLIKI_DO_ZAPAMIETANIA = ['./', './index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAZWA).then((cache) => cache.addAll(PLIKI_DO_ZAPAMIETANIA)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nazwy) =>
      Promise.all(nazwy.filter((n) => n !== CACHE_NAZWA).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Strategia: najpierw sieć (żeby mapa zawsze była aktualna), a jeśli nie ma internetu — z bufora.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((odpowiedz) => {
        const kopia = odpowiedz.clone();
        caches.open(CACHE_NAZWA).then((cache) => cache.put(event.request, kopia)).catch(() => {});
        return odpowiedz;
      })
      .catch(() => caches.match(event.request).then((z_bufora) => z_bufora || caches.match('./index.html')))
  );
});
