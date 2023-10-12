import { create } from "zustand";

type useSignInModalProps = {
  isOpen: boolean;
  toggleStatusBool: () => void;
};

export const useSignInModal = create<useSignInModalProps>()((set) => ({
  isOpen: false,
  toggleStatusBool: () => {
    set((state) => {
      console.log("click", state);

      return { isOpen: !state.isOpen };
    });
  },
}));
