import { FC, ReactNode } from "react";
import { useAppSelector } from "@/app/providers/store.tsx";
import { selectIsAppLoading } from "@/entities/app";
import styles from './styles.module.css';

interface ILoadingLayout {
  children: ReactNode;
}

export const LoadingLayout: FC<ILoadingLayout> = ({ children }) => {
  const isAppLoading = useAppSelector(selectIsAppLoading);

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