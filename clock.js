const reader = require('readline');
// HH MM SS
class Clock {
    constructor() {
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        const timeKeys = Object.keys(this);
        let timeString = [];
        timeKeys.forEach((key) => {
            if (this[key] < 10) {
                timeString.push(`0${this[key]}`);
            } else {
                timeString.push(`${this[key]}`);
            }
        });
        console.log(timeString.join(":"));
    }

    _tick() {
        // 1. Increment the time by one second.
        if (this["seconds"] === 59) {
            this["seconds"] = 0;
            if (this["minutes"] === 59) {
              this["minutes"] = 0;  
              if (this["hours"] === 23) {
                    this["hours"] = 0;
              } else {
                    this["hours"] += 1;
              }
            } else {
                this["minutes"] += 1;
            }
        } else {
            this["seconds"] += 1;
        }
        this.printTime();
    }
}

const clock = new Clock();