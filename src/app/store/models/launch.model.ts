import {Mission} from './mission.model';
import {Rocket} from './rocket.model';

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
  isostart: Date;
  isoend: Date;
  net: Date;
  location: Location;
}

export interface Location {
  id: number;
  name: string;
  infoURL: string;
  wikiURL: string;
}
export const launchesInitialState: Launch[] = [];




