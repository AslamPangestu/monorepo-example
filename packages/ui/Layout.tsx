import { FC } from "react";

interface Props {
  // any props that come into the component
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header >Ini Header</header>
      {children}
      <footer >Ini Footer</footer>
    </>
  );
};
