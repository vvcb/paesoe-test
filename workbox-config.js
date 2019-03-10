module.exports = {
  globDirectory: "_site/",
  globPatterns: [
    "**/*.{html,css,json,jpg,jpeg,png,webp,js}"
  ],
  swDest: "./sw.js",
  manifestTransforms: [
    // Append baseurl to paths
    (originalManifest) => {
      const BASEURL = 'paesoe-test/';
      const manifest = originalManifest.map(entry => {
        if (!(entry.url.startsWith('http') ||
             entry.url.startsWith('www'))){
          entry.url = BASEURL + entry.url;
        }
        return entry;
      });
      
      return {manifest, warnings: []};
    }
  ],
  offlineGoogleAnalytics: {
    cacheName: 'paesoe-ga-cache',
    parameterOverrides: {
      cd1: 'offline'
    },
    hitFilter: (params) => {
      const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
      params.set('cm1', queueTimeInSeconds);
    }
  },
  // cleanupOutdatedCaches: true,
  runtimeCaching: [{
      urlPattern: new RegExp('data\\.+\.json$'),
      handler: 'cacheFirst',
      options: {
        cacheName: 'paesoe-data-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30
        },
        backgroundSync: {
          name: 'paesoeDataQueue',
          options: {
            maxRetentionTime: 24 * 60,
          }
        }
      }
    },
    {
      urlPattern: RegExp('\.(?:png|jpg|jpeg|webp|gif|svg)$'),
      handler: 'cacheFirst',
      options: {
        cacheName: 'paesoe-image-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30
        },
        backgroundSync: {
          name: 'paesoeImageQueue',
          options: {
            maxRetentionTime: 24 * 60,
          }
        }
      }
    }
  ]
};
