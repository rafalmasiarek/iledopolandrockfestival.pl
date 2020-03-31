"use strict";

class TimeHelpers {
    
    constructor() {
        
    }

    getRemainingTime(target) {
        let targetTime = Math.floor(target.getTime() / 1000);
        let currentTime = Math.floor((+new Date()) / 1000);
        
        let remainingSeconds = (targetTime > currentTime) ? (targetTime - currentTime) : 0;
        // remainingSeconds = 1281611; // 14:20:00:11
        // remainingSeconds = 864011; // 10:00:00:11
        // remainingSeconds = 72011; // 20:00:11
        // remainingSeconds = 36011; // 20:00:11
        // remainingSeconds = 10; // 10:00:11

        // Do some time calculations.
        let seconds = remainingSeconds;

        let days = Math.floor(seconds / 86400);
        seconds = seconds % 86400;

        let hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;

        let minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);

        return {
            totalSeconds: remainingSeconds,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    // leadingZero(number, size) {
    //     var s = number + "";
    //     while (s.length < (size || 2)) s = "0" + s;
    //     return s;
    // }

}