import { create } from 'zustand'

export enum PathUploadedENUM {
    VACANCY = 0,
    RESUME,
    RESULTS
}

export type usePathStoreProps = {
    state: PathUploadedENUM,
    next: () => void,
    prev: () => void,
    reset: () => void
}

export const usePathStore = create<usePathStoreProps>()((set, get) => ({
    state: PathUploadedENUM.VACANCY,
    next: () => set(({ state }) => ({ state: state + 1 })),
    prev: () => set(({ state }) => ({ state: state - 1 })),
    reset: () => set({ state: 0 })
}))