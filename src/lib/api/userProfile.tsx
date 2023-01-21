import axios from 'axios';

export const createUser = async ({
  icon,
  publickey,
  username,
  verified,
  bio,
}: {
  icon: string;
  publickey: string;
  username: string;
  verified: boolean;
  bio: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/create`, {
        icon: icon,
        publickey: publickey,
        username: username,
        verified: verified,
        bio: bio,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const updateUser = async ({
  icon,
  publickey,
  username,
  verified,
  bio,
}: {
  icon: string;
  publickey: string;
  username: string;
  verified: boolean;
  bio: string;
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/updateUser`, {
        icon: icon,
        publickey: publickey,
        username: username,
        verified: verified,
        bio: bio,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
