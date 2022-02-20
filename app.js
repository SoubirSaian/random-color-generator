 
var array = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var color = "#";

function colorGenerator(){
    for(var i=1;i<=6;i++){
        color += array[Math.floor(Math.random()*16)];
    }
}

for(var j=1; j<=5; j++){
    colorGenerator();
    document.getElementById("div"+j).style.backgroundColor = color;
    document.getElementById("div"+j).innerHTML = color;
    color = "#";
}

document.addEventListener('keyup', function(e){
    if(e.keyCode == 32){
        window.location.reload();
    }
});

// document.getElementById("button").onclick(location.reload );