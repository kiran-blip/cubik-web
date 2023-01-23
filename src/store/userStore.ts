import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface IWallet {
  publicKey?: string;
  connected: boolean;
}

interface ICivic {
  verified: boolean;
}

export interface IUser {
  id?: string;
  bio?: string;
  picture?: String;
  pub_key?: String;
  userName?: String;
  verified?: Boolean;
}
interface IUserStore {
  user?: IUser;
  wallet?: IWallet;
  civic?: ICivic;
  setUser: (user: IUser) => IUser | undefined;
  setWallet: (wallet: IWallet) => IUser | undefined;
  setCivic: (varified: boolean) => ICivic | undefined;
}

const user: IUser = {
  id: undefined,
};
const wallet: IWallet = {
  connected: false,
};
export const useUserStore = create<IUserStore>((set, get) => ({
  user: user,
  civic: { verified: false },
  wallet: wallet,
  setUser: (data: IUser): IUser | undefined => {
    console.log('inside set user');
    set(
      produce((draft) => {
        draft.user = data;
      })
    );
    const newUser = get().user as IUser;
    return newUser;
  },
  setWallet: (wallet: IWallet): IUser | undefined => {
    set(
      produce((draft) => {
        draft.wallet = wallet;
      })
    );
    const newUser = get().user;
    return newUser;
  },
  setCivic: (verified: boolean): ICivic | undefined => {
    set(
      produce((draft) => {
        draft.civic.verified = verified;
      })
    );
    const civic = get().civic;
    return civic;
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', useUserStore);
}
