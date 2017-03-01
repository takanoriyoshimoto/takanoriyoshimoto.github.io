//Skipperの初期化
$("document").ready(function () {
	$("#theTarget").skippr();

});

// オプションを指定してSkipperの実行
$("#theTarget").skippr({
	// スライドショーの変化 ("fade" or "slide")
	transition: 'fade',
	// 変化に係る時間(ミリ秒)
	speed: 1000,
	// easingの種類
	easing: 'easeOutQuart',
	// ナビゲーションの形("block" or "bubble")
	navType: 'bubble',
	// 子要素の種類("div" or "img")
	childrenElementType: 'div',
	// ナビゲーション矢印の表示(trueで表示)
	arrows: true,
	// スライドショーの自動再生(falseで自動再生なし)
	autoPlay: true,
	// 自動再生時のスライド切替間隔(ミリ秒)
	autoPlayDuration: 4500,
	// キーボードの矢印キーによるスライド送りの設定(trueで有効)
	keyboardOnAlways: true,
	// 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
	hidePrevious: false
});

$("document").ready(function () {
	$(".drawer").drawer();
});

//$(function () {
//	$(".itemblock").hover(function () {
//		$(".itemblock-small-1").stop().slideToggle("fast");
//	}),$(".itemblock").hover(function () {
//		$(".itemblock-small-2").stop().slideToggle("fast");
//	}),$(".itemblock").hover(function () {
//		$(".itemblock-small-2").stop().slideToggle("fast");
//	});
//});

$(function () {
	$(".itemblock").hover(function () {
		$(this).find(".itemblock-small-1").stop().slideToggle(300);
	});
	$(".itemblock").hover(function () {
		$(this).find(".itemblock-small-2").stop().slideToggle(300);
	});
	$(".itemblock").hover(function () {
		$(this).find(".itemblock-small-3").stop().slideToggle(300);
	});
});


$(function () {
	$(".tw").hover(function () {
		$(".tw-dn").stop().slideToggle(300);
	}), $(".face").hover(function () {
		$(".face-dn").stop().slideToggle(300);
	}), $(".insta").hover(function () {
		$(".insta-dn").stop().slideToggle(300);
	}), $(".you").hover(function () {
		$(".you-dn").stop().slideToggle(300);
	});
});