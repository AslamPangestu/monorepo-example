import { FC } from "react";

import styles from "./Layout.module.css";

interface Props {
  // any props that come into the component
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.headerContainer}>Ini Header</header>
      {children}
      <footer className={styles.footerContainer}>Ini Footer</footer>
    </>
  );
};
