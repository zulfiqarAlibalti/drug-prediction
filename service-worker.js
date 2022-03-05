/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/precache-manifest.b4e419e023972a26ba23d25914ea3736.js"
=======
  "/prediction/precache-manifest.d065034c2ad3ec9b7e9f90849e85c3b6.js"
>>>>>>> c2b2568 (frontend-deployment)
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< HEAD
workbox.routing.registerNavigationRoute("/index.html", {
=======
workbox.routing.registerNavigationRoute("/prediction/index.html", {
>>>>>>> c2b2568 (frontend-deployment)
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
