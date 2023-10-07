import { Injectable } from '@angular/core';
import { Action } from '../models/interfaces';
import { activitiesList } from 'src/assets/activitiesList';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

constructor() { }

  getActivity(actionType: Action) {
    const randomNum: number = Math.floor(Math.random() * (Object.keys(activitiesList).length - 1));
    return activitiesList[actionType][randomNum];
  }

  

}
