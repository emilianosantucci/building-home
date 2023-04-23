import { Workspace } from '@building-home/shared-workspace-lib';
import { User } from './user.interface';

export interface Owner extends User {
  workspaces?: Workspace[];
}
