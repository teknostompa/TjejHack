var events = [{
    eventName: "Tjejhack 2020",
    eventTime: '04 Dec 2020 13:20'
},{
    eventName: "Tjejhack 2021",
    eventTime: '04 Dec 2021 15:30'
},{
    eventName: "Tjejhack 2022",
    eventTime: '04 Dec 2022 16:00'
}]

var nonExpiredEvents = [];
var selectedEvent = 0;

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
        EventElement.className = "Event";
        document.getElementsByClassName("Events")[0].appendChild(EventElement);
    }
}
document.getElementsByClassName("Event")[0].className += " Selected";
$(".Event").click(function() {
    for(var i = 0; i < this.parentElement.childNodes.length; i++){
        this.parentElement.childNodes[i].className = "Event";
        if(this.parentElement.childNodes[i] == this){
            selectedEvent = i - 1;
        }
    }
    this.className += " Selected";
    updateTime();
    document.getElementsByClassName("TimerTitle")[0].innerHTML = nonExpiredEvents[selectedEvent].eventName;
});

document.getElementsByClassName("TimerTitle")[0].innerHTML = nonExpiredEvents[selectedEvent].eventName;

var TimeElement = document.createElement("div");
TimeElement.style.height = "100vh";
var Time = document.createElement("div");
Time.style.height = "100vh";
var TextElement = document.createElement("p");
TextElement.style.height = "30vh";
TextElement.style.fontSize = "100px";
TextElement.style.display = "flex";
TextElement.style.justifyContent = "center";
TextElement.style.alignItems = "center";
Time.appendChild(TextElement);
TimeElement.appendChild(Time);
document.getElementsByClassName("Timer")[0].appendChild(TimeElement)


updateTime();

function updateTime(){
    var d = new Date();
    var now = d.getTime();
    console.log(nonExpiredEvents[selectedEvent] + " " + selectedEvent);
    if(Date.parse(nonExpiredEvents[selectedEvent].eventTime) - now > 0){
        var timeleft = (Date.parse(nonExpiredEvents[selectedEvent].eventTime) - now)/1000;

        var days = Math.floor(timeleft/60/60/24);
        var hours = Math.floor(timeleft/60/60%24);
        var miniutes = Math.floor(timeleft/60%60);
        var seconds = Math.floor(timeleft%60);

        if(seconds.toString().length < 2) {
            seconds = "0" + seconds;
        }
        if(miniutes.toString().length < 2) {
            miniutes = "0" + miniutes;
        }
        if(hours.toString().length < 2) {
            hours = "0" + hours;
        }
        

        TextElement.innerHTML = `${days}:${hours}:${miniutes}:${seconds}`;
        setTimeout(function(){ updateTime(); }, 1000);
    }else{
        TextElement.innerHTML = "Eventet har börjat!";
    }
}