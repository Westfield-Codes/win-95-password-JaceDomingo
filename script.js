function setup(){
    let buttons = document.getElementById("buttons");
    let OK = document.createElement("button");
    OK.innerHTML = "OK";
    OK.addEventListener("click",getPassword);
    buttons.appendChild(OK);
    let cancel = document.createElement("button");
    cancel.innerHTML = "cancel";
    buttons.appendChild(cancel);
}
function getPassword(){
    let dialogs = document.getElementById("dialogs");
    let username = dialogs.querySelector(':nth-child(2)').value;
    let password = dialogs.querySelector(':nth-child(4)').value;
    alert(username+password);
}