javascript: void((function () {
    'use strict';
    var bool = false;
    var num = 0;
    var isset = true;

    function MakeGreen() {
        if (isset) {
            $(".edui-btn-emotion").click(function () {
                if (!bool) {
                    var posflag = 1;
                    var index = $('.edui-emotion-Jtabnav .edui-tab-item').length;
                    $('.edui-tab-item:last').after("<li class='edui-tab-item'><a data-context='.edui-emotion-Jtab" + index + "' hidefocus='true' class='edui-tab-text'>绿娘</a></li>");
                    var html = '<div class="edui-emotion-Jtab' + index + ' edui-tab-pane">';
                    html += '<table border="1" class="edui-emotion-smileytable"><tbody>';
                    var baseURL = 'http://yimeicrm.cn/umeditor/dialogs/emotion/images/ac/';
                    for (var i = 1; i <= 54; i++) {
                        if (i == 1 || (i + num) % 12 === 0) {
                            html += '<tr>';
                        }
                        var str = i < 10 ? '0' : '';
                        var url = baseURL + str + i + '.png';
                        var po = posflag < 5 ? 0 : 1;
                        html += '<td class="edui-emotion-ac" data-surl="' + url + '?v=0.1" data-realurl="' + url + '" data-posflag="' + po + '" align="center"';
                        html += ' style="background-color: transparent;"><span><img title="' + i + '" src="' + url + '"></span></td>';
                        if (i % 11 === 0 || i == 54) {
                            html += '</tr>';
                            num++;
                        }
                        if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50) {
                            posflag = 1;
                        }
                        posflag++;
                    }
                    html += "</tbody> </table><a style='color:red;position:relative;top:10px;' href='javascript:;' onclick=window.open('https://pan.baidu.com/s/1i5gd8gt')>AC绿娘表情包下载 密码: jgad</a><span style='position:relative;top:10px;left:100px;color:#00aaee'>喜欢的可以在拓展页面捐助。</span></div>";
                    $('.edui-tab-pane:last').after(html);
                    $('.edui-tab-item:last').click();
                }
            });

            $(".edui-btn-emotion").click(function () {
                if (!bool) {
                    num = 0;
                    var posflag = 1;
                    var index = $('.edui-emotion-Jtabnav .edui-tab-item').length;
                    $('.edui-tab-item:last').after("<li class='edui-tab-item'><a data-context='.edui-emotion-Jtab" + index + "' hidefocus='true' class='edui-tab-text'>匿名绿娘</a></li>");
                    var html = '<div class="edui-emotion-Jtab' + index + ' edui-tab-pane">';
                    html += '<table border="1" class="edui-emotion-smileytable"><tbody>';
                    var baseURL = 'http://yimeicrm.cn/umeditor/dialogs/emotion/images/ac/10';
                    for (var i = 1; i <= 40; i++) {
                        if (i == 1 || (i + num) % 12 === 0) {
                            html += '<tr>';
                        }
                        var str = i < 10 ? '0' : '';
                        var url = baseURL + str + i + '.png';
                        var po = posflag < 5 ? 0 : 1;
                        html += '<td class="edui-emotion-ac" data-surl="' + url + '?v=0.1" data-realurl="' + url + '" data-posflag="' + po + '" align="center"';
                        html += ' style="background-color: transparent;"><span><img title="' + i + '" src="' + url + '"></span></td>';
                        if (i % 11 === 0 || i == 40) {
                            html += '</tr>';
                            num++;
                        }
                        if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50) {
                            posflag = 1;
                        }
                        posflag++;
                    }
                    html += "</tbody> </table><a style='color:red;position:relative;top:10px;' href='javascript:;' onclick=window.open('https://pan.baidu.com/s/1hr8VHVQ')>AC匿名绿娘+新娘绿娘表情包下载 密码: v8cs</a><span style='position:relative;top:10px;left:100px;color:#00aaee'>喜欢的可以在拓展页面捐助。</span></div>";
                    $('.edui-tab-pane:last').after(html);
                    $('.edui-tab-item:last').click();
                }
            });

            $(".edui-btn-emotion").click(function () {
                if (!bool) {
                    num = 0;
                    var posflag = 1;
                    var index = $('.edui-emotion-Jtabnav .edui-tab-item').length;
                    $('.edui-tab-item:last').after("<li class='edui-tab-item'><a data-context='.edui-emotion-Jtab" + index + "' hidefocus='true' class='edui-tab-text'>新娘绿娘</a></li>");
                    var html = '<div class="edui-emotion-Jtab' + index + ' edui-tab-pane">';
                    html += '<table border="1" class="edui-emotion-smileytable"><tbody>';
                    var baseURL = 'http://yimeicrm.cn/umeditor/dialogs/emotion/images/ac/20';
                    for (var i = 1; i <= 55; i++) {
                        if (i == 1 || (i + num) % 12 === 0) {
                            html += '<tr>';
                        }
                        var str = i < 10 ? '0' : '';
                        var url = baseURL + str + i + '.png';
                        var po = posflag < 5 ? 0 : 1;
                        html += '<td class="edui-emotion-ac" data-surl="' + url + '?v=0.1" data-realurl="' + url + '" data-posflag="' + po + '" align="center"';
                        html += ' style="background-color: transparent;"><span><img title="' + i + '" src="' + url + '"></span></td>';
                        if (i % 11 === 0 || i == 55) {
                            html += '</tr>';
                            num++;
                        }
                        if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50) {
                            posflag = 1;
                        }
                        posflag++;
                    }
                    html += "</tbody> </table><a style='color:red;position:relative;top:10px;' href='javascript:;' onclick=window.open('https://pan.baidu.com/s/1hr8VHVQ')>AC匿名绿娘+新娘绿娘表情包下载 密码: v8cs</a><span style='position:relative;top:10px;left:100px;color:#00aaee'>喜欢的可以在拓展页面捐助。</span></div>";
                    $('.edui-tab-pane:last').after(html);
                    $('.edui-tab-item:last').click();
                }
                bool = true;
            });
            isset = false;
        }
    }

    function setImgClass() {
        $('img').each(function () {
            if ($(this).attr('src') != '' && $(this).attr('src') != null && $(this).attr('src') != undefined) {
                var str = $(this).attr('src');
                if (str.indexOf('http://yimeicrm.cn') >= 0) {
                    $(this).attr('class', 'emotion');
                }
            }
        })
    }

    window.setInterval(MakeGreen, 2000);

    window.setInterval(setImgClass, 3000);
})())