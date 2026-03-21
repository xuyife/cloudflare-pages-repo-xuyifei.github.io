// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
	if (location.href != "https://xuyifei.kaiyuan.fund/"){//主页不变
		if (document.hidden) {
			//$('[rel="icon"]').attr('href', "/funny.ico");
			document.title = '╭(°A°`)╮正在删除你的电脑！';
			clearTimeout(titleTime);
		}else {
			//$('[rel="icon"]').attr('href', "/favicon.ico");
			document.title = '(ฅ>ω<*ฅ) 噫假的啦~' + OriginTitle;
			titleTime = setTimeout(function () {
				document.title = OriginTitle;
			}, 2000);
		}
	}
});