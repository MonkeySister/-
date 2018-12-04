//获取屏幕可视区域的高度
var h = window.screen.availHeight - 60;
//设置最大容器的高度为可视区域的高度
$('.wrap').css('height', h + 'px');
//为每个页面设置索引
var index = 0;
//设置鼠标滑轮滚动事件，
$(document).mousewheel(function(event, delta) {
	//向上滚动是1，向下滚动是-1
	if(delta == -1) {
		if(index < $('.wrap>.parts').length - 1) {
			index++;
		}
		changeParts(index);
	} else if(delta == 1) {
		if(index > 0) {
			index--;
		}
		changeParts(index);
	}
	//第一屏显示头部导航
	if(index == 0) {
		$('.top-box').show();
	} else {
		$('.top-box').hide();
	}
});
//左侧导航设置点击事件
var num;
for(var i = 0; i < $('.nav-left li').length; i++) {
	$('.nav-left li')[i].num = i;
};

/*Array.prototype.forEach().call($('.nav-left li'))*/
$('.nav-left li').on('click', function() {
	index = (this).num;
	changeParts(index);
});

function changeParts(index) {
	$('.wrap').css('top', -h * index + 'px');
	for(var i = 0; i < $('.nav-left li').length; i++) {
		$('.nav-left li').removeClass('on');
	}
	$('.nav-left li').eq(index).addClass('on');
};
//头部图片移入显示大图片
$('.top-li02')
	.on('mouseover', function() {
		$('.top-li02-hover').css('display', 'block');
	})
	//鼠标移出取消显示
	.on('mouseout', function() {
		$('.top-li02-hover').css('display', 'none');
	});

//主页二无缝轮播图

/*点击下张事件*/
var n = 0
$('.next').on('click', function() {
	toNext();
});

function toNext() {
	if(n < $('.scene-img-list li').length - 1) {
		n++;
	} else {
		n = 0;
	}
	$('.scene-img-list li').eq(n).show().siblings().hide();
}
$('.prev').on('click', function() {
	if(n == 0) {
		n = $('.scene-img-list li').length - 1;
	} else {
		n--;
	}
	$('.scene-img-list li').eq(n).show().siblings().hide();
});

/*自动轮播*/

var timer = setInterval(toNext,2000);

$('.scene-img-list').on('mouseenter',function(){
})
.on('mouseleave',function(){
	clearInterval(timer);
	timer = setInterval(toNext,2000);
});
$('.scene-imgs a').on('mouseenter',function(){
	clearInterval(timer);
})
.on('mouseleave',function(){
	clearInterval(timer);
	timer = setInterval(toNext,2000);
});
/*tab栏的点击事件*/
$('.fighting-tab .tab-em').click(function() {
	$(this)
		.addClass('cur')
		.parent()
		.siblings('p')
		.show()
		.parent()
		.siblings()
		.children()
		.children('em')
		.removeClass('cur')
		.parent('a')
		.siblings('p')
		.hide();
});

/*<!--主页六-->*/
$('#school-btn .school-tab>a').on('click', function() {
	$(this)
		.parent('span')
		.addClass('cur')
		.siblings()
		.removeClass('cur');
	var index = $(this).parent().index();
	console.log(index);
	$('.school-imgs-list li')
		.eq(index)
		.show()
		.siblings()
		.hide();
})

/*<!--主页七-->*/
$('.tab-li').on('mouseenter', function() {
		$(this)
			.children('a')
			.css('bottom', '10px');
	})
	.on('mouseleave', function() {
		$(this)
			.children('a')
			.css('bottom', '-144px');
	});

/*播放器实现*/

var playedArr = ['vedio/vedio01.mp4', 'vedio/vedio02.mp4', 'vedio/vedio03.mp4',
	'vedio/vedio04.mp4', 'vedio/vedio05.mp4', 'vedio/vedio06.mp4'
];
for(var i = 0; i < $('.vedio').length; i++) {
	$('.vedio')[i].index = i;
}

$('.vedio').on('click', function() {
	$('.mask').css('display', 'block');
	$('.videoBox').css('display', 'block');
	$('.vedioContain').append('<video src=' + playedArr[this.index] + ' autoplay = "autoplay" preload = "auto" controls ></video>');
});

/*取消视频播放*/
$('.deleteVedio').click(function() {
	$('.mask').css('display', 'none');
	$('.videoBox').css('display', 'none');
	$('.vedioContain').html('');
});

/*<!--主页八-->*/
$('#identity-btn .identity-tab>a').on('click', function() {
	$(this)
		.parent('span')
		.addClass('cur')
		.siblings()
		.removeClass('cur');
	$('.identity-ifo')
	var index = $(this).parent().index();
	if(index > 6) {
		alert('此功能未开放');
	} else {
		$('.identity-img-list li')
			.eq(index)
			.show()
			.siblings()
			.hide();
		$('.identity-ifo li')
			.eq(index)
			.show()
			.siblings()
			.hide();
	}
});
/*游戏下载事件*/

// 游戏下载
$('.xiazaiNav > li').click(function () {
  $(this)
    .addClass('active')
    .siblings()
    .removeClass('active');
  var index = $(this).index();
  $('.xiazai > .products > .main')
    .eq(index)
    .addClass('selected')
    .siblings()
    .removeClass('selected');
});
$('.nav-right').click(function () {
  $('.xiazai').show();
  $('.mask').show();
});

// 点击显示游戏下载
/*$('.videoBp').click(function () {
  $('.mask').show();
  $('.shipin').show();
  $('.bofang video').trigger('play');
});*/
// 关闭按钮
$('.close').click(function () {
  $('.liwu').hide();
  $('.xiazai').hide();
  $('.mask').hide();
  $('video').trigger('pause');
  $('.shipin').hide();
});