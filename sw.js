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
    "url": "webpack-runtime-d58257139dbc3662f387.js"
  },
  {
    "url": "app-149a317cb780bf9d06f5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-099492d5e59e7fea38fe.js"
  },
  {
    "url": "index.html",
    "revision": "52cd6fadb7a002d06b6f0d9af2a37185"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d4092ae43c2e86d6ec4a2a5339c80de6"
  },
  {
    "url": "component---src-pages-index-js.3e0c73c675a6f448aecf.css"
  },
  {
    "url": "component---src-pages-index-js-0cf276fbc557b7518d3e.js"
  },
  {
    "url": "9-c65ad9f2bc6e559af6a0.js"
  },
  {
    "url": "0-af560e059517141dcfb2.js"
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