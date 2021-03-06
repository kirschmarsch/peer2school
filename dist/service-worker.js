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

importScripts("/peer2school/dist/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/peer2school/dist/workbox-v4.3.1"});

importScripts(
  "/peer2school/dist/precache-manifest.710f4d7d3e8174653f8ddf41ae2b02f5.js"
);

workbox.core.setCacheNameDetails({prefix: "peer2school"});

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
