import { Coach } from "./Coach";
import { FootballCoach } from "./FootballCoach";
import { SkateboardCoach } from "./SkateboardCoach";

let mySkateboardCoach = new SkateboardCoach();
let myFootballCoach = new FootballCoach();

// declare an array for coaches ... initialy empty
let theCoaches: Coach[] = [];

// add the coaches to the array
theCoaches.push(mySkateboardCoach);
theCoaches.push(myFootballCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
