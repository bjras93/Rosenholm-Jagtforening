var main = {
    init: function () {
        menu.slide('.slide');
        menu.mobile('#mobile');
        
    }
}
main.init();
setTimeout(function(){ 
    menu.height('.side-menu', $('.content').outerHeight(true));
}, 30);