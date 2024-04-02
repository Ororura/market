import "./App.css";
import { Sidebar } from "@/widgets/sidebar";
import { Main } from "../pages/main/Main.tsx";
import { Provider } from "react-redux";
import { store } from "./providers/store.tsx";
import { LoadingLayout } from "@/shared/ui/layout/loading";

const App = () => {
  return (
    <Provider store={store}>
      <LoadingLayout>
        <Sidebar>
          <Main></Main>
        </Sidebar>
      </LoadingLayout>
    </Provider>
  );
};

export default App;
