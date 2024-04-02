import { RootState } from "@/app/providers/store.tsx";

export const selectIsAppLoading = (state: RootState) => state.app.isAppLoading;