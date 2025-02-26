/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/24/jie-shao-di-yi-pian-wen-zhang/index.html","2abee6b08b895f1a2a10c6449b089a5d"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/1.png","303f6346d6e30e22e563dd245fd3e609"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/2.png","a13c29d7dfe3defbe19d210bcb80b810"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/index.html","cc3fa4fa8947367053b6f2705edc01ed"],["/2024/04/04/zhen-liang-guo-nei-chao-kuai-su-github-jing-xiang-ting-zhi-fu-wu/index.html","f3421225c14eba1c23986d7651ed13cb"],["/2024/06/10/ruan-jian-fen-xiang-zi-zhi-zheng-gu-shen-qi-ying-pan-zhong-jie-zhe/index.html","f068ae8b3f9661fdf28fd925e4738c9e"],["/404.html","379d721a6712f09c8fbc6096f83433d5"],["/Game/index.html","e87461a1920714d15df4698b02a78da5"],["/about/index.html","63e4193846821862364a305b8befe6b2"],["/analytics/index.html","90538509834cfcf0ffdce801e180cd88"],["/archives/2023/12/index.html","63e7dcdd5bea9992fc7985df51dd2f89"],["/archives/2023/index.html","115bc1783adcb0e271f4de2627a39a7d"],["/archives/2024/04/index.html","b68e96fdba71a30ccdffad0d794527e8"],["/archives/2024/06/index.html","79eca6fb6b3fe6a5c6d644302e1ac37c"],["/archives/2024/index.html","f69c1031d325bd0d503ffe82293aabc9"],["/archives/index.html","9315357d6e603e29082911b6d28c4310"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Github/index.html","6a62218643b6c8afd7240f5c772505dd"],["/categories/Github/加速/index.html","58346297dc101199c847e0c7078be4e2"],["/categories/Windows/index.html","cb5a2ee6891eb50a7b17c4ff2f031ae5"],["/categories/index.html","fd101a5306fe4d6a264e61e57c9175e2"],["/categories/关于我/index.html","8493fbc7ff8a9d463e42e30c40ab862b"],["/categories/硬盘终结者/index.html","83988307b52af1f00f7734b66ea4bb43"],["/code/index.html","041916b2e0e0144a073fe45f5f36a765"],["/css/clipboard.css","faaf9bed7be902c7ccb0a5a612dec621"],["/css/custom.css","ff236258b4a062c0642baad8f530d62f"],["/css/fonts/remixicon.css","3036f9c9899e415692e92cf41e5816de"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","26e9fac814fdee82a9c88c264282186e"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/css/xyfBlogTitle.css","5a98cbb4ea6f1a0ad86d749838f4136b"],["/dist/main.css","1a67c9a796400f6ea3a02326d3021a8f"],["/dist/main.js","16485b71d07e5ad781dcd232ddb0dd0d"],["/friends/index.html","44f41b165ce18ae4971c4d113568c3af"],["/images/404.jpg","1f537ab3756f7f972afcf89889247b40"],["/images/alipay.jpg","e21cf331d9ffe9a79284dfae231674ca"],["/images/ayer-side.svg","1e0c884218796525989daf02b23d3807"],["/images/ayer.png","1116b77c213cb14584c671280f805195"],["/images/ayer.svg","af6957f8bcc6569cb60d49f1a5548d9c"],["/images/beian.png","25797632add41f46c37f3d58c0a856fe"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","8408c285db9203a15b4bc3d3764bae87"],["/images/forkme.png","d8fe3659927f8422fe58e4ff394cc84f"],["/images/gitee.png","32f1cc87166a897132b10b2c725bbc5b"],["/images/github.png","8f2d63c4088504cbb58b790889164a33"],["/images/hexo-tag-chart.png","9bcf2fcf52acba7de7b5ae45c4263ba7"],["/images/hexo.png","b055abc4b3c84e8d3d5a102d8b55d3ae"],["/images/sponsor.jpg","e13441d1d9a807abc8625c32b7f706f5"],["/images/wechat.jpg","8e85ab3046ceb7b9f7e531e34a9f8e52"],["/index.html","d12abf340c7ab44d1bdb700c495859d2"],["/info/index.html","3b108d3cdb3993f31df9a985e67ab849"],["/js/FunnyTitle.js","70089fd58ed8762bbef635a947f712d1"],["/js/busuanzi-2.3.pure.min.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/clickBoom1.js","0cd5eac7a7332a5285bb84d424374db2"],["/js/clickBoom2.js","5ec5c44691c4228e7627c235a592cb24"],["/js/clickLove.js","b33a7be24cf111f85d870ab3608e0daf"],["/js/dz.js","62a40f08fedb65ba3cae2e1b4f3e825d"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","15fd71182a89a2686efd63ac72ee44ac"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/playlist/index.html","7fb9b40a5875e8cd5cb0d5789eb5fbfc"],["/shuoshuo/index.html","fd555076341cbb502fe6a9c4a5235fa6"],["/sw-register.js","506c2588b4929d9f464a37f6874eafdc"],["/tags/Disk-Squeezer/index.html","49a83f32c5caeb9e93b9b8704221280e"],["/tags/Gtihub/index.html","48bb5674f3ef354a818d6282c51573a8"],["/tags/ISO/index.html","e12319c7124405dffec3907f20a5de6b"],["/tags/SwitchHosts/index.html","08b65d26a5e069fbc39c519d82245d9b"],["/tags/Watt-Toolkit/index.html","9f00b5cc25495bf2bf13daba613d3e9d"],["/tags/Windows/index.html","bf6c356547a3c206be391af1f9876437"],["/tags/githubfast-com/index.html","41b5dea314fe67c0659acddbc0fdcc5a"],["/tags/hardDiskTerminator/index.html","74ff0dcf392b0c3ed99c6bf17a837f87"],["/tags/hexo/index.html","8f2768e9f3fb28f25f9c9e927cbf6ebd"],["/tags/index.html","e7935b587b79878564d17c015cbd048a"],["/tags/加速/index.html","448b511d8f8f7a59c0499e7b5efd6b3a"],["/tags/博客/index.html","fcc80c8fa804edc461c51ae8e12c61aa"],["/tags/安装/index.html","6fa5ef23e50b9b36a2ae02f1f677858d"],["/tags/开发者/index.html","4bf6277d8bbe34ca7aa27c5aed05f5f0"],["/tags/硬盘终结者/index.html","6229a3527860bbe603f0637dcc48a8e5"],["/tags/系统/index.html","8715a44f1450f20f2d85610d695ef86a"],["/tags/自制软件/index.html","35aea9f52d380b1a8cd707ad3a5e7a4c"],["/tags/自我介绍/index.html","accebb0e8f69eaec35b2762d6b724d56"],["/tools/index.html","36d4aa4cdeab738c342764e0ffe4c6a9"]];
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
