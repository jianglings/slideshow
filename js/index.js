var index = 0,
    num = 5,
    itemWidth = 520,
    timer = undefined;


timerFun();
// 点击左右箭头，切换图片  animate
function move(direction) {
    clearTimeout(timer);
    if (direction == 'next') {
        index++;
        if (index > num) {
            $('.img_box').css({
                left: 0,
            })
            index = 1;
        }
    } else if (direction == 'prev') {
        index--;
        if (index < 0) {
            $('.img_box').css({
                left: num * -itemWidth,
            })
            index = num - 1;
        }
    }
    $('.img_box').animate({
        left: index * -itemWidth,
    }, function () {
        timerFun();
    })
    // this  通过index 来确定
    // active($(this));
    // active($('.item').eq(index) );  but  当index 大于5时，手动更改了index的值
    active($('.item').eq(index == 5 ? 0 : index));
}

// setTimeout  每隔3秒执行一次，自动切换的效果
//  在手动点击切换之后，执行的回调函数可传入 timerFun
function timerFun() {
    timer = setTimeout(function () {
        move('next');
    }, 3000);
}


// 改变小圆点的样式
function active(dom) {
    $('.active').removeClass('active');
    dom.addClass('active');
}

$('.prevBtn').click(function () {
    move('prev');
});
$('.nextBtn').click(function () {
    move('next');
})


$('.item').click(function () {
    // 获取当前元素在兄弟元素中的索引值
    index = $(this).index();
    // active($(this));  轮播或点击btn 小圆点也要跟着移动
    // 在移动的时候就执行改变样式的函数  active()
    move(' ');   //点击不存在向前或向后滑动
})