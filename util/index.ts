export function sortDates(field: string) {
  return (p1: any, p2: any) => {
    return new Date(p1[field]).getUTCMilliseconds() - new Date(p2[field]).getUTCMilliseconds();
  };
}
