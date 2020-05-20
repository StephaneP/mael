import compareDesc from "date-fns/compareDesc";

export function sortDates(field: string) {
  return (p1: any, p2: any) => {
    return compareDesc(new Date(p1[field]), new Date(p2[field]));
  };
}
