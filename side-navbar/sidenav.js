let a = document.getElementById("dropbtn");
let b = document.getElementById("drpdwn");
a.addEventListener("mouseenter",visi)
b.addEventListener("mouseenter",visi)
a.addEventListener("mouseleave",hid)
b.addEventListener("mouseleave",hid)

function visi(){
    document.getElementById("drpdwn").style.visibility = "visible";

}

function hid(){
    document.getElementById("drpdwn").style.visibility ="hidden"
}

// ----------------------------------------------

let sub_inner1 = document.getElementById("accessories")
sub_inner1.addEventListener("mouseenter",firstvisible)

sub_inner1.addEventListener("mouseleave",firsthidden)

function firstvisible(){
    document.getElementById("sub-inner1").style.visibility = "visible"
}

function firsthidden(){
    document.getElementById("sub-inner1").style.visibility = "hidden"
}


let sub_inner2 = document.getElementById("laptop")
sub_inner2.addEventListener("mouseenter",secondvisible)

sub_inner2.addEventListener("mouseleave",secondhidden)

function secondvisible(){
    document.getElementById("sub-inner2").style.visibility = "visible"
}

function secondhidden(){
    document.getElementById("sub-inner2").style.visibility = "hidden"
}


let sub_inner3 = document.getElementById("electronics");
sub_inner3.addEventListener("mouseenter",thirdvisible);
sub_inner3.addEventListener("mouseleave",thirdhidden);

function thirdvisible(){
    document.getElementById("sub-inner3").style.visibility = "visible"
}
function thirdhidden(){
    document.getElementById("sub-inner3").style.visibility = "hidden"
}

let sub_inner4 = document.getElementById("computer");
sub_inner4.addEventListener("mouseenter",forthvisible);
sub_inner4.addEventListener("mouseleave",forthhidden);

function forthvisible(){
    document.getElementById("sub-inner4").style.visibility = "visible"
}
function forthhidden(){
    document.getElementById("sub-inner4").style.visibility = "hidden"
}


let sub_inner5 = document.getElementById("printer");
sub_inner5.addEventListener("mouseenter",fifthvisible);
sub_inner5.addEventListener("mouseleave",fifthhidden);

function fifthvisible(){
    document.getElementById("sub-inner5").style.visibility = "visible"
}
function fifthhidden(){
    document.getElementById("sub-inner5").style.visibility = "hidden"
}

let sub_inner6 = document.getElementById("garden");
sub_inner6.addEventListener("mouseenter",sixthvisible);
sub_inner6.addEventListener("mouseleave",sixthhidden);

function sixthvisible(){
    document.getElementById("sub-inner6").style.visibility = "visible"
}
function sixthhidden(){
    document.getElementById("sub-inner6").style.visibility = "hidden"
}

let sub_inner7 = document.getElementById("appli");
sub_inner7.addEventListener("mouseenter",seventhvisible);
sub_inner7.addEventListener("mouseleave",seventhhidden);

function seventhvisible(){
    document.getElementById("sub-inner7").style.visibility = "visible"
}
function seventhhidden(){
    document.getElementById("sub-inner7").style.visibility = "hidden"
}

let sub_inner8 = document.getElementById("sports");
sub_inner8.addEventListener("mouseenter",eigthvisible);
sub_inner8.addEventListener("mouseleave",eigthhidden);

function eigthvisible(){
    document.getElementById("sub-inner8").style.visibility = "visible"
}
function eigthhidden(){
    document.getElementById("sub-inner8").style.visibility = "hidden"
}