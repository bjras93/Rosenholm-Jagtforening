var menu = {
    slide: function (target) {
        $(target).on('click', function (e) {
            e.preventDefault();
            $(this).next().toggle(100);
            
        });
    },
    height: function (target, height) {
        $(target).height(height);
    }
}