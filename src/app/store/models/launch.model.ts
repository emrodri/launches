import {Mission} from './mission.model';
import {Rocket} from './rocket.model';
import {Agency} from './agency.model';

/**
 * Hemos simplificado el modelo ya que era bastante extenso para utilizar solo los campos que utilizamos
 * */
export interface Launch {
  id: number;
  name: string;
  status: number;
  changed: Date;
  rocket: Rocket;
  missions: Mission[];
}
export const launchesInitialState: Launch[] = [];




