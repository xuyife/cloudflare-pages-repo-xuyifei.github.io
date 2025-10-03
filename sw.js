/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/24/jie-shao-di-yi-pian-wen-zhang/index.html","aa29cb39d724e153f7e06a71a1b465b0"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/1.png","303f6346d6e30e22e563dd245fd3e609"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/2.png","a13c29d7dfe3defbe19d210bcb80b810"],["/2023/12/29/yi-ge-iso-an-zhuang-duo-ge-windows-ban-ben-he-cheng-zi-ding-yi-windows-an-zhuang-iso/index.html","fbdc7ab314dbacb26f4b581e89ffe99c"],["/2024/04/04/zhen-liang-guo-nei-chao-kuai-su-github-jing-xiang-ting-zhi-fu-wu/index.html","851fca2866136621ac13a7ebdfe403fd"],["/2024/06/10/ruan-jian-fen-xiang-zi-zhi-zheng-gu-shen-qi-ying-pan-zhong-jie-zhe/index.html","f91c09adcb9ec7e754554b4fc0073b5e"],["/404.html","95ea257a6f719f35a914c0c9c8d74b9a"],["/Game/index.html","ce4ec39b09fc62796043e53f6a3ee784"],["/about/index.html","77bf40f11dd5a275ef8120103449a03b"],["/analytics/index.html","f6f7f1f2720dfacfb5939c4a7722b324"],["/archives/2023/12/index.html","7df8b620b42dcc4c305d8595ef5af297"],["/archives/2023/index.html","82c37affcbb0b9e544af345f90ad3516"],["/archives/2024/04/index.html","1fc049e0feb5903d3d08463c56019e8c"],["/archives/2024/06/index.html","f6cc955e7a315a18672abb3100a9b598"],["/archives/2024/index.html","8e39690f9de0161d022ea3d76755087a"],["/archives/index.html","de360b61f5b43e978ebc691853528226"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Github/index.html","77e76820c9f94b0d25074763cd346729"],["/categories/Github/加速/index.html","d376c64784a3b445366a6abdbd5f9f25"],["/categories/Windows/index.html","3ba2e6a66207af272ef2ce814859fdbc"],["/categories/index.html","19f1d073b75fe1592a92589ce0cf31c9"],["/categories/关于我/index.html","a878e9da0670b6ed305c4aa4f7f29b92"],["/categories/硬盘终结者/index.html","e5ad85057c89491c46e5e438494a676e"],["/code/index.html","128d170568023a582edea17e12d05430"],["/css/clipboard.css","faaf9bed7be902c7ccb0a5a612dec621"],["/css/custom.css","c4862cb0164244bc71432977eee4c3be"],["/css/fonts/remixicon.css","3036f9c9899e415692e92cf41e5816de"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","26e9fac814fdee82a9c88c264282186e"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/css/xyfBlogTitle.css","5a98cbb4ea6f1a0ad86d749838f4136b"],["/dist/main.css","1a67c9a796400f6ea3a02326d3021a8f"],["/dist/main.js","16485b71d07e5ad781dcd232ddb0dd0d"],["/friends/index.html","a31aefb05263b38b68e078e373ed481a"],["/images/404.jpg","1f537ab3756f7f972afcf89889247b40"],["/images/alipay.jpg","e21cf331d9ffe9a79284dfae231674ca"],["/images/ayer-side.svg","1e0c884218796525989daf02b23d3807"],["/images/ayer.png","1116b77c213cb14584c671280f805195"],["/images/ayer.svg","af6957f8bcc6569cb60d49f1a5548d9c"],["/images/beian.png","25797632add41f46c37f3d58c0a856fe"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","8408c285db9203a15b4bc3d3764bae87"],["/images/forkme.png","d8fe3659927f8422fe58e4ff394cc84f"],["/images/gitee.png","32f1cc87166a897132b10b2c725bbc5b"],["/images/github.png","8f2d63c4088504cbb58b790889164a33"],["/images/hexo-tag-chart.png","9bcf2fcf52acba7de7b5ae45c4263ba7"],["/images/hexo.png","b055abc4b3c84e8d3d5a102d8b55d3ae"],["/images/sponsor.jpg","e13441d1d9a807abc8625c32b7f706f5"],["/images/wechat.jpg","8e85ab3046ceb7b9f7e531e34a9f8e52"],["/index.html","318c40ca0c81022fc39fb86f959c7800"],["/info/index.html","67590c596248101d94664eb1f23bc2e0"],["/js/FunnyTitle.js","70089fd58ed8762bbef635a947f712d1"],["/js/busuanzi-2.3.pure.min.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/clickBoom1.js","0cd5eac7a7332a5285bb84d424374db2"],["/js/clickBoom2.js","5ec5c44691c4228e7627c235a592cb24"],["/js/clickLove.js","b33a7be24cf111f85d870ab3608e0daf"],["/js/dz.js","62a40f08fedb65ba3cae2e1b4f3e825d"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","15fd71182a89a2686efd63ac72ee44ac"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/playlist/index.html","10068ef5ee2b5fc8a386e8b4ea894782"],["/shuoshuo/index.html","8fe694d5fa4740c6d015b6a7ab89bbdb"],["/sw-register.js","d6961251fd58480b53b602b8601bc849"],["/tags/Disk-Squeezer/index.html","295dab51bd7d4f1072a78ac57fa2d897"],["/tags/Gtihub/index.html","b52e7259862b50c58317c8553920706d"],["/tags/ISO/index.html","67102fc60e5a8e54e7d4768948ec5c97"],["/tags/SwitchHosts/index.html","b13b60435ec4dd0f3cd9f7d840371d24"],["/tags/Watt-Toolkit/index.html","0e982fa50d30695c45b9d761c05d8a94"],["/tags/Windows/index.html","67258b9f66d1d169e056b38ee21952ea"],["/tags/githubfast-com/index.html","7ff0f1ddce382d541081b709134c7de5"],["/tags/hardDiskTerminator/index.html","736bffc584fc48683e2f2cbbbf31be16"],["/tags/hexo/index.html","f9497a37bba2b6ea31f3d1df93053803"],["/tags/index.html","1d4ef161df669b6899fc5128cbc65a0f"],["/tags/加速/index.html","28e3274a9a7daf18e535fddb1bf510f0"],["/tags/博客/index.html","9720d03889188193f755557325fa6660"],["/tags/安装/index.html","bf4285a9072bbc61fa6c6dd1f293d30c"],["/tags/开发者/index.html","8b988e83f9c82a3a8238326fb38fcaa6"],["/tags/硬盘终结者/index.html","f882e84bde594331c5a2af7aed841542"],["/tags/系统/index.html","54e4896d9c08e30d222d1bea90ca114a"],["/tags/自制软件/index.html","3493cfc66bf7223d0511e237d1ad4eb8"],["/tags/自我介绍/index.html","2140f7bc4a86630cabba56e1a05cb144"],["/tools/index.html","2b46da0543de16220d1323a0b7b73cee"]];
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
