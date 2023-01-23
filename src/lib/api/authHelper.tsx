import { PublicKey } from '@solana/web3.js';
import axios from 'axios';

export const getUserByPubKey = async (publicKey: PublicKey): Promise<any> => {
  try {
    const res = await axios.post(
      `https://cubic-backend-production.up.railway.app/api/v1/user/getuserPublickey`,
      {
        publickey: publicKey.toBase58(),
      }
    );
    return res.data;
  } catch (e) {
    console.log((e as Error).message);
    return;
  }
};

export const getUserByid = async (id: string) => {
  try {
    const res = await axios.post(
      `https://cubic-backend-production.up.railway.app/api/v1/user/getuserId`,
      {
        id,
      }
    );
    return res.data;
  } catch (e) {
    console.log((e as Error).message);
    return;
  }
};
