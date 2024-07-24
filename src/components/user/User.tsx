'use client'

import { format } from "date-fns"
import useModalStore from "../modal/modal.store"

export interface User {
  id: string
  name: string
  src: string
  status: "Ativo" | "Caído" | "Vencedor"
  fallen_time?: string
}

export function User({ id, name, src, status, fallen_time }: User) {
  const month = format(new Date(), 'MM')
  const { setModalData, setIsModalOpen } = useModalStore()

  function handleClick() {
    setModalData({
      id,
      name,
      status,
      fallen_time
    })
    setIsModalOpen(true)
  }

  return (
    <div onClick={handleClick} className="cursor-pointer w-full aspect-square rounded">
      <img className={`${(status === "Caído" && month !== "10") ? "opacity-20 grayscale" : ""} w-full h-auto rounded`} src={src} alt={name} />
    </div>
  );
}