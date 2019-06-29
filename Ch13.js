var sec=0;

window.addEventListener("load",function(){startTimer();createCnvas();},false);

function startTimer(){
    window.setInterval("updateTime()",1000)
}
function updateTime(){
    ++sec;
    document.getElementById("timer").innerHTML=sec;
}
function createCnvas(){
    window.alert("creating");
    var side=100;
    var body = document.getElementById("tableBody");
    for (var j=0;j<side;++j){
        var row = document.createElement("tr");
        for  (var i =0;i<side;++i){
            row.appendChild(document.createElement("td"));
        }  
        body.appendChild(row);
    }

    document.getElementById("canvas").addEventListener("mousemove",processMouseMove,false);
}
function processMouseMove(e){
    if (e.target.tagName.toLowerCase()=="td")
    {
        if (e.ctrlKey){
            e.target.setAttribute("style","background:blue")
        }

    }
}

