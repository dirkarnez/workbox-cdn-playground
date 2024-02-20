[workbox-cdn-playground](https://dirkarnez.github.io/workbox-cdn-playground)
============================================================================
### Notes
- `navigator.serviceWorker.register` can only register by url with same origin domain
### TODOs
- [x]  `/files/*` files are cached for the first network fetching. **Browser will retrieve cached files by name, that means if server have edited the file, browser will not update its cache because new version still have the same name. Therefore, to trigger update, server file should be (re)named with version / random string suffix**
