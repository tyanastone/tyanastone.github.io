// window.addEventListener("load", function(){
//     var node = document.querySelector("[data-loading]");
//     node.setAttribute("data-loading","complete");
// });
window.addEventListener("scroll", function(){
    var speed = 5;
    var size = 100+(window.scrollY/speed);
    document.querySelector("header").
    style.backgroundSize = size+"% "+size+"%";
});

// window.addEventListener("load", function(){
// 	var nodes = document.querySelectorAll(".ripple");
// 	for(var i=0; i<nodes.length; i++){
// 		var letters = nodes[i].innerText.split('').join('</span><span>');
// 		letters = letters.split(' ').join('&nbsp;');
// 		nodes[i].innerHTML = "<span>"+letters+"</span>";

// 		var children = nodes[i].childNodes;
// 		for(var n=0; n<children.length; n++){
// 			children[n].style.animationDelay = (n/10)+"s";
// 		}

// 	}

// });