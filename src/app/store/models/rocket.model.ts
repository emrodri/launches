import {Agency} from './agency.model';

export interface Rocket {
  id: number;
  name: string;
  agencies: Agency[];
}
