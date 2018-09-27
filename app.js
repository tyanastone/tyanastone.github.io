window.addEventListener("scroll", function(){
    var speed = 5;
    var size = 100+(window.scrollY/speed);
    document.querySelector("header").
    style.backgroundSize = size+"% "+size+"%";
});