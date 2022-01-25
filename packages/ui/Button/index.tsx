import { FC } from "react";

import styles from "./Button.module.css";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.base} onClick={onClick}>
      {children}
    </button>
  );
};
