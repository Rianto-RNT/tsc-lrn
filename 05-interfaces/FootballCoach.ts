import { Coach } from "./Coach";

export class FootballCoach implements Coach {
    getDailyWorkout(): string {
        return "Hit 100 ball at the goal keeper."
    }
    
}