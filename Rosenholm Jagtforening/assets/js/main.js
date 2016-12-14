var main = {
    init: function () {
        menu.slide('.slide');
        
    }
}
main.init();
setTimeout(function(){ 
    menu.height('.side-menu', $('.content').outerHeight(true));
}, 30);