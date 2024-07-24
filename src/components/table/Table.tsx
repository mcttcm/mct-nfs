import { useEffect, useState } from "react";
import { User } from "../user/User";

interface TableProps {
  userList: User[]
}

export function Table({ userList }: TableProps) {
  const [hasScrollbar, setHasScrollbar] = useState(false)

  useEffect(() => {
    const scrollArea = document.getElementById('table');
    if (scrollArea) {
      setHasScrollbar(scrollArea!.scrollHeight > scrollArea!.clientHeight)
    }
  }, [])

  return (
    <div id="table" className={`${hasScrollbar ? "pr-2" : "pr-0"} max-w-[300px] w-full h-[80%] overflow-y-auto flex flex-col space-y-4`}>
      {userList.map((user, index) => {
        return (
          <div className="flex w-full justify-between text-sm text-[#6F6F6F]">
            <div className="flex items-center space-x-4 w-[calc(100%-80px)]">
              <span className="font-bold">{index + 4}°</span>
              <span>{user.name}</span>
            </div>
            <span className="w-[80px] flex items-center justify-end">{user.fallen_time}</span>
          </div>
        );
      })}
    </div>
  );
}