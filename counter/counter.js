let c = 0;
let clickcount=0;

function increase() {
    clickcount++;
    if(clickcount%2===0){ 
    c++;
    document.getElementById("count").innerText = c;
    clickcount-0;
}
}

function decrease() {
    c--;
    document.getElementById("count").innerText = c;
}

function refresh(){
    c=0;
    document.getElementById("count").innerText = c;
}