import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/providers/types.ts";
import { useMemo } from "react";
import { createSelector } from "reselect";
import { actions, IActions } from "@/app/providers/actions.ts";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

export const useStore = <T>(selector: (store: RootState) => T): { state: T; actions: IActions } => {
  const memoizedSelector = useMemo(() => createSelector(
    state => state,
    selector
  ), [selector]);
  return {
    state: useAppSelector(memoizedSelector),
    actions: actions,
  };
};