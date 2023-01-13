import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface IWallet {
  publicKey: String;
  connected: boolean;
}

interface IUser {
  _id?: string;
  wallet?: IWallet;
  username?: string;
}
interface IUserStore {
  user?: IUser;
  setUser: (user: IUser) => void;
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
    const newUser = get().user;
    return newUser;
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', useUserStore);
}
