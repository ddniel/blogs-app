export default function formatDate(rawDate: string | Date): string {
  const date = new Date(rawDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return date.toLocaleDateString(undefined, options);
}
