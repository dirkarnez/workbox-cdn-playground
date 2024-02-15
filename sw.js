importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');

// Cache runtime requests
workbox.routing.registerRoute(
  new RegExp('./files/'),
  new workbox.strategies.CacheFirst()
);
