var x = setInterval(function Eid() {
    var setDate = new Date("21 July 2021").getTime()

    var currentDate = new Date().getTime()

    var timeRemain = setDate - currentDate

    var daysRemain = Math.floor(timeRemain / (1000 * 60 * 60 * 24))

    var hoursRemain = Math.floor(timeRemain % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    var minuteRemain = Math.floor(timeRemain % (1000 * 60 * 60) / (1000 * 60))

    var secondsRemain = Math.floor(timeRemain % (1000 * 60) / (1000))

    document.getElementById('time').innerHTML = daysRemain + " : " + hoursRemain + " : " + minuteRemain + " : " + secondsRemain
    document.getElementById('text').innerHTML = "Days | Hours | Minutes | Seconds"

    if (timeRemain < 0) {
        clearInterval(x);
        document.getElementById('time').innerHTML = "EID MUBARAK!";
        document.getElementById('text').innerHTML = ""
    }

}, 1000)
