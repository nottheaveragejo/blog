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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-0165e7fca0edec0ef35f.js"
  },
  {
    "url": "app-4121f8232dc11a5df73d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-099492d5e59e7fea38fe.js"
  },
  {
    "url": "index.html",
    "revision": "f0fdb4e54cf0b812d40dac45e6277c9c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a0920c7c3c7c3a3e9faaab5ce4226cf9"
  },
  {
    "url": "0.71682ab9e851037ea0b2.css"
  },
  {
    "url": "component---src-pages-index-js.ca38ff44b2f81e6a8d63.css"
  },
  {
    "url": "component---src-pages-index-js-328420b025a3b2aff4dd.js"
  },
  {
    "url": "9-eb8d41cf4ee49883a75a.js"
  },
  {
    "url": "0-03a7d4c4fbfa4e996bfe.js"
  },
  {
    "url": "static/d/28/path---index-6a9-4yYXVfrAafd4qBq5wDnnUOINQRY.json",
    "revision": "62d27c6b71a42897ebf8e6d22be6979d"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/blog/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});