import { FC } from "react";
import format from "date-fns/format";

const Datetime: FC = ({ children }) => {
  return <>{format(new Date((children as unknown) as string), "dd/MM/yy HH:mm")}</>;
};

export default Datetime;
