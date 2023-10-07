import { Activity } from "src/app/models/interfaces"
import { action1, action2, action3 } from "src/app/models/temes"
import { activityType1, activityType2, activityType3 } from "src/app/models/activity-types"

interface ActivitiesList {
    [action1]: Activity[],
    [action2]: Activity[],
    [action3]: Activity[]

}

export const activitiesList: ActivitiesList = {
    [action1]: [
        {
            action: action1,
            type: activityType1,
            statement: "What prortion of the Earth's surface is covered by water?",
            options: ['20', '40', '85'],
            solution: ["85"],
            extraInfo: 'Sabies que fdsaf'
        },
        {
            action: action1,
            type: activityType2,
            statement: "Ordena",
            options: ['1', '20', '4'],
            solution: ["1", "4", "20"],
            extraInfo: 'Sabies que fdsaf'
        },      
    ],
    [action2]: [
        {
            action: action2,
            type: 'select',
            statement: "How much water drinks a phytoplancton a day?",
            options: ['1', '4', '20'],
            solution: ["20"],
            extraInfo: 'Sabies que fdsaf'
        },
        {
            action: action1,
            type: activityType2,
            statement: "Ordena de posterior a anterior",
            options: ['b', 'c', 'a'],
            solution: ["c", "b", "a"],
            extraInfo: 'Sabies que fdsaf'
        },  
    ],
    [action3]: [
        {
            action: action3,
            type: 'select',
            statement: "How many hours a day does a phytoplancton need to rest?",
            options: ['2', '4', '24'],
            solution: ["24"],
            extraInfo: 'Sabies que fdsaf'
        },
                {
            action: action1,
            type: activityType2,
            statement: "Ordena de posterior a anterior",
            options: ['b', 'c', 'a'],
            solution: ["c", "b", "a"],
            extraInfo: 'Sabies que fdsaf'
        },    
    ]
}