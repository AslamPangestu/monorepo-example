import { FC } from "react";

interface Props {
  // any props that come into the component
}

export const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};
