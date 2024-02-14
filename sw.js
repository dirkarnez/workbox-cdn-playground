importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.2.0/workbox-sw.js');

// Precache static assets
workbox.precaching.precacheAndRoute([
  { url: '/path/to/file1', revision: '12345' },
  { url: '/path/to/file2', revision: '67890' },
  // Add more files to precache as needed
]);

// Cache runtime requests
workbox.routing.registerRoute(
  new RegExp('/api/'),
  new workbox.strategies.NetworkFirst()
);
