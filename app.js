// copy color hex code on click 
function myFunction(code){
    let copyText = document.getElementById('colorCode'+code);
    
    navigator.clipboard.writeText(copyText.innerText);
    document.execCommand('copy');
    window.alert("copied the text" + copyText.innerText);
    
    // console.log(copyText);
}

// save to local storage 
function addToLocalStorage(hexCode){
    let colorHexCode = document.getElementById('colorCode' + hexCode ).innerText;

    let myObj = {
        colorName: colorHexCode,
        number : hexCode
    }

    localStorage.setItem('myObj',JSON.stringify(myObj));
        // display local storage data on modal 
    let myStorage = JSON.parse(localStorage.getItem('myObj'));
    document.getElementById('modal-text').innerText = myStorage.colorName;
    // console.log(myStorage);
}

// auto generate hex color code 
var array = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var color = "#";

function colorGenerator(){
    for(var i=1;i<=6;i++){
        color += array[Math.floor(Math.random()*16)];
    }
}

// display five different color on user interface 
for(var j=1; j<=5; j++){
    colorGenerator();
    
    document.getElementById("div"+j).style.backgroundColor = color;
     
    document.getElementById("div"+j).innerHTML = `<div>
        <h2 id="colorCode${+ j}">${color}</h2>
        <button onclick="myFunction(${j})">Copy</button>
        <button onclick="addToLocalStorage(${j})">Add to favourite</button>
    </div>`;
    
    color = "#";
}


// refresh on pressing spacebar

document.addEventListener('keyup', function(e){
    if(e.keyCode == 32){
        window.location.reload();
    }
});

