import { action1, action2, action3 } from "./temes";
import { activityType1, activityType2, activityType3 } from "./activity-types";


export interface User {
    id: string;
    password: string; //key?
}

export interface FitoState {
    name: string,
    health: number,
    co2Consumed: number, //CO2 de cara a galeria
    reproductions: number,
    inSymbiosis: boolean
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
    solution: Answer,
    extraInfo: string,
    assets?: string[]
}

export interface SolvedActivity extends Activity{
    userAnswer: Answer;
    points: number | boolean;
}

export interface SolvedActivityResult{
    action: Action,
    points: number | boolean //number o boolean?
}