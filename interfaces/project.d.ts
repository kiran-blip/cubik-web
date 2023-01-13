import { contributions } from './contributions';
import { userType } from './user';

export type projectType = {
  logo: String;
  name: String;
  short_description: String;
  detailed_description: String;
  owner: userType;
  contributors: contributions[];
  funding_received: Number;
  socials: [{ name: String; url: String }];
};
