import { Workspace } from '@building-home/shared-lib-workspace';
export interface User {
  id?: string;
  username: string;
  workspaces?: Workspace[];
}
