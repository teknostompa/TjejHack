var events = [{
    eventName: "Tjejhack 2020",
    eventTime: '04 Dec 2020 0:21'
}]



var nonExpiredEvents = [];

var d = new Date();
var now = d.getTime();
for(var i = 0; i < events.length; i++){
    if((Date.parse(events[i].eventTime) - now > 0)){
        nonExpiredEvents[i] = events[i];
        var EventElement = document.createElement("div");
        var DescriptionElement = document.createElement("p");
        var DateElement = document.createElement("p");
        DescriptionElement.innerHTML = events[i].eventName;
        DateElement.innerHTML = events[i].eventTime;
        DescriptionElement.appendChild(DateElement);
        EventElement.appendChild(DescriptionElement);
    }
}

var TimeElement = document.createElement("div");
TimeElement.style.height = "100vh";
var Time = document.createElement("div");
Time.style.height = "100vh";
var TextElement = document.createElement("p");
TextElement.style.height = "100vh";
TextElement.style.fontSize = "100px";
TextElement.style.display = "flex";
TextElement.style.justifyContent = "center";
TextElement.style.alignItems = "center";
Time.appendChild(TextElement);
TimeElement.appendChild(Time);
document.getElementsByClassName("Countdown")[0].appendChild(TimeElement)


updateTime();

function updateTime(){
    var d = new Date();
    var now = d.getTime();
    if(Date.parse(nonExpiredEvents[0].eventTime) - now > 0){
        var timeleft = (Date.parse(nonExpiredEvents[0].eventTime) - now)/1000;

        var hours = Math.floor(timeleft/60/60);
        var miniutes = Math.floor(timeleft/60%60);
        var seconds = Math.floor(timeleft%60);

        if(seconds.toString().length < 2) {
            seconds = "0" + seconds;
        }
        if(miniutes.toString().length < 2) {
            miniutes = "0" + miniutes;
        }
        

        TextElement.innerHTML = hours + ":" + miniutes + ":" + seconds;
        setTimeout(function(){ updateTime(); }, 1000);
    }else{
        TextElement.innerHTML = "Eventet har börjat!";
    }
}