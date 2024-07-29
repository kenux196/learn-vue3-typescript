export function convertISODateString(date: Date) {
  return date.toISOString().split('T')[0];
}
