/**
 * Created by Administrator on 2017/2/9.
 */


$(function () {

    function resize() {

        /*
         *   轮播图图片小于800的时候更换图片
         */

        // 1. 获取屏幕宽度
        var screenWidth = $(window).width();
        // 2. 判断是否是小屏幕
        var isSmallScreen = screenWidth <= 800;
        // 3. 获取所有的item并且遍历
        var items = $('#micro_ad .item');
        $(items).each(function (index, item) {
            // 4. 包装成jQ对象
            var item = $(item);
            // 5. 获取图片路径
            var route = isSmallScreen ? 'sm-img' : 'lg-img';
            var imgSrc = $(item).data(route);
            var imgUrl = 'url(' + imgSrc + ')';
            // 6.设置图片背景
            $(item).css({
                'background-image': imgUrl
            });
            // 7. 设置小图作为标签插入
            if (isSmallScreen) {
                var img = $('<img src="' + imgSrc + '">');
                $(item).empty().append(img);
            }
            else {
                $(item).empty();
            }
        });

        /* 特色推荐改变ul的宽度 */

        // 1. 获取ul标签和全部的li
        var ulElement = $('#microProduct .nav-tabs');
        var liElements = $('li[role="presentation"]', ulElement);
        var liWidth = 0;
        // 2. 遍历所有的li 然后求出所有li的宽度和
        $(liElements).each(function (index, item) {
            liWidth += $(item).width();
        });


        // 3. 获取父标签的宽度
        var parentWidth = $(ulElement).parent().width();

        // console.log(liWidth, parentWidth);
        if (liWidth > parentWidth) {
            $(ulElement).css({
                'width': liWidth,
            });
        }
        else {
            $(ulElement).removeAttr('style');
        }
    }

    // 自动触发事件
    $(window).on('resize', resize).trigger('resize');

    // 提示框效果
    $('[data-toggle="tooltip"]').tooltip();

    /* 新闻列表切换  */

    $('#microNews .news2 a').on('click', function () {
        $('#microNews .news1').text($(this).data('title'));
    });


});