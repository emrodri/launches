import {Agency} from './agency.model';

export interface Mission {
  id: number;
  name: string;
  description: string;
  type: number;
  typeName: string;
  agencies: Agency[];
}