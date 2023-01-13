import { PublicKey } from '@solana/web3.js';
import axios from 'axios';

export const getUserByPubKey = async (publicKey: PublicKey): Promise<any> => {
  const reqBody = { publickey: publicKey.toBase58() };
  axios
    .post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/getuserPublickey`,
      { params: reqBody }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log('error in get response of user details -', e));
};
