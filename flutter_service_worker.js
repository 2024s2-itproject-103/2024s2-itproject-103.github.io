'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d325b28029e9fe0451ae4d43e2faddb5",
"version.json": "aaea0d981c145368359a9f257c9b8abd",
"index.html": "9dc9290fde6885fd5f98754d265c2587",
"/": "9dc9290fde6885fd5f98754d265c2587",
"main.dart.js": "090d015b584fb930d0f2acb90fb89542",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5f2ee3606650fc1723d6388902d64022",
"icons/Icon-192.png": "9a9f70542544e187f1471d3c661983ab",
"icons/Icon-maskable-192.png": "9a9f70542544e187f1471d3c661983ab",
"icons/Icon-maskable-512.png": "53bd9d01c283097d620b2da49d34a64a",
"icons/Icon-512.png": "53bd9d01c283097d620b2da49d34a64a",
"manifest.json": "d5d62771641dbe518a5943203073ce4b",
"assets/AssetManifest.json": "36ee57262f242987fd730c7fe372bd90",
"assets/NOTICES": "bee79fe168cc8b701f976181bf47d686",
"assets/FontManifest.json": "54622dafb0753b9ed21d2cbe9caec828",
"assets/AssetManifest.bin.json": "bd006b025e390e16b47029e099b0c512",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "57deeda3dd57aaec523c45c26c65def6",
"assets/fonts/MaterialIcons-Regular.otf": "59aa1e1a5c28ca1d467a2c9b78a66740",
"assets/assets/images/appBar/person.svg": "b696e3150f7e16b8746cf3bbdcf28632",
"assets/assets/images/appBar/ambulance.png": "d36a7505767c31e49248cc3b48f0e14d",
"assets/assets/images/appBar/arrow_back.svg": "b431825ae684918e83a1d320bd9914fd",
"assets/assets/images/appBar/group.svg": "100277d6d8d1c620283972550a5c6962",
"assets/assets/images/appBar/settings.svg": "08dc67b3bbd693e1f7f182c1531cba3b",
"assets/assets/images/appBar/wifi.svg": "defa1db5bd34051ca3416727fd6ea1de",
"assets/assets/images/appBar/Call.png": "2d130788d3a33a9c2fe138fcdcdb3e98",
"assets/assets/images/appBar/Section-Divider-Art.svg": "a8991712c1b671c22cdf7d91bd8ffdad",
"assets/assets/images/footerBar/footer.svg": "ff3953dafa3bad93fdcacaec17af41b8",
"assets/assets/images/screeningTools/Group_2220.png": "8caa4492d7d26fa39d5365919bd3853e",
"assets/assets/images/screeningTools/Journey_Strip_1.png": "6fc4cabf2fe508ca4ab0c3a650afffbc",
"assets/assets/images/screeningTools/Coolamon_1.png": "85f382402ff601fbbcb0cd4b35f5b0ad",
"assets/assets/images/screeningTools/image_38.png": "bf5a93f48dfd9bfc39e91d913b11681c",
"assets/assets/images/screeningTools/image_8.png": "60f19d3b8698a09467c8d0e1a87d85ab",
"assets/assets/images/screeningTools/image_9.png": "e3e453fb26fc39c33765463615158c27",
"assets/assets/images/screeningTools/search.png": "293ade778091db38445c300dbed6242f",
"assets/assets/images/screeningTools/image_81.png": "e69d75ad25e4078dbf33ade794707776",
"assets/assets/images/screeningTools/image_7.png": "0deba7cc54dcf4387afe15ca9ad83ccb",
"assets/assets/images/screeningTools/Eagle_Circle_1.png": "bccdac53f6082a446dd7d863975ca763",
"assets/assets/images/screeningTools/image_6.png": "861a4322486267abaa7c875dff86e01c",
"assets/assets/images/screeningTools/image_19.png": "b9a1b05ebc598c6c614e5b0afa4cca2e",
"assets/assets/images/existingPatient/Follow-Up.pdf": "1177d0169422f1baecdc8c984dddd881",
"assets/assets/images/healthWorkerLogin/image1_371859.png": "bc5656824dcf0bda233513c5d6d4a480",
"assets/assets/images/healthWorkerLogin/image3_611496.png": "118ca7eddaa777d01cc18f9fc22f973d",
"assets/assets/images/healthWorkerLogin/image2_371861.png": "6d66e5c9e2bf4c0e52ef63801b0cbc67",
"assets/assets/images/healthWorkerLogin/image4_611575.png": "ccc319f95aac42afda219bb8a6caa8e6",
"assets/assets/images/healthWorkerLogin/image_1518.png": "ccfb6ac196d1d8e04900a75cbcce3599",
"assets/assets/images/patientProfile/breakline.svg": "fb3b0318affa9ece51075bedad5cc231",
"assets/assets/images/mentalHealthCheck/Happy.png": "b74ba7c3ad7da31bdc9b9d7b83b76775",
"assets/assets/images/mentalHealthCheck/Neutral.png": "5ed3f147810fdb2a5d4f09bef5949e1e",
"assets/assets/images/mentalHealthCheck/Sad.png": "a08fcc01250eafd0c37f409b345e3872",
"assets/assets/images/mentalHealthCheck/image3_841687.png": "97041242361e7f990771d553f77cca01",
"assets/assets/images/mentalHealthCheck/image4_6342225.png": "4ab8bd86a50e0742b977f9a71df33201",
"assets/assets/images/mentalHealthCheck/image2_421518.png": "6e66e97dacdd8a38e2e9819801dfba12",
"assets/assets/images/mentalHealthCheck/Content.png": "b7596e9a53547a7936fd52af3cde2320",
"assets/assets/images/mentalHealthCheck/Angry.png": "bc7d2724466f4d478e38ba1df8833dfc",
"assets/assets/images/mentalHealthCheck/image1_16862.png": "40bb8f88014f8de28e372a0aed560087",
"assets/assets/images/mentalHealthCheck/image5_63610797.png": "9f1d3cc64d89866bd839a847eaba87a3",
"assets/assets/images/mentalHealthCheck/image_1536.png": "2aafb1b46cd18af52d6b8dd370c8871f",
"assets/assets/images/guidedConsultation/plus.png": "75549ea8176f0c2aca0c5c2a6334eca2",
"assets/assets/images/guidedConsultation/image-40.png": "550fd2fb214a29e634761d279196b1e3",
"assets/assets/images/guidedConsultation/clinical-section-divider-1.svg": "48ff41ba17a8ddc1782d474471dafdc6",
"assets/assets/images/guidedConsultation/social-yarning-divider-1.svg": "acb146a034e114a0d3ce4d4bb423fa2b",
"assets/assets/images/guidedConsultation/social-yarning-divider-2.svg": "45246d4372711766540dee8f7cbe50e4",
"assets/assets/images/guidedConsultation/image-10.png": "45f6775789e46d80e311d08faf57e1ae",
"assets/assets/images/guidedConsultation/chevron-left.png": "1719641ec8d808f83eccb84f0786e9d0",
"assets/assets/images/guidedConsultation/image-39.png": "f15b0d0316205df5de8174f8534e9d76",
"assets/assets/images/homeScreen/image1_1575.png": "f198900f2a1d392da760e6da48b5a908",
"assets/assets/images/homeScreen/image_1574.png": "30db9eee54779570e2a79787284ad6d5",
"assets/assets/images/homeScreen/image_1566.png": "61d907eadeba3c3a7fbc66a3e6df2623",
"assets/assets/images/homeScreen/image_1570.png": "e424c9367020eaef96c6a7a48957aad7",
"assets/assets/images/homeScreen/image3_841827.png": "6ef61c7787cfe35743eaa631242ca05d",
"assets/assets/images/homeScreen/image2_841792.png": "ccf0e4df8e79f32a4270e917ec4c3a4f",
"assets/assets/images/homeScreen/image4_4872251.png": "4ab8bd86a50e0742b977f9a71df33201",
"assets/assets/images/homeScreen/image5_63610792.png": "9f1d3cc64d89866bd839a847eaba87a3",
"assets/assets/fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
