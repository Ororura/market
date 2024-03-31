import { FC, ReactNode } from "react";
import styles from "./Sidebar.module.css";
interface ISidebarProps {
  children: ReactNode;
}

export const Sidebar: FC<ISidebarProps> = ({ children }) => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logoWrapper}>
          <img id={styles["logo"]} src={"./assets/photo/img.png"} width="60" height="64" alt=" " />
        </div>
        {/*<Cart></Cart>*/}
      </div>
      {children}
    </>
  );
};
