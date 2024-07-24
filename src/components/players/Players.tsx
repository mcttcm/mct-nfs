'use client'

import { useEffect, useState } from "react";
import { Filter } from "../filter/Filter";
import { filterOptions } from "../filter/options";
import { User } from "../user/User";
import { Skeleton } from "../skeleton/Skeleton";
import { getUsers } from "@/services/user";
import useUserListStore from "../user/user.store";

export function Players() {
  const { refetch, setRefetch } = useUserListStore()
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0])
  const [users, setUsers] = useState<User[]>([])
  const [userList, setUserList] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingFilter, setIsLoadingFilter] = useState(true)
  const [hasScrollbar, setHasScrollbar] = useState(false)

  useEffect(() => {
    if (users.length > 0) {
      const scrollArea = document.getElementById('players');
      if (scrollArea) {
        setHasScrollbar(scrollArea!.scrollHeight > scrollArea!.clientHeight)
      }
    }
  }, [users])

  async function fetchAndUpdateUsers() {
    setIsLoading(true);
    try {
      const fetchedUsers = await getUsers();
      setUserList(fetchedUsers);
      applyFilter(fetchedUsers);
    } catch {
      console.error("Erro ao buscar usuários.");
    } finally {
      setIsLoading(false);
    }
  };

  function applyFilter(users: User[]) {
    setIsLoadingFilter(true);
    if (selectedFilter === "Ativos") {
      setUsers(users.filter((user) => user.status === "Ativo"));
    } else if (selectedFilter === "Caídos") {
      setUsers(users.filter((user) => user.status === "Caído"));
    } else {
      setUsers(users);
    }
    setIsLoadingFilter(false);
  };

  useEffect(() => {
    fetchAndUpdateUsers();
  }, []);

  useEffect(() => {
    applyFilter(userList);
  }, [selectedFilter]);

  useEffect(() => {
    if (refetch) {
      fetchAndUpdateUsers();
      setRefetch(false);
    }
  }, [refetch]);

  return (
    <div className="relative flex flex-col space-y-6 w-full max-w-screen-sm h-full">
      <div className="w-full flex flex-col justify-end">
        <Filter selected={selectedFilter} setSelected={setSelectedFilter} />
      </div>
      <div id="players" className="z-[0] w-full overflow-y-auto h-full">
        <div

          className={`${hasScrollbar ? "pr-2" : "pr-0"} z-[0] relative w-full grid gap-4 grid-cols-4 md:grid-cols-5`}
        >
          {
            (isLoading || isLoadingFilter) ?
              Array.from({ length: 10 }).map(() => {
                return (
                  <Skeleton />
                );
              }) : (users.length === 0 ?
                <span className="absolute top-0 text-sm text-[#494949] w-full text-center">SEM RESULTADOS</span> :
                users.map((user) => {
                  return (
                    <User id={user.id} name={user.name} src={user.src} status={user.status} fallen_time={user.fallen_time} />
                  );
                })
              )
          }
        </div>
      </div>
    </div>
  );
}