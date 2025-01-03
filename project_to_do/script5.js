let text=document.getElementById("text");
let list=document.getElementById("list");
function Add(){
    if(text.value==''){
        alert("You must enter a value");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=text.value;
        list.appendChild(li);
        saveData();
        text.value='';
        let span= document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        saveData();
    }
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("first");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})
function saveData(){
    localStorage.setItem("Data",list.innerHTML);
}
function showData(){
    list.innerHTML=localStorage.getItem("Data")
}
showData()