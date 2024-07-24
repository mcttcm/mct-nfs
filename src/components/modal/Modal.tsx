import { useState } from "react";
import useModalStore from "./modal.store";
import { updateUser } from "@/services/user";
import { formatDate } from "@/utils/format-date";
import useUserListStore from "../user/user.store";

export function Modal() {
  const { modalData, setIsModalOpen, resetModalData } = useModalStore()
  const { setRefetch } = useUserListStore()

  const [deleteMode, setDeleteMode] = useState(false)

  function handleOpenDelete(e: any) {
    e.stopPropagation()
    setDeleteMode(true)
  }

  function handleUpdate(e: any) {
    e.stopPropagation()
    updateUser(modalData.id, "Caído", formatDate())
    setRefetch(true)
    handleClose()
  }

  function handleClose() {
    setIsModalOpen(false)
    setDeleteMode(false)
    resetModalData()
  }

  return (
    <div onClick={handleClose} className="z-[2] w-screen h-screen absolute top-0 left-0 text-sm bg-[#000000cc] flex items-center justify-center">
      {
        deleteMode ?
          <div onClick={(e) => e.stopPropagation()} className="p-8 bg-[#242424] flex flex-col space-y-4 rounded">
            <span className="max-w-[200px] text-center">Tem certeza que deseja derrubar {modalData.name}?</span>
            <div className="w-full flex flex-col space-y-2">
              <div onClick={handleUpdate} className="text-center cursor-pointer rounded border border-white px-6 py-2 hover:bg-white hover:text-black">
                <span className="uppercase text-xs font-semibold">Sim</span>
              </div>
              <div onClick={handleClose} className="text-center cursor-pointer rounded border border-[#D94343] px-6 py-2 bg-[#D94343] hover:bg-[#df6565]">
                <span className="uppercase text-xs font-semibold">Cancelar</span>
              </div>
            </div>
          </div> :
          <div onClick={(e) => e.stopPropagation()} className="p-8 bg-[#242424] text-center flex flex-col justify-center items-center space-y-4 rounded">
            <span className="max-w-[200px]">{modalData.name}</span>
            <span className={`${modalData.status === "Ativo" ? "text-[#6AD943]" : (modalData.status === "Caído" ? "px-6 text-[#D94343]" : "text-[#FFD978]")} 
            text-lg uppercase`}>{modalData.status}</span>
            {
              (modalData.status === "Ativo") ?
                <div onClick={handleOpenDelete} className="w-full text-center cursor-pointer rounded border border-white px-6 py-2 hover:bg-white hover:text-black">
                  <span className="uppercase text-xs font-semibold">Derrubar</span>
                </div>
                : (
                  modalData.status === "Caído" ?
                    <span className="text-[#4F4F4F]">{modalData.fallen_time}</span> : null
                )
            }
          </div>
      }
    </div>
  );
}