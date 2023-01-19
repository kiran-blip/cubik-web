import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface IWallet {
  publicKey: string;
  connected: boolean;
}

interface IUser {
  _id?: string;
  wallet?: IWallet;
  username?: string;
  about?: string;
  socials?: {
    name: string;
    status: boolean;
    _id: string;
  }[];
}
interface IUserStore {
  user?: IUser;
  setUser: (user: IUser) => IUser | undefined;
  setWallet: (wallet: IWallet) => IUser | undefined;
}

const user: IUser = {
  _id: undefined,
  wallet: undefined,
  username: undefined,
};

export const useUserStore = create<IUserStore>((set, get) => ({
  user: user,
  setUser: (data: IUser): IUser | undefined => {
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
        draft.user.wallet = wallet;
      })
    );
    const newUser = get().user;
    return newUser;
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', useUserStore);
}
