import { userType } from './user';

export type contributions = {
    projectId: String;
    projectName: String;
    project_logo: String;
    contributors: userType[];
    amount: number;
    token: String;
    signature: String;
    cubic_matching_pool_donation: number;
  };
  