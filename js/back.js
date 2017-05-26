// ==UserScript==
// @name         Green Acfun
// @namespace    *://*.acfun.*/*
// @version      1.0.6
// @description  Change Ac avatar to greeeeeeen
// @author       Rekkles
// @match        *://*.acfun.cn/*
// @grant        none
// ==/UserScript==

/*(function () {
 'use strict';

 var bool = false;
 var isset = true;

 function MakeGreen() {
 if (isset) {
 $(".edui-btn-emotion").click(function () {
 if (!bool) {
 var arr = [
 [],
 [54, '', '绿娘', 'https://pan.baidu.com/s/1i5gd8gt', 'jgad', 'png'],
 [40, '10', '匿名绿娘', 'https://pan.baidu.com/s/1hr8VHVQ', 'v8cs', 'png'],
 [55, '20', '新娘绿娘', 'https://pan.baidu.com/s/1hr8VHVQ', 'v8cs', 'png'],
 [41, 'ColorG', '动态彩娘', 'https://pan.baidu.com/s/1gfLzAtt', 'ttki', 'gif'],
 [114, 'AcColor', '旧版彩娘', 'https://pan.baidu.com/s/1gfLzAtt', 'ttki', 'png'],
 ];
 for (var s = 1; s <= arr.length - 1; s++) {
 var num = 0;
 var index = $('.edui-emotion-Jtabnav .edui-tab-item').length;
 $('.edui-tab-item:last').after("<li class='edui-tab-item'><a data-context='.edui-emotion-Jtab" + index + "' hidefocus='true' class='edui-tab-text'>" + arr[s][2] + "</a></li>");
 var html = '<div class="edui-emotion-Jtab' + index + ' edui-tab-pane">';
 html += '<table border="1" class="edui-emotion-smileytable"><tbody>';
 var baseURL = 'http://yimeicrm.cn/umeditor/dialogs/emotion/images/ac/' + arr[s][1];
 for (var i = 1; i <= arr[s][0]; i++) {
 if (i == 1 || (i + num) % 12 === 0) {
 html += '<tr>';
 }
 var posflag = 1;
 var str = i < 10 ? '0' : '';
 var url = baseURL + str + i + '.' + arr[s][5];
 var po = posflag < 5 ? 0 : 1;
 html += '<td class="edui-emotion-ac" data-surl="' + url + '?v=0.1" data-realurl="' + url + '" data-posflag="' + po + '" align="center"';
 html += ' style="background-color: transparent;"><span><img title="' + i + '" src="' + url + '"></span></td>';
 if (i % 11 === 0) {
 html += '</tr>';
 num++;
 }
 if (i == 11 || i == 22 || i == 33 || i == 44 || i == 55) {
 posflag = 1;
 }
 posflag++;
 }
 html += "</tbody> </table><a style='color:red;position:relative;top:10px;' href='javascript:;' onclick=window.open('" + arr[s][3] + "')>当前表情包<span style='font-size:25px;'>点我下载！</span> 密码: " + arr[s][4] + "</a><a href='javascript:;' style='color:green;position:relative;top:10px;font-size: 20px;' onclick=window.open('https://github.com/justcodingnobb/GreenAcfun')>&nbsp;&nbsp;代码地址点我&nbsp;&nbsp;&nbsp;&nbsp;</a><span style='position:relative;top:10px;color:#00aaee'>喜欢的可以<a href='javascript:;' onclick=window.open('http://rekkles.xyz/2017/04/26/GreenAcFun2-0/')>捐助</a></span></div>";
 $('.edui-tab-pane:last').after(html);
 $('.edui-tab-item:last').click();
 }
 bool = true;
 }
 });
 isset = false;
 }
 }

 function setImgClass() {
 $('img').each(function () {
 if ($(this).attr('src') !== '' && $(this).attr('src') !== null && $(this).attr('src') !== undefined) {
 var str = $(this).attr('src');
 if (str.indexOf('http://yimeicrm.cn') >= 0) {
 $(this).attr('class', 'emotion');
 }
 }
 });

 $('#area-comment-inner  .avatar').css('border-radius', '50%');

 if (window.location.href == 'http://www.acfun.cn/member/#area=mention') {
 $('.btn-img').each(function () {
 var href = $(this).attr('href');
 if (href.indexOf('http://yimeicrm.cn') >= 0) {
 $(this).after('<img class="emotion" src="' + href + '">');
 $(this).remove();
 }
 })
 }
 }


 window.setInterval(MakeGreen, 2000);

 window.setInterval(setImgClass, 1500);
 })();*/

$(function () {
    'use strict';

    //推送列表函数
    window.getlist = function (page) {
        $.get('/member/publishContent.aspx?isGroup=0&groupId=-1&pageSize=10', {
            'pageNo': page
        }, function (data) {
            $.each(data.contents, function (index, value) {
                var str = '<div class=\'box\'><div class=\'left\'>';
                str += '<div class=\'head\'><img src=' + value.titleImg + ' />';
                str += '</div></div>';
                str += '<div class=\'right\'><div class=\'pushTitle\'><a target="_blank" href=\'http://www.acfun.tv' + value.url + '\'>';
                str += value.title + '</a></div></div><div class="username"><a target="_blank" href="http://www.acfun.tv/u/' + value.userId + '.aspx#area=post-history">by&nbsp' + value.username + '</a></div></div>';
                $('#pushList').append(str);
                $('.box').css({
                    'width': '100%',
                    'clear': 'both',
                    'margin-top': '20px',
                    'height': '60px',
                    'position': 'relative',
                });
                $('.box>.left').css({
                    'width': '30%',
                    'text-align': 'center',
                    'float': 'left',
                    'vertical-align': 'middle'
                });
                $('.box>.left>.head').css('width', '80%');
                $('.box>.left>.head>img').css('width', '100%');
                $('.box>.right').css({
                    'float': 'left',
                    'width': '70%',
                    'text-align': 'left'
                });
                $('.box>.right>.pushTitle>a').css({
                    'line-height': '15px',
                    'font-size': '12px'
                });
                $('.box>.right>.pushTitle').css({
                    'line-height': '15px',
                    'font-size': '12px'
                });
                $('#pushList .username').css({
                    'width': '98%',
                    'padding-right': '2%',
                    'text-align': 'right',
                    'color': '#ddd',
                    'font-size': '10px',
                    'clear': 'both',
                    'position': 'absolute',
                    'bottom': '0',
                });
                $('#pushList .username>a').css({
                    'color': '#b5b5b5',
                    'font-size': '12px'
                });
            });
        });
    };

    $(document).ready(function () {
        var bool = false;
        var isset = true;

        function MakeGreen() {
            if (isset) {
                $('#area-comment-inner').append('<div id="donation" style="width: 220px;position:absolute;display:none;z-index: 1000;"><img src="http://rekkles.xyz/wx.png" style="width: 100px;margin-right: 20px"><img src="http://rekkles.xyz/alipay.jpeg" style="width: 100px;"></div>');

                $(".edui-btn-emotion").click(function () {
                    if (!bool) {
                        var arr = [
                            [],
                            [54, '', '绿娘', 'https://pan.baidu.com/s/1i5gd8gt', 'jgad', 'png'],
                            [40, '10', '匿名绿娘', 'https://pan.baidu.com/s/1hr8VHVQ', 'v8cs', 'png'],
                            [55, '20', '新娘绿娘', 'https://pan.baidu.com/s/1hr8VHVQ', 'v8cs', 'png'],
                            [41, 'ColorG', '动态彩娘', 'https://pan.baidu.com/s/1gfLzAtt', 'ttki', 'gif'],
                            [114, 'AcColor', '旧版彩娘', 'https://pan.baidu.com/s/1gfLzAtt', 'ttki', 'png'],
                        ];
                        for (var s = 1; s <= arr.length - 1; s++) {
                            var num = 0;
                            var index = $('.edui-emotion-Jtabnav .edui-tab-item').length;
                            $('.edui-tab-item:last').after("<li class='edui-tab-item'><a data-context='.edui-emotion-Jtab" + index + "' hidefocus='true' class='edui-tab-text'>" + arr[s][2] + "</a></li>");
                            var html = '<div class="edui-emotion-Jtab' + index + ' edui-tab-pane">';
                            html += '<table border="1" class="edui-emotion-smileytable"><tbody>';
                            var baseURL = 'http://yimeicrm.cn/umeditor/dialogs/emotion/images/ac/' + arr[s][1];

                            var posflag = 1;
                            for (var i = 1; i <= arr[s][0]; i++) {
                                if (i == 1 || (i + num) % 12 === 0) {
                                    html += '<tr>';
                                }
                                var str = i < 10 ? '0' : '';
                                var url = baseURL + str + i + '.' + arr[s][5];
                                var po = posflag < 5 ? 0 : 1;
                                html += '<td class="edui-emotion-ac" data-surl="' + url + '?v=0.1" data-realurl="' + url + '" data-posflag="' + po + '" align="center"';
                                html += ' style="background-color: transparent;"><span><img title="' + i + '" src="' + url + '"></span></td>';
                                if (i % 11 === 0) {
                                    html += '</tr>';
                                    num++;
                                }
                                if (i == 11 || i == 22 || i == 33 || i == 44 || i == 55) {
                                    posflag = 1;
                                }
                                posflag++;
                            }
                            html += "</tbody> </table><a style='color:red;position:relative;top:10px;' href='javascript:;' onclick=window.open('" + arr[s][3] + "')>当前表情包<span style='font-size:20px;'>点我下载！</span> " +
                                "密码: " + arr[s][4] + "</a><a href='javascript:;' style='color:green;position:relative;top:10px;font-size: 20px;' onclick=window.open('https://github.com/justcodingnobb/GreenAcfun')>&nbsp;&nbsp;代码地址&nbsp;&nbsp;&nbsp;&nbsp;</a>" +
                                "<span style='position:relative;top:10px;color:#00aaee'>喜欢的可以<span style='font-size: 15px;color:red' onmouseover=$('#donation').css('display','block').css('left',event.clientX).css('top',event.clientY+10); onmouseout=$('#donation').css('display','none'); >捐助</span></span></div>";
                            $('.edui-tab-pane:last').after(html);
                            $('.edui-tab-item:last').click();
                        }
                        bool = true;
                    }
                });
                isset = false;
            }
        }

        function setImgClass() {
            $('img').each(function () {
                if ($(this).attr('src') !== '' && $(this).attr('src') !== null && $(this).attr('src') !== undefined) {
                    var str = $(this).attr('src');
                    if (str.indexOf('http://yimeicrm.cn') >= 0) {
                        $(this).attr('class', 'emotion');
                    }
                }
            });

            $('#area-comment-inner  .avatar').css('border-radius', '50%');

            if (window.location.href == 'http://www.acfun.cn/member/#area=mention') {
                $('.btn-img').each(function () {
                    var href = $(this).attr('href');
                    if (href.indexOf('http://yimeicrm.cn') >= 0) {
                        $(this).after('<img class="emotion" src="' + href + '">');
                        $(this).remove();
                    }
                })
            }
        }

        window.setInterval(MakeGreen, 2000);

        window.setInterval(setImgClass, 1500);

        $('#win-info-guide>.mainer>.b').after('<div id=\'pushList\'></div>');
        $('#win-info-guide').css({
            'width': '300px'
        });
        $(".guide-item-con").append('<div id=\'pushList\'></div>').css("width", "300px");
        $(".guide-item-con .more").appendTo($(".guide-item").eq(0).find(".guide-item-con"));
        $(".guide-item-con .more").eq(0).hide();
        var arr = [];
        getlist(1);
        $('#pushList').css({
            'height': '350px',
            'overflow-y': 'auto',

            'border-radius': '2px'
        });
        $(".guide-item-con #pushList").css({"width": "97%", "margin-left": "3%"});
        $("#win-info-guide #pushList").css({
            "padding-left": "8px",
            "width": "100%",
            'box-shadow': '0px 0px 3px #555 inset'
        });
        $('#win-info-guide').hover(function () {
            $('#pushList').scrollTop(0);
        });
        var page = 2;
        $('#pushList').scroll(function () {
            var pushH = $('#pushList').height();
            var pushB = document.getElementById('pushList').scrollHeight - pushH;
            var scroll = $(this).scrollTop();
            if (scroll == pushB) {
                getlist(page);
                page++;
            }
        });
    });
});
