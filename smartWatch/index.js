var productlist = [
    {
        "id" :"1",
        "color":"#23211f",
        "image":"https://imgur.com/iOeUBV7.png",
    },
    {
        "id" :"2",
        "color":"#ca3d22",
        "image":"https://i.imgur.com/PTgQlim.png",
    },
    {
        "id" :"3",
        "color":"#e9c7be",
        "image":"https://imgur.com/Zygu7I3.png",
    },
    {
        "id" :"4",
        "color":"#565681",
        "image":" https://i.imgur.com/Mplj1YR.png"
    },
    {
        "id" :"5",
        "color":"#8a5362",
        "image":"https://imgur.com/xSIK4M8.png"
    },
]

function colorChanger(data, i){
var colorPicker = document.getElementById(i + 1);
colorPicker.style.backgroundColor = data.color;

document.getElementById(i + 1).addEventListener('click', function(){
     document.getElementById('01').src = data.image;
})
}

for(var i=0; i<productlist.length; i++){
    colorChanger(productlist[i], i);
}

var Timer = document.getElementById('timer');
setInterval(myTimer, 1);
function myTimer() {
    var d = new Date();
    Timer.innerHTML = d.toLocaleTimeString();
}

var time = document.getElementById('time');
time.addEventListener('click', function(){
    heartBit.style.display = 'none'
    Timer.style.display = 'block';
    
})

var heartBit = document.getElementById('heartbit');
heartrate.addEventListener('click', function(){
    Timer.style.display = 'none';
    heartBit.style.display = 'block';

})
