function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['De Enero de', 'De Febrero de', 'De Marzo de', 'De Abril de', 'De Mayo de', 'De Junio de', 'De Julio de', 'De Septiembre de', 'De Octubre de', 'De Noviembre de', 'De Diciembre de'];
    var days = ['Hoy es Domingo', 'Hoy es Lunes', 'Hoy es Martes', 'Hoy es Miercoles', 'Hoy es Jueves', 'Hoy es Viernes', 'Hoy es Sabado'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
