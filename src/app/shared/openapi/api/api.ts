export * from './authAPI.service';
import { AuthAPIService } from './authAPI.service';
export * from './usersAPI.service';
import { UsersAPIService } from './usersAPI.service';
export const APIS = [AuthAPIService, UsersAPIService];
