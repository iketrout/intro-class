//var pTag = document.getElementById("p-tag")
//var tag = document.querySelector("#p-tag")
//
//
//
//pTag.addEventListener("click", function(){alert(pTag.tagName)})
//pTag.onclick=function()

var red = document.getElementById("red")
var blue = document.getElementById("blue")
var green = document.getElementById("green")
var yellow = document.getElementById("yellow")
var aqua = document.getElementById("aqua")

var color = null
var colors = ['red', 'blue', 'green', 'yellow', 'aqua']
var boxes = document.querySelectorAll(".box")


var selectColor = function(n){
    color = n;
    console.log(color);
}


red.onclick = function(){selectColor("red")}
blue.onclick = function(){selectColor("blue")}
green.onclick = function(){selectColor("green")}
yellow.onclick = function(){selectColor("yellow")}
aqua.onclick = function(){selectColor("aqua")}

document.onclick = function(){
for(var i = 0; i < 6; i++){
    boxes[i].onclick = function(){paint(i)}
}
}

//boxes[1].onclick = function(){paint(1)}
//boxes[2].onclick = function(){paint(2)}
//boxes[3].onclick = function(){paint(3)}
//boxes[4].onclick = function(){paint(4)}
//boxes[5].onclick = function(){paint(5)}
//boxes[6].onclick = function(){paint(6)}
//boxes[7].onclick = function(){paint(7)}
//boxes[8].onclick = function(){paint(8)}
//boxes[9].onclick = function(){paint(9)}
//boxes[10].onclick = function(){paint(10)}
//boxes[11].onclick = function(){paint(11)}
//boxes[12].onclick = function(){paint(12)}
//boxes[13].onclick = function(){paint(13)}
//boxes[14].onclick = function(){paint(14)}
//boxes[15].onclick = function(){paint(15)}
//boxes[16].onclick = function(){paint(16)}
//boxes[17].onclick = function(){paint(17)}
//boxes[18].onclick = function(){paint(18)}
//boxes[19].onclick = function(){paint(19)}
//boxes[20].onclick = function(){paint(20)}


var paint = function(n){
    for(var i = 0; i < 5; i++){
        if(boxes[n].classList.contains(colors[i])){
            boxes[n].classList.remove(colors[i])
        }
         console.log(colors[i])
    }
    
    boxes[n].classList.add(color);
}
