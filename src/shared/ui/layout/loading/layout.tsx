import { FC, ReactNode } from "react";
import { useAppSelector } from "@/app/providers/store.tsx";
import { selectIsAppLoading } from "@/entities/app";

interface ILoadingLayout {
  children: ReactNode;
}

export const LoadingLayout: FC<ILoadingLayout> = ({ children }) => {
  const isAppLoading = useAppSelector(selectIsAppLoading);

  return (
    <div>
      {isAppLoading && (<h1>Loading</h1>)}
      <>{children}</>
    </div>
  );
};