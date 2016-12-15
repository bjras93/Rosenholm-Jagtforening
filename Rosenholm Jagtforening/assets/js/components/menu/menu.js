var mq = window.matchMedia("(max-width: 768px)");
var menu = {
    slide: function (target) {
        $(target).on('click', function (e) {
            e.preventDefault();
            $(this).next().toggle(100);
            
        });
    },
    height: function (target, height) {
        $(target).height(height);
    },
    mobile: function (selector) {
        $(selector).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).next().slideToggle(300);
        
        });
        $(selector).next().on('click', function (e) {
            e.stopPropagation();
        });
        if (mq.matches) {
            $('body').on('click', function () {
                $(selector).next().hide();
            });
        }
    }
}