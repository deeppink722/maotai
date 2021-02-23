$(function() {
    var imgs = [
        'img/allergan.png',
        'img/allergan1.png',
        'img/beijin.png',
        'img/bg.png',
        'img/border-p4.png',
        'img/border-p5.png',
        'img/border-p6.png',
        'img/border-p7.png',
        'img/border-p8.png',
        'img/border-p9.png',
        'img/bottom-index.png',
        'img/bottom.png',
        'img/button-one-p9.png',
        'img/button-two-p9.png',
        'img/datati.png',
        'img/doraemn-p9.png',
        'img/ellipse.png',
        'img/four-p9.png',
        'img/home_logo.png',
        'img/huanm-p7.png',
        'img/info-p8.png',
        'img/loading-p3.png',
        'img/logo-11.png',
        'img/logo-p4.png',
        'img/logo-p5.png',
        'img/logo-p6.png',
        'img/logo.png',
        'img/offlce-p7.png',
        'img/ok-p4.png',
        'img/option-p10.png',
        'img/play.png',
        'img/question.png',
        'img/round.png',
        'img/sheng.png',
        'img/six-p9.png',
        'img/type-9.png',
        'img/type-p7.png',
        'img/waiting.png',
        'img/dot.gif',
    ];
    $.preload(imgs, {
        oder: false,
        minTimer: 3000,
        each: function(count) {
            var percent = Math.round((count + 1) / imgs.length * 100) + '%';
            console.log(percent);
        },
        end: function() {
            console.log('加载完成');
            $('.land').fadeOut();
            $('.loading').fadeIn();
        }
    })
    $.preload(imgs, {
        oder: false,
        minTimer: 8000,
        each: function(count) {
            var percent = Math.round((count + 1) / imgs.length * 100) + '%';
            console.log(percent);
        },
        end: function() {
            $('loading').fadeOut();
            $('.bottle').fadeIn();
        }
    })
    $.preload(imgs, {
        oder: false,
        minTimer: 10000,
        each: function(count) {
            var percent = Math.round((count + 1) / imgs.length * 100) + '%';
            console.log(percent);
        },
        end: function() {
            $('.p1-1').fadeOut();
            $('.shake-box').fadeIn();
        }
    })
})