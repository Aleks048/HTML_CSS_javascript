var currentNode;
var idCount;

function start(){
    document.getElementById("byIdButton").addEventListener("click",byId,false);
    document.getElementById("insertButton").addEventListener("click",insert,false);
    document.getElementById("appendButton").addEventListener("click",appendNode,false);
    document.getElementById("replaceButton").addEventListener("click",replaceCurrent,false);
    document.getElementById("removeButton").addEventListener("click",remove,false);
    document.getElementById("parentButton").addEventListener("click",parent,false);

    currentNode = document.getElementById("bigHeading");
    idCount=0;
}
window.addEventListener("load",start,false);

function switchTo(target){
    currentNode.setAttribute("class","");
    currentNode=target;
    currentNode.setAttribute("class","highlighted");

    document.getElementById("gbi").value=currentNode.getAttribute("id");
}

function byId(){
    var id = document.getElementById("gbi").value;
    var target = document.getElementById(id);
    if (target){
        switchTo(target);
    }
}
function createNewNode(text){
    var newNode = document.createElement("p");//new element created
    nodeId = "new"+idCount;
    ++idCount;
    newNode.setAttribute("id",nodeId);
    text = "["+nodeId+"]"+text;
    newNode.appendChild(document.createTextNode(text));
    return newNode;
}

function insert(){
    var text = document.getElementById("ins").value;
    var newNode = createNewNode(text);
    
    currentNode.parentNode.insertBefore(newNode,currentNode);
    switchTo(newNode);
}
function appendNode(){
    var text = document.getElementById("append").value;
    var newNode = createNewNode(text);
    
    currentNode.appendChild(newNode,currentNode);
    switchTo(newNode);
}
   
function replaceCurrent(){
    var text = document.getElementById("repl").value;
    var newNode = createNewNode(text);
    currentNode.parentNode.replaceChild(newNode,currentNode);
}
function remove(){
    if (currentNode.parentNode==document.body){
        alert("What are you doing?");
    }
    else{
        var oldNode= currentNode;
        switchTo(oldNode.parentNode);
        currentNode.removeChild(oldNode);
    }
}
function parent(){
    if (currentNode.parentNode==document.body){
        alert("What are you doing?");
    }
    else{
        switchTo(currentNode.parentNode);
    }
}