export interface LaunchStatus {
  id: number;
  name: string;
  description: string;
  changed: Date;
  color: string;
}

export const launchStatusesInitialState = [];
