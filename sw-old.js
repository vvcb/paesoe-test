importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
if (workbox) {
  console.log('Workbox loaded successfully.');
  start();
} else {
  console.log('Workbox failed to load!');
}

function enableOfflineAnalytics() {
  // Enable Offline Google Analytics
  workbox.googleAnalytics.initialize({
    // Write Offline status to a custom dimension on GA
    parameterOverrides: {
      cd1: 'offline',
    },
    // Write Offline queue time to a custom metric on GA
    hitFilter: (params) => {
      const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
      params.set('cm1', queueTimeInSeconds);
    },
  });
}

function enablepreCache() {
  // Array.from(allUrls.html).map(
  //   e => {
  //     if (e.url == '/') {
  //       e.url = '/index.html';
  //     } else if (e.url.split('.').length == 1) {
  //       e.url = e.url + '.html';
  //     }
  //   }
  // )
  const urlsToPrecache = allUrls.html.concat(
    allUrls.css,
    allUrls.js,
    allUrls.images,
    allUrls.data, ['/manifest.json']
  )
  workbox.precaching.precacheAndRoute([]);

  workbox.precaching.cleanupOutdatedCaches();
}

function start() {

  // Rename default caches
  workbox.core.setCacheNameDetails({
    prefix: 'paesoe',
    suffix: 'cache',
    precache: 'precache',
    runtime: 'runtime'
  });
  enableOfflineAnalytics();
  enablepreCache();

  // Background Sync
  const bgSyncPlugin = new workbox.backgroundSync.Plugin('paesoeQueue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
  });


  // Cache first - Images
  workbox.routing.registerRoute(
    new RegExp('\.(?:png|jpg|jpeg|webp|gif|svg)$'),
    new workbox.strategies.CacheFirst({
      cacheName: 'paesoe-image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30
        }),
        // Enable Background sync if requests fail
        bgSyncPlugin
      ],
    })
  );

  // Cache first - JSON from assets/data
  workbox.routing.registerRoute(
    new RegExp('data\\.+\.json$'),
    new workbox.strategies.CacheFirst({
      cacheName: 'paesoe-data-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30
        }),
        bgSyncPlugin,
      ],
    })
  );
  
  // StaleWhileRevalidate - JS
  workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    new workbox.strategies.StaleWhileRevalidate()
  );
}
