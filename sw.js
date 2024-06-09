/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/24/介绍-第一篇文章/index.html","ffececfc41511379128b0272bff013d2"],["/2023/12/29/一个ISO安装多个Windows版本-合成自定义Windows安装ISO/1.png","303f6346d6e30e22e563dd245fd3e609"],["/2023/12/29/一个ISO安装多个Windows版本-合成自定义Windows安装ISO/2.png","a13c29d7dfe3defbe19d210bcb80b810"],["/2023/12/29/一个ISO安装多个Windows版本-合成自定义Windows安装ISO/index.html","6a8262796d2994d32cbb6e167815b70f"],["/2024/04/04/震惊！！！国内超快速github镜像停止服务！/index.html","86ce1a845501929e43a6a1fbe9e55702"],["/404.html","379d721a6712f09c8fbc6096f83433d5"],["/Game/index.html","bb4c7e0df024d9334a61526acdc8c159"],["/about/index.html","aa10eadb4f5587d6bb94de5493a23a84"],["/analytics/index.html","ac124bdddcee994a3479334d55fde0cd"],["/archives/2023/12/index.html","ae13520317cf53ed6e75d751818ef222"],["/archives/2023/index.html","f411816c3c2dbb515218e247e0cfe6e9"],["/archives/2024/04/index.html","603606cfa7d1aa472b70fd9447d95ad9"],["/archives/2024/index.html","9ab7eda8a11632362549638c909f8aaf"],["/archives/index.html","c05450015090701b8d98020d103ba798"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Github/index.html","4de14a3855d3a9b958a8b6b85da406e7"],["/categories/Github/加速/index.html","b318cc0daeaf3a273402d627fc12d7c9"],["/categories/Windows/index.html","ef437d7485dbe5056a11475185d73943"],["/categories/index.html","e78fe3654869c1f9cb286348b28feff1"],["/categories/关于我/index.html","6ccd8fe60a647466c42dc9da5122b987"],["/css/clipboard.css","faaf9bed7be902c7ccb0a5a612dec621"],["/css/custom.css","ff236258b4a062c0642baad8f530d62f"],["/css/fonts/remixicon.css","3036f9c9899e415692e92cf41e5816de"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","26e9fac814fdee82a9c88c264282186e"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/css/xyfBlogTitle.css","5a98cbb4ea6f1a0ad86d749838f4136b"],["/dist/main.css","1a67c9a796400f6ea3a02326d3021a8f"],["/dist/main.js","16485b71d07e5ad781dcd232ddb0dd0d"],["/images/404.jpg","1f537ab3756f7f972afcf89889247b40"],["/images/alipay.jpg","e21cf331d9ffe9a79284dfae231674ca"],["/images/ayer-side.svg","1e0c884218796525989daf02b23d3807"],["/images/ayer.png","1116b77c213cb14584c671280f805195"],["/images/ayer.svg","af6957f8bcc6569cb60d49f1a5548d9c"],["/images/beian.png","25797632add41f46c37f3d58c0a856fe"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","8408c285db9203a15b4bc3d3764bae87"],["/images/forkme.png","d8fe3659927f8422fe58e4ff394cc84f"],["/images/gitee.png","32f1cc87166a897132b10b2c725bbc5b"],["/images/github.png","8f2d63c4088504cbb58b790889164a33"],["/images/hexo-tag-chart.png","9bcf2fcf52acba7de7b5ae45c4263ba7"],["/images/hexo.png","b055abc4b3c84e8d3d5a102d8b55d3ae"],["/images/sponsor.jpg","e13441d1d9a807abc8625c32b7f706f5"],["/images/wechat.jpg","8e85ab3046ceb7b9f7e531e34a9f8e52"],["/index.html","9809a055fdc4a37c1fdb583e76c6967f"],["/info/index.html","3d6b8588d7f0aeb2d178e19de8d820eb"],["/js/FunnyTitle.js","70089fd58ed8762bbef635a947f712d1"],["/js/busuanzi-2.3.pure.min.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/clickBoom1.js","0cd5eac7a7332a5285bb84d424374db2"],["/js/clickBoom2.js","5ec5c44691c4228e7627c235a592cb24"],["/js/clickLove.js","b33a7be24cf111f85d870ab3608e0daf"],["/js/dz.js","62a40f08fedb65ba3cae2e1b4f3e825d"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","15fd71182a89a2686efd63ac72ee44ac"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/playlist/index.html","fe3e68557a2be7824a3e71832ffaffc2"],["/shuoshuo/index.html","503a1ff720abe96b4791b58f103ac79f"],["/sw-register.js","addc5e31cffa2991e5e92e38b7c36606"],["/tags/Gtihub/index.html","44140a3140395adaf9c4dadf2a28fa23"],["/tags/ISO/index.html","08d261869660fd436df599fd1f9a50cc"],["/tags/SwitchHosts/index.html","f357661ad36e4d1d52244aaa91692b47"],["/tags/Watt-Toolkit/index.html","31fc8d05e9e373ba9f4f33c64cb9d581"],["/tags/Windows/index.html","0ae83511bfa445e37ee2d68bae06ba83"],["/tags/githubfast-com/index.html","d0a882a00d63b4d21635610648e60cc0"],["/tags/hexo/index.html","9878f5d250bf035cb98cc30e0912bd8b"],["/tags/index.html","5604fa8de01ac52ff76df7e083d493cf"],["/tags/加速/index.html","8f4a0a8935323b134929fcef3064ceba"],["/tags/博客/index.html","51cb4ccb668b1959ed3dd450f987f887"],["/tags/安装/index.html","0ff2b150750bd4b50e1d3f07088f4022"],["/tags/开发者/index.html","63df85c43abaebdc5ec2b41a162bd397"],["/tags/系统/index.html","05d20ebecf2e5ebbcc6be65b3e2f5ff2"],["/tags/自我介绍/index.html","a736f7ef3355e0ce6893ab81de0afa85"],["/tools/index.html","423ecc76d273b5e28ebf6ea4fd8a6ede"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
