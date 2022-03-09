var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

let running;

class timer{
    constructor(ms, sec, min, hrs){
        this.ms = ms;
        this.sec = sec;
        this.min = min;
        this.hrs = hrs;
    }
    start() {
     running = setInterval(() => {
            //clearInterval(intervall);
            this.sec += 10;
            console.log(this.sec);

            let dateTimer = new Date(this.sec);

        document.getElementById('watch').innerHTML = 
          ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);


        }, 10)
}
    reset() {
        clearInterval(running);
        document.getElementById('watch').textContent = "00:00:00:00";
        this.ms = 0;
        this.sec = 0;
        this.min = 0;
        this.hrs = 0;
    }


    stop() {
        clearInterval(running);
    }

}

var watch = new timer(0, 0, 0, 0);


start.onclick = function() {
    
    watch.start();
}

reset.onclick = function() {
   watch.reset();
}

stop.onclick = function() {
    watch.stop();
 }