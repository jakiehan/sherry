import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../constants/constants';

export const getUserRoles = (state: StateSchema) => state.user.autData?.roles;

export const isAdminRole = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN))
);

export const isManagerRole = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER))
);
