var current = '',
    pos = 0,
    index = $('#index');
var gallery = {
    open: function () {
        var ib = $('.image-box'),
            img = $('.image-box img'),
             a = $('.gallery-box a'),
             prev = $('.img-prev'),
             n = $('.img-next');

        ib.on('click', function (e) {
            e.stopPropagation();
        })
        a.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var $this = $(this),
                data = $this.next().data('images'),
                split = data.split(',');
            current = $this;
            pos = 0;
            index.text(pos + 1 + ' / ' + (split.length-1));
            ib.show();
            img.attr('src', split[pos]);
        });
        prev.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var data = current.next().data('images'),
                split = data.split(',');
            if (pos != 0) {
                pos = pos - 1;
                index.text(pos + 1 + ' / ' + (split.length - 1));
                img.attr('src', split[pos]);
            }
        });
        $('body').on('keyup', function (e) {
            if (e.keyCode == 37) {
                var data = current.next().data('images'),
                    split = data.split(',');
                if (pos != 0) {
                    pos = pos - 1;
                    index.text(pos + 1 + ' / ' + (split.length - 1));
                    img.attr('src', split[pos]);
                }
            }
            if (e.keyCode == 39) {
                var data = current.next().data('images'),
                    split = data.split(',');
                if (split.length - 2 != pos) {
                    pos++;
                    index.text(pos + 1 + ' / ' + (split.length - 1));
                    img.attr('src', split[pos]);
                }
            }
        });
        gallery.next(n, img);
        gallery.next(img, img);
        $('body,.close').on('click', function () {
            $('.image-box').hide();
        });
    },
    next: function (target, img) {
        target.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var data = current.next().data('images'),
                split = data.split(',');
            if (split.length - 2 != pos) {
                pos++;
                index.text(pos + 1 + ' / ' + (split.length - 1));
                img.attr('src', split[pos]);
            }
        });
    }
}