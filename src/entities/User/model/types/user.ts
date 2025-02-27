import { UserRole } from '../constants/constants';

export interface User {
  id: string;
  username: string;
  avatar: string;
  roles?: UserRole[];
}

export interface UserSchema {
  autData?: User;
  _inited: boolean;
}
