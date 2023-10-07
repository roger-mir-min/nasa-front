import { action1, action2, action3 } from "./temes";
import { activityType1, activityType2, activityType3 } from "./activity-types";


export interface User {
    id: string;
    password: string; //key?
}

export interface FitoState {
    health: number,
    energy: number
}

export type Action = typeof action1 | typeof action2 | typeof action3;
export type ActivityType = typeof activityType1 | typeof activityType2 | typeof activityType3;

export type Answer = string[]; // o string? o object?

export interface Activity {
    id?: number,
    action: Action,
    type: ActivityType,
    statement: string,
    options?: Answer,
    solution: Answer
}

export interface SolvedActivity extends Activity{
    userAnswer: Answer;
}

export interface SolvedActivityResult{
    action: Action,
    points: number | boolean //number o boolean?
}