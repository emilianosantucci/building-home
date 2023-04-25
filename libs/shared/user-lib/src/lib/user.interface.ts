import { Workspace } from '@building-home/shared-workspace-lib';

export interface User {
  id?: string;
  username: string;
  workspaces?: Workspace[];
}
