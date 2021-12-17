"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FootballCoach_1 = require("./FootballCoach");
const SkateboardCoach_1 = require("./SkateboardCoach");
let mySkateboardCoach = new SkateboardCoach_1.SkateboardCoach();
let myFootballCoach = new FootballCoach_1.FootballCoach();
// declare an array for coaches ... initialy empty
let theCoaches = [];
// add the coaches to the array
theCoaches.push(mySkateboardCoach);
theCoaches.push(myFootballCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
