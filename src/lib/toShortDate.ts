export function toShorDate(date?: string | Date | null): string {
  if (!date) return "";
  const toDate = new Date(date);
  return toDate.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
