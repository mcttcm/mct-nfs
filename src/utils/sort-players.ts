import { User } from "@/components/user/User";

export function sortPlayers(players: User[]) {
  return [...players].sort((a, b) => {
    if (!a.fallen_time) return -1;
    if (!b.fallen_time) return 1;

    const [dayA, timeA] = a.fallen_time.split(' ');
    const [dayB, timeB] = b.fallen_time.split(' ');

    const [dayANum] = dayA.split('/');
    const [dayBNum] = dayB.split('/');

    const [hourA, minuteA] = timeA.split(':');
    const [hourB, minuteB] = timeB.split(':');

    if (parseInt(dayANum) !== parseInt(dayBNum)) {
      return parseInt(dayANum) - parseInt(dayBNum);
    }

    if (hourA !== hourB) {
      return parseInt(hourA) - parseInt(hourB);
    }

    return parseInt(minuteA) - parseInt(minuteB);
  });
}