const display =document.getElementById("display");

function append(x){
    display.value += x;
}

function cleardisplay(){
    display.value ="";
}

function calculate(){
    display.value=eval(display.value)
}

function deleteLast() {
   
    display.value = display.value.slice(0, -1);
}