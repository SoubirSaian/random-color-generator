
function myFunction(){
    let copyText = document.getElementById('colorCode');
    
    navigator.clipboard.writeText(copyText.innerText);
    document.execCommand('copy');
    window.alert("copied the text" + copyText.innerText);
    
    console.log(copyText.innerHTML);
}

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
     
    document.getElementById("div"+j).innerHTML = `<div>
        <h2 id="colorCode">${color}</h2>
        <button onclick="myFunction()">Copy</button>
    </div>`;
    
    color = "#";
}



document.addEventListener('keyup', function(e){
    if(e.keyCode == 32){
        window.location.reload();
    }
});

