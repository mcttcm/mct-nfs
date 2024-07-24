'use client'

import { Modal } from '@/components/modal/Modal';
import useModalStore from '@/components/modal/modal.store';
import { Players } from '@/components/players/Players';
import { Ranking } from '@/components/ranking/Ranking';
import { countDays } from '@/utils/count-days';
import { Home, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function Page() {
  const daysLeft = countDays()

  const { isModalOpen, modalData } = useModalStore()

  const [showRanking, setShowRanking] = useState(false)

  return (
    <main className="flex h-screen flex-col items-center p-10 md:p-20 overflow-hidden">
      <img className="w-[100px] h-auto md:w-[150px] mb-16" src="./nfs.svg" alt="nfs page title" />
      {
        daysLeft >= 0 ?
          <div className="w-full flex space-x-1 justify-center mb-8 text-sm">
            <span className="text-[#FFDC62] flex">{daysLeft} dias</span>
            <span>até o fim de Setembro</span>
          </div> :
          <div className="w-full flex justify-center mb-8 text-sm">
            <button
              onClick={() => setShowRanking(!showRanking)}
              className="text-[#FFDC62] border border-[#FFDC62] rounded p-2 px-2.5 hover:bg-[#FFDC62] hover:text-[#151515]">
              {showRanking ? <Home size={16} /> : <Trophy size={16} />}
            </button>
          </div>
      }
      <div className="h-[calc(100%-165px)] md:h-[calc(100%-188px)] w-full flex justify-center">
        {
          showRanking ?
            <Ranking /> :
            <Players />
        }
      </div>
      {
        isModalOpen && modalData.id &&
        <Modal />
      }
    </main>
  );
}
