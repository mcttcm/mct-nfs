import { create } from 'zustand'
import { User } from './User';

interface UserListState {
  refetch: boolean
  setRefetch: (refetch: boolean) => void
  sortedUsers: User[]
  setSortedUsers: (users: User[]) => void
}

const useUserListStore = create<UserListState>((set) => ({
  refetch: false,
  setRefetch: (value: boolean) => set({ refetch: value }),
  sortedUsers: [],
  setSortedUsers: (value: User[]) => set({ sortedUsers: value })
}));

export default useUserListStore;