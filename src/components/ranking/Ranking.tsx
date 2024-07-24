import { useEffect, useState } from "react";
import { Podium } from "../podium/Podium";
import { User } from "../user/User";
import { getUsers, updateUser } from "@/services/user";
import { sortPlayers } from "@/utils/sort-players";
import { Table } from "../table/Table";
import { format } from "date-fns";

export function Ranking() {
  const month = format(new Date(), 'MM')

  const [podiumList, setPodiumList] = useState<User[]>([])
  const [tableList, setTableList] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchUsers() {
    setIsLoading(true)
    try {
      const fetchedUsers = await getUsers();
      const isActive = fetchedUsers.filter((user) => user.status === "Ativo")
      if (isActive.length > 0 && month === "10") {
        const fallen_time = ""
        isActive.map((user) => {
          updateUser(user.id, "Vencedor", fallen_time)
        })
        fetchUsers()
        return
      } else {
        const sortedPlayers = sortPlayers(fetchedUsers)
        setPodiumList(sortedPlayers.slice(0, 3));
        setTableList(sortedPlayers.slice(3))
      }
    } catch {
      console.error("Erro ao buscar usuários.");
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div className="relative flex flex-col items-center space-y-10 w-full max-w-screen-sm h-[calc(100%-24px)] mt-6">
      <Podium userList={podiumList} isLoading={isLoading} />
      {
        tableList.length > 0 &&
        <Table userList={tableList} />
      }
    </div>
  );
}