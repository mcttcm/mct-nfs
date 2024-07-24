'use client'

import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import { filterOptions } from "./options";

interface Props {
  selected: string
  setSelected: (selected: string) => void
}

export function Filter({ selected, setSelected }: Props) {
  const [open, setOpen] = useState(false)

  function handleOpenFilter() {
    setOpen(!open)
  }

  function handleClick(option: string) {
    setSelected(option)
    setOpen(false)
  }

  return (
    <div className="z-[1] relative flex justify-end">
      <div onClick={handleOpenFilter} className="cursor-pointer flex space-x-4 items-center">
        <span className="text-sm">{selected}</span>
        <ChevronDown color="white" size={12} />
      </div>
      {open &&
        <div className="absolute top-[30px] right-0 bg-[#242424] rounded">
          {filterOptions.map((option: string) => {
            return (
              <div
                onClick={() => handleClick(option)}
                className="cursor-pointer text-sm px-6 py-3 rounded text-center hover:bg-[#323232]"
              >
                {option}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}