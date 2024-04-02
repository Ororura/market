import "./App.css";
import { Sidebar } from "@/widgets/sidebar";
import { Main } from "../pages/main/Main.tsx";
import { Provider } from "react-redux";
import { store } from "./AppStore.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <Sidebar>
        <Main></Main>
      </Sidebar>
    </Provider>
  );
};

export default App;
