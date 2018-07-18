import {Agency} from './agency.model';

export interface Rocket {
  id: number;
  name: string;
  agencies: Agency[];
  imageURL: string;
  configuration: string;
  familyname: string;
}
