const text = document.getElementById("textarea"); 

function textBold(){

    text.style.fontWeight='bold';
}

function textItalic(){

    text.style.fontStyle="italic";
}

function alignleft(){
    text.style.textAlign="left";
}

function aligncenter(){
    text.style.textAlign="center";
}

function aligntright(){
    text.style.textAlign="right";
}

function uppercase (){
    text.style.textTransform="uppercase";
}

function lowercase (){
    text.style.textTransform = "lowercase";
}
function capitalize (){
    text.style.textTransform = "capitalize";
}
function cleartext(){
    text.value = " ";
}
