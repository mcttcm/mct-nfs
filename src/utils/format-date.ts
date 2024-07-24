import { format } from "date-fns";

export function formatDate() {
  const now = new Date();
  return format(now, 'dd/MM HH:mm');
}