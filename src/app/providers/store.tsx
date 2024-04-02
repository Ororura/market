import { configureStore, Middleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/shared/api";
import { useDispatch, useSelector } from "react-redux";
import { reducers } from "@/app/providers/redures.ts";
import { setAppLoading } from "@/entities/app";

interface IAction {
  type: string;
}

const loadingMiddleware: Middleware = (store) => (next) => (action) => {
  if ((action as IAction).type.endsWith('/pending')) {
    store.dispatch(setAppLoading(true));
  } else if ((action as IAction).type.endsWith('/fulfilled') || (action as IAction).type.endsWith('/rejected')) {
    store.dispatch(setAppLoading(false));
  }
  return next(action);
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware, loadingMiddleware),
});

setupListeners(store.dispatch);

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
