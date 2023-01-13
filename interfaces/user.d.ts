import { projectType } from './project';
import { contributions } from './contributions';

export type userType = {
  picture: String;
  pub_key: String;
  name: String;
  userName: String;
  verified: Boolean;
  projects?: projectType[];
  contributions: contributions[];
};
