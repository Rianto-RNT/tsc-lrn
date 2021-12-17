import { Coach } from "./Coach";

export class SkateboardCoach implements Coach {
    getDailyWorkout(): string {
        return "Practice your Kickflip technique.";
    }
    
}