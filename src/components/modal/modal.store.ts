import { create } from 'zustand'

export interface ModalData {
  id: string
  name: string
  status: string
  fallen_time?: string | null
}

interface ModalState {
  isModalOpen: boolean;
  modalData: ModalData;
  setIsModalOpen: (value: boolean) => void;
  setModalData: (data: ModalData) => void;
  resetModalData: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  modalData: { id: '', name: '', status: '', fallen_time: null },
  setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
  setModalData: (data) => set({ modalData: { ...data, fallen_time: data.fallen_time ?? null } }),
  resetModalData: () => set({
    modalData: { id: '', name: '', status: '', fallen_time: null }
  })
}));

export default useModalStore;