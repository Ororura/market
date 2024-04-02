import { FC, ReactNode } from "react";
import { useStore } from "@/app/providers/hooks.ts";
import styles from './styles.module.css';

interface ILoadingLayout {
  children: ReactNode;
}

export const LoadingLayout: FC<ILoadingLayout> = ({ children }) => {
  const {
    state: {
      App: { isAppLoading }
    },
  } = useStore((store) => ({
    App: store.App,
  }));

  return (
    <>
      {isAppLoading && (
        <div className={styles.spinner}>
          <span className={styles.loader}></span>
        </div>
      )}
      {children}
    </>
  );
};