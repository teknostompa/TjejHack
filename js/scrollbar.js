console.log(document.getElementsByClassName("ScrollBar")[0].style.height = document.body.scrollHeight / document.body.clientHeight + "px");
function scroll(){
    console.log(document.getElementsByClassName("ScrollBar")[0].style.top =  (document.body.clientHeight * (window.scrollY / window.innerHeight))/100 * (window.innerHeight - ( document.body.scrollHeight / document.body.clientHeight)) + "px");
}

var scrol = false;
function yesScroll(){
    scrol = true;
    setTimeout(() => {
        manualScroll();
    }, 1);
}

function manualScroll(){
    console.log(document.getElementsByClassName("ScrollBar")[0].style.top =  (document.body.clientHeight * (window.event.pageY*2 / window.innerHeight))/100 * (window.innerHeight - ( document.body.scrollHeight / document.body.clientHeight)) + "px");
    if(scrol){
        setTimeout(() => {
            manualScroll();
        }, 1);
    }
}

function noScroll(){
    scrol = false;
}