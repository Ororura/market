import "./App.css";
import { Sidebar } from "@/widgets/sidebar";
import { Main } from "../pages/main/Main.tsx";

const App = () => {
  return (
    <Sidebar>
      <Main></Main>
    </Sidebar>
  );
};

export default App;
