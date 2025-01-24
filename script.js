function addtask(){
    let input=document.getElementById("input").value;
    let ol=document.getElementById("ol");
    let li=document.createElement("li");   
    
    li.textContent=input;
    let button=document.createElement("button");
    button.textContent="mark as completed";
    button.onclick=()=>li.classList.toggle="completed";
    li.appendChild(button);
    ol.appendChild(li);
    document.getElementById("input").value="";
}
